<script setup lang="ts">
import type { Project } from '~/types/portfolio'

/**
 * Full-screen screenshot viewer for a case study. Grows out of the clicked thumbnail,
 * shows the thumbnail instantly and swaps in the full image when loaded, and supports
 * arrows, swipe, Escape and a focus trap.
 */
const props = defineProps<{
  project: Project
  /** Finds the gallery thumbnail button for screen k, so closing can shrink back into it. */
  getThumb: (k: number) => HTMLElement | null
}>()

const motion = useMotion()
const { cursorActive } = useUiState()
const { shotSrc } = useAsset()

const root = ref<HTMLElement | null>(null)
const bg = ref<HTMLElement | null>(null)
const img = ref<HTMLImageElement | null>(null)
const capWrap = ref<HTMLElement | null>(null)
const prevBtn = ref<HTMLButtonElement | null>(null)
const nextBtn = ref<HTMLButtonElement | null>(null)
const closeBtn = ref<HTMLButtonElement | null>(null)

const isOpen = ref(false)
const idx = ref(0)
let busy = false

const shots = computed(() => props.project.shots)
const caption = computed(() => shots.value[idx.value]?.[1] ?? '')
const count = computed(() => `${pad2(idx.value + 1)} / ${pad2(shots.value.length)}`)
const alt = computed(() => `${props.project.name}: ${caption.value}`)

const chrome = () => [capWrap.value, prevBtn.value, nextBtn.value, closeBtn.value].filter((el): el is HTMLElement => !!el)
const fullSrc = (k: number) => shotSrc(props.project.slug, shots.value[k]?.[0] ?? '', 'f')

const loadImg = (src: string) =>
  new Promise<HTMLImageElement | null>((resolve) => {
    const im = new Image()
    im.onload = () => resolve(im)
    im.onerror = () => resolve(null)
    im.src = src
  })
const aspectOf = (im: HTMLImageElement | null) => (im && im.naturalWidth ? im.naturalWidth / im.naturalHeight : 16 / 9)

/** Size the image to the largest box that fits beside the chrome, preserving aspect. */
function fit(aspect: number) {
  const lb = root.value
  const el = img.value
  if (!lb || !el) return
  const cs = getComputedStyle(lb)
  const availW = lb.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight)
  const availH = lb.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom) - (capWrap.value?.offsetHeight ?? 0) - 16
  const w = Math.max(120, Math.min(availW, availH * aspect, 1600))
  el.style.width = `${w}px`
  el.style.height = `${w / aspect}px`
}

function setIndex(k: number) {
  const n = shots.value.length
  idx.value = ((k % n) + n) % n
}

async function show(k: number, btn: HTMLElement) {
  if (busy || isOpen.value || !shots.value.length) return
  busy = true
  isOpen.value = true
  cursorActive.value = false
  setIndex(k)
  const opened = idx.value
  const full = fullSrc(opened)
  await nextTick()
  const el = img.value!

  // Show the already-loaded thumbnail immediately; upgrade to the full image when it arrives.
  const thumb = btn.querySelector('img')
  if (thumb && thumb.complete && thumb.naturalWidth > 0) {
    el.src = thumb.currentSrc || thumb.src
    fit(aspectOf(thumb))
  } else {
    const im = await loadImg(full)
    el.src = full
    fit(aspectOf(im))
  }
  loadImg(full).then((im) => {
    if (im && isOpen.value && idx.value === opened) el.src = full
  })

  if (motion?.enabled) {
    const { gsap } = motion
    const r1 = (btn.querySelector('.shot-img') ?? btn).getBoundingClientRect()
    const r2 = el.getBoundingClientRect()
    gsap.set(chrome(), { opacity: 0 })
    gsap
      .timeline({ onComplete: () => { busy = false } })
      .fromTo(bg.value, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: 'power2.out' }, 0)
      .fromTo(el, { x: r1.left - r2.left, y: r1.top - r2.top, scale: r1.width / r2.width, transformOrigin: '0 0' }, { x: 0, y: 0, scale: 1, duration: 0.9, ease: 'expo.inOut' }, 0)
      .to(chrome(), { opacity: 1, duration: 0.5, stagger: 0.04 }, 0.6)
  } else {
    busy = false
  }
  closeBtn.value?.focus({ preventScroll: true })
}

