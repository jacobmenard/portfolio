<script setup lang="ts">
import { PROFILE } from '~/data/portfolio'

/**
 * Full-screen menu for small screens. Opens as a circle growing from the menu button,
 * links rise in; closing reverses it, then scrolls to the chosen section.
 */
const props = defineProps<{
  links: readonly { label: string; href: string }[]
  origin: HTMLElement | null
}>()
const emit = defineEmits<{ navigate: [target: string] }>()

const { menuOpen } = useUiState()
const motion = useMotion()
const clock = useClock()

const root = ref<HTMLElement | null>(null)
const visible = ref(false)
let busy = false

function originPoint(): [number, number] {
  const r = props.origin?.getBoundingClientRect()
  return r ? [r.left + r.width / 2, r.top + r.height / 2] : [window.innerWidth - 40, 34]
}

async function open() {
  if (busy || menuOpen.value) return
  busy = true
  menuOpen.value = true
  visible.value = true
  motion?.stopScroll()
  await nextTick()
  const el = root.value
  if (!el) {
    busy = false
    return
  }
  if (motion?.enabled) {
    const { gsap } = motion
    const [x, y] = originPoint()
    gsap
      .timeline({ onComplete: () => { busy = false } })
      .fromTo(el, { clipPath: `circle(0px at ${x}px ${y}px)` }, {
        clipPath: `circle(${Math.hypot(window.innerWidth, window.innerHeight)}px at ${x}px ${y}px)`,
        duration: 0.9,
        ease: 'expo.inOut'
      })
      .fromTo(el.querySelectorAll('.menu-link span'), { yPercent: 110 }, { yPercent: 0, duration: 1, stagger: 0.06, ease: 'expo.out' }, 0.35)
  } else {
    busy = false
  }
  el.querySelector<HTMLElement>('.menu-link')?.focus({ preventScroll: true })
}

function close(after?: () => void) {
  if (busy || !menuOpen.value) return
  busy = true
  menuOpen.value = false
  const done = () => {
    visible.value = false
    busy = false
    motion?.startScroll()
    after?.()
  }
  const el = root.value
  if (motion?.enabled && el) {
    const { gsap } = motion
    const [x, y] = originPoint()
    gsap
      .timeline({ onComplete: done })
      .to(el.querySelectorAll('.menu-link span'), { yPercent: -110, duration: 0.45, stagger: 0.03, ease: 'power3.in' })
      .to(el, { clipPath: `circle(0px at ${x}px ${y}px)`, duration: 0.8, ease: 'expo.inOut' }, 0.15)
  } else {
    done()
  }
}

function toggle() {
  if (menuOpen.value) close()
  else open()
}

function pick(e: MouseEvent, href: string) {
  e.preventDefault()
  close(() => emit('navigate', href))
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape' && menuOpen.value && !busy) {
    close()
    props.origin?.focus()
  }
}

onMounted(() => document.addEventListener('keydown', onKey))
onBeforeUnmount(() => document.removeEventListener('keydown', onKey))

defineExpose({ toggle, close })
</script>

<template>
  <div id="menu" ref="root" class="menu wrap" :hidden="!visible">
    <nav aria-label="Mobile">
      <a v-for="l in links" :key="l.href" class="menu-link" :href="l.href" @click="pick($event, l.href)"><span>{{ l.label }}</span></a>
    </nav>
    <div class="menu-foot label"><span>{{ PROFILE.cityShort }}</span><span>{{ clock }}</span></div>
  </div>
</template>