function hide() {
  if (busy || !isOpen.value) return
  busy = true
  const btn = props.getThumb(idx.value)
  const el = img.value
  const done = () => {
    isOpen.value = false
    busy = false
    if (motion) motion.gsap.set([el, bg.value, ...chrome()], { clearProps: 'transform,opacity' })
    btn?.focus({ preventScroll: true })
  }
  if (!motion?.enabled || !el) {
    done()
    return
  }
  const { gsap } = motion
  if (btn && !inViewport(btn.getBoundingClientRect())) btn.scrollIntoView({ block: 'center' })
  const r1 = btn ? (btn.querySelector('.shot-img') ?? btn).getBoundingClientRect() : null
  const tl = gsap.timeline({ onComplete: done })
  tl.to(chrome(), { opacity: 0, duration: 0.25 }, 0)
  if (r1 && inViewport(r1)) {
    const r2 = el.getBoundingClientRect()
    tl.to(el, { x: r1.left - r2.left, y: r1.top - r2.top, scale: r1.width / r2.width, transformOrigin: '0 0', duration: 0.8, ease: 'expo.inOut' }, 0)
  } else {
    tl.to(el, { opacity: 0, scale: 0.94, duration: 0.4, ease: 'power2.in' }, 0)
  }
  tl.to(bg.value, { opacity: 0, duration: 0.5, ease: 'power2.inOut' }, 0.25)
}

async function go(dir: 1 | -1) {
  if (busy || !isOpen.value || shots.value.length < 2) return
  busy = true
  const el = img.value!
  const k = (idx.value + dir + shots.value.length) % shots.value.length
  const pending = loadImg(fullSrc(k))
  const targets = [el, capWrap.value]
  if (motion?.enabled) await motion.gsap.to(targets, { x: -dir * 60, opacity: 0, duration: 0.28, ease: 'power2.in' })
  setIndex(k)
  const im = await pending
  fit(aspectOf(im))
  el.src = fullSrc(k)
  if (motion?.enabled) {
    await motion.gsap.fromTo(targets, { x: dir * 60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.55, ease: 'expo.out', stagger: 0.04 })
  }
  busy = false
}

// Swipe left/right on touch screens.
let swipeX: number | null = null
const onPointerDown = (e: PointerEvent) => {
  swipeX = e.clientX
}
const onPointerUp = (e: PointerEvent) => {
  if (swipeX === null) return
  const dx = e.clientX - swipeX
  swipeX = null
  if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
}

function onKey(e: KeyboardEvent) {
  if (!isOpen.value) return
  if (e.key === 'Escape') {
    // Registered before the case study's handler; stop it so Escape closes only the viewer.
    e.preventDefault()
    e.stopImmediatePropagation()
    hide()
  } else if (e.key === 'ArrowRight') {
    e.preventDefault()
    go(1)
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault()
    go(-1)
  } else if (e.key === 'Tab') {
    e.preventDefault()
    e.stopImmediatePropagation()
    const focusable = [prevBtn.value, nextBtn.value, closeBtn.value].filter((b): b is HTMLButtonElement => !!b)
    const i = focusable.indexOf(document.activeElement as HTMLButtonElement)
    focusable[(i + (e.shiftKey ? -1 : 1) + focusable.length) % focusable.length]?.focus()
  }
}

const onResize = debounce(() => {
  if (isOpen.value && !busy) fit(aspectOf(img.value))
}, 150)

onMounted(() => {
  document.addEventListener('keydown', onKey)
  window.addEventListener('resize', onResize)
})
onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKey)
  window.removeEventListener('resize', onResize)
})

defineExpose({ show, isOpen })
</script>

<template>
  <div ref="root" class="lb" role="dialog" aria-modal="true" aria-label="Screenshot viewer" :hidden="!isOpen">
    <div ref="bg" class="lb-bg" @click="hide" />
    <figure class="lb-fig" @pointerdown="onPointerDown" @pointerup="onPointerUp">
      <img ref="img" :alt="alt" draggable="false">
      <figcaption ref="capWrap" class="lb-cap"><span class="label">{{ count }}</span><span>{{ caption }}</span></figcaption>
    </figure>
    <button ref="prevBtn" class="lb-btn lb-prev" type="button" aria-label="Previous screen" @click="go(-1)">←</button>
    <button ref="nextBtn" class="lb-btn lb-next" type="button" aria-label="Next screen" @click="go(1)">→</button>
    <button ref="closeBtn" class="btn lb-close" type="button" style="height:38px;padding:0 14px" @click="hide"><span class="icon-x" />Close</button>
  </div>
</template>
