<script setup lang="ts">
import { PROJECTS } from '~/data/portfolio'
import type ScreenshotViewer from './ScreenshotViewer.vue'

/**
 * Case study overlay. Opens with a shared-image transition from the clicked card into
 * the cover, has a contents rail with scroll spy, a "next project" wipe, and closes by
 * flying the cover back into its card when both are on screen.
 */
type SectionId = 'walkthrough' | 'overview' | 'users' | 'constraints' | 'approach' | 'outcomes' | 'screens'
interface Section {
  id: SectionId
  title: string
  heading: string
}

const motion = useMotion()
const { caseOpen, cursorActive } = useUiState()
const { asset, shotSrc, coverSrc } = useAsset()
const caseStudy = useCaseStudy()

const root = ref<HTMLElement | null>(null)
const bg = ref<HTMLElement | null>(null)
const scroller = ref<HTMLElement | null>(null)
const hero = ref<HTMLElement | null>(null)
const article = ref<HTMLElement | null>(null)
const flip = ref<HTMLElement | null>(null)
const wipe = ref<HTMLElement | null>(null)
const wipeText = ref<HTMLElement | null>(null)
const closeBtn = ref<HTMLButtonElement | null>(null)
const prog = ref<HTMLElement | null>(null)
const viewer = ref<InstanceType<typeof ScreenshotViewer> | null>(null)

const visible = ref(false)
const current = ref(0)
const wipeTitle = ref('')
const showBarTitle = ref(false)
const activeSection = ref<SectionId | ''>('')
const seenSections = reactive(new Set<SectionId>())

const project = computed(() => PROJECTS[current.value] ?? PROJECTS[0]!)
const nextProject = computed(() => PROJECTS[(current.value + 1) % PROJECTS.length]!)
const liveUrl = computed(() => safeUrl(project.value.live))
const cover = computed(() => coverSrc(project.value))

const sections = computed<Section[]>(() => {
  const p = project.value
  const list: Section[] = []
  if (p.video) list.push({ id: 'walkthrough', title: 'Walkthrough', heading: `See it in use (${p.video.length})` })
  list.push(
    { id: 'overview', title: 'Overview', heading: 'The context' },
    { id: 'users', title: 'Users', heading: 'Who it serves and what they can do' },
    { id: 'constraints', title: 'Constraints', heading: 'What the build had to work around' },
    { id: 'approach', title: 'Approach', heading: 'Key decisions' },
    { id: 'outcomes', title: 'Outcomes', heading: 'What shipped' }
  )
  if (p.shots.length > 1) list.push({ id: 'screens', title: 'Screens', heading: `${p.shots.length} screens, in the order people use them` })
  return list
})

let busy = false
let lastFocus: HTMLElement | null = null
let spy: IntersectionObserver | null = null
let sectionReveal: IntersectionObserver | null = null

/* ---------- DOM helpers ---------- */
const cardShot = (i: number) => document.querySelector<HTMLElement>(`.pc[data-i="${i}"] .pc-shot`)
const reveals = () => (root.value ? Array.from(root.value.querySelectorAll<HTMLElement>('.r')) : [])
const fadeIns = () => (root.value ? Array.from(root.value.querySelectorAll<HTMLElement>('.cs-article, .cs-toc, .cs-next')) : [])
const restoreCards = () => document.querySelectorAll<HTMLElement>('.pc-shot').forEach((s) => { s.style.visibility = '' })
const radius = (el: Element) => getComputedStyle(el).borderTopLeftRadius
const thumbFor = (k: number) => root.value?.querySelector<HTMLElement>(`.shot[data-k="${k}"]`) ?? null

/* ---------- Section tracking ---------- */
function resetSectionState() {
  activeSection.value = ''
  seenSections.clear()
  showBarTitle.value = false
  if (prog.value) prog.value.style.transform = 'scaleX(0)'
}

function watchSections() {
  spy?.disconnect()
  sectionReveal?.disconnect()
  const secs = Array.from(article.value?.querySelectorAll<HTMLElement>('.cs-sec') ?? [])
  const idOf = (el: Element) => el.id.replace('cs-', '') as SectionId
  if (!('IntersectionObserver' in window)) {
    secs.forEach((s) => seenSections.add(idOf(s)))
    return
  }
  spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) activeSection.value = idOf(en.target) })
  }, { root: scroller.value, rootMargin: '-30% 0px -60% 0px' })
  sectionReveal = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return
      seenSections.add(idOf(en.target))
      sectionReveal?.unobserve(en.target)
    })
  }, { root: scroller.value, rootMargin: '0px 0px -10% 0px' })
  secs.forEach((s) => {
    spy!.observe(s)
    sectionReveal!.observe(s)
  })
}

function onScroll() {
  const s = scroller.value
  if (!s) return
  const max = s.scrollHeight - s.clientHeight
  if (prog.value) prog.value.style.transform = `scaleX(${max > 0 ? s.scrollTop / max : 0})`
  showBarTitle.value = s.scrollTop > 320
}

function jumpTo(id: SectionId) {
  const s = scroller.value
  const target = document.getElementById(`cs-${id}`)
  if (!s || !target) return
  const top = target.getBoundingClientRect().top - s.getBoundingClientRect().top + s.scrollTop - 88
  s.scrollTo({ top, behavior: motion?.reduced ? 'auto' : 'smooth' })
}

/* ---------- Shared-image transition ---------- */
function makeFlip(fromEl: HTMLElement, fromCard: boolean) {
  const { gsap } = motion!
  const r = fromEl.getBoundingClientRect()
  const box = document.createElement('div')
  box.className = 'flip-box'
  Object.assign(box.style, { left: `${r.left}px`, top: `${r.top}px`, width: `${r.width}px`, height: `${r.height}px`, borderRadius: radius(fromEl) })
  const par = document.createElement('div')
  par.className = 'flip-par'
  const im = document.createElement('img')
  const srcImg = fromEl.querySelector('img')
  im.src = srcImg ? srcImg.currentSrc || srcImg.src : ''
  im.alt = ''
  par.appendChild(im)
  box.appendChild(par)
  flip.value!.appendChild(box)
  if (fromCard) {
    // Match the card's parallax offset and hover zoom so the hand-off is seamless.
    par.style.height = '116%'
    const cardPar = fromEl.querySelector('.pc-par')
    gsap.set(par, { yPercent: cardPar ? Number(gsap.getProperty(cardPar, 'yPercent')) || 0 : 0 })
    if (fromEl.closest('.pc')?.matches(':hover')) gsap.set(im, { scale: 1.035 })
  }
  return { box, par, im }
}

const clearFlip = () => {
  if (flip.value) flip.value.innerHTML = ''
}

/* ---------- Open / close / next ---------- */
async function open(i: number) {
  if (busy || caseOpen.value) return
  busy = true
  caseOpen.value = true
  current.value = i
  lastFocus = document.activeElement as HTMLElement | null
  cursorActive.value = false
  resetSectionState()
  visible.value = true
  motion?.stopScroll()
  await nextTick()
  if (scroller.value) scroller.value.scrollTop = 0
  watchSections()

  const finish = () => {
    clearFlip()
    if (hero.value) hero.value.style.visibility = ''
    busy = false
    closeBtn.value?.focus({ preventScroll: true })
  }
  const src = cardShot(i)
  if (!motion?.enabled || !src || !src.querySelector('img') || !hero.value) {
    finish()
    return
  }

  const { gsap } = motion
  gsap.set(reveals(), { opacity: 0, y: 40 })
  gsap.set(fadeIns(), { opacity: 0 })
  gsap.set(bg.value, { clipPath: 'inset(100% 0% 0% 0%)' })
  hero.value.style.visibility = 'hidden'
  const to = hero.value.getBoundingClientRect()
  const { box, par, im } = makeFlip(src, true)
  src.style.visibility = 'hidden'

  gsap
    .timeline({ onComplete: finish })
    .to(bg.value, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1, ease: 'expo.inOut' }, 0)
    .to(box, { left: to.left, top: to.top, width: to.width, height: to.height, borderRadius: radius(hero.value), duration: 1.15, ease: 'expo.inOut' }, 0)
    .to(par, { height: '100%', yPercent: 0, duration: 1.15, ease: 'expo.inOut' }, 0)
    .to(im, { scale: 1, duration: 1.15, ease: 'expo.inOut' }, 0)
    .to(reveals(), { opacity: 1, y: 0, duration: 1, stagger: 0.06, ease: 'expo.out' }, 0.75)
    .to(fadeIns(), { opacity: 1, duration: 0.6 }, 1)
}

function close() {
  if (busy || !caseOpen.value) return
  busy = true
  root.value?.querySelectorAll('video').forEach((v) => v.pause())
  const target = cardShot(current.value)

  const done = () => {
    visible.value = false
    clearFlip()
    restoreCards()
    if (hero.value) hero.value.style.visibility = ''
    motion?.gsap.set([scroller.value, ...reveals(), ...fadeIns()], { clearProps: 'opacity,transform' })
    busy = false
    caseOpen.value = false
    motion?.startScroll()
    const focusTarget = document.querySelector<HTMLElement>(`.pc[data-i="${current.value}"] .pc-hit`) ?? lastFocus
    focusTarget?.focus({ preventScroll: true })
  }
  if (!motion?.enabled) {
    done()
    return
  }

  const { gsap } = motion
  const tr = target?.getBoundingClientRect()
  const hr = hero.value?.getBoundingClientRect()
  const tl = gsap.timeline({ onComplete: done })
  if (target && tr && hr && inViewport(tr) && inViewport(hr) && hero.value?.querySelector('img')) {
    // Fly the cover back into its card.
    const { box, par } = makeFlip(hero.value, false)
    hero.value.style.visibility = 'hidden'
    target.style.visibility = 'hidden'
    const cardPar = target.querySelector('.pc-par')
    tl.to(scroller.value, { opacity: 0, duration: 0.4, ease: 'power2.out' }, 0)
      .to(box, { left: tr.left, top: tr.top, width: tr.width, height: tr.height, borderRadius: radius(target), duration: 1.05, ease: 'expo.inOut' }, 0.05)
      .to(par, { height: '116%', yPercent: cardPar ? Number(gsap.getProperty(cardPar, 'yPercent')) || 0 : 0, duration: 1.05, ease: 'expo.inOut' }, 0.05)
      .to(bg.value, { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.95, ease: 'expo.inOut' }, 0.15)
  } else {
    tl.to(scroller.value, { opacity: 0, duration: 0.4 }, 0)
      .to(bg.value, { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.9, ease: 'expo.inOut' }, 0.15)
  }
}

/** Swap to the next project in place, under a full-screen wipe that names it. */
async function next() {
  if (busy || !caseOpen.value) return
  busy = true
  const n = (current.value + 1) % PROJECTS.length
  restoreCards()
  root.value?.querySelectorAll('video').forEach((v) => v.pause())

  const swap = async () => {
    current.value = n
    resetSectionState()
    await nextTick()
    if (scroller.value) scroller.value.scrollTop = 0
    watchSections()
  }

  if (!motion?.enabled) {
    await swap()
    busy = false
    return
  }

  const { gsap } = motion
  wipeTitle.value = PROJECTS[n]!.name
  await nextTick()
  gsap
    .timeline({ onComplete: () => { busy = false; gsap.set(wipe.value, { visibility: 'hidden' }) } })
    .set(wipe.value, { visibility: 'visible', clipPath: 'inset(100% 0% 0% 0%)' })
    .to(wipe.value, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.85, ease: 'expo.inOut' })
    .fromTo(wipeText.value, { yPercent: 110 }, { yPercent: 0, duration: 0.8, ease: 'expo.out' }, 0.45)
    .add(() => {
      gsap.set(reveals(), { opacity: 0, y: 40 })
      swap()
    })
    .to(wipeText.value, { yPercent: -110, duration: 0.6, ease: 'power3.in' }, '+=0.15')
    .to(wipe.value, { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.9, ease: 'expo.inOut' }, '-=0.25')
    .add(() => { gsap.to(reveals(), { opacity: 1, y: 0, duration: 1, stagger: 0.06, ease: 'expo.out' }) }, '-=0.45')
}

/* ---------- Gallery ---------- */
function openShot(k: number, e: MouseEvent) {
  viewer.value?.show(k, e.currentTarget as HTMLElement)
}

/* ---------- Keyboard: Escape closes, Tab stays inside the dialog ---------- */
function onKey(e: KeyboardEvent) {
  if (!caseOpen.value || viewer.value?.isOpen) return
  if (e.key === 'Escape') {
    close()
    return
  }
  if (e.key === 'Tab' && root.value) {
    const focusable = Array.from(root.value.querySelectorAll<HTMLElement>('button, a[href], video[controls]')).filter((el) => el.offsetParent !== null)
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (!first || !last) return
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }
}

let unregister: (() => void) | undefined
onMounted(() => {
  unregister = caseStudy.register({ open })
  document.addEventListener('keydown', onKey)
})
onBeforeUnmount(() => {
  unregister?.()
  document.removeEventListener('keydown', onKey)
  spy?.disconnect()
  sectionReveal?.disconnect()
})
</script>

<template>
  <div ref="root" class="case" role="dialog" aria-modal="true" aria-labelledby="csTitle" :hidden="!visible">
    <div ref="bg" class="case-bg" />
    <div ref="scroller" class="case-scroll" data-lenis-prevent @scroll.passive="onScroll">
      <div class="cs-bar" :class="{ 'show-title': showBarTitle }">
        <div class="wrap cs-bar-in">
          <button ref="closeBtn" v-magnetic class="btn" type="button" style="height:38px;padding:0 14px" @click="close"><span class="icon-x" />Close</button>
          <span class="cs-bar-title">{{ project.name }}</span>
          <div class="cs-bar-right">
            <span class="label">{{ pad2(current + 1) }} / {{ pad2(PROJECTS.length) }}</span>
            <button class="btn" type="button" style="height:38px;padding:0 14px" @click="next">Next <span class="ar">→</span></button>
          </div>
        </div>
        <div ref="prog" class="cs-prog" />
      </div>

      <div class="wrap">
        <header class="cs-head">
          <span class="label r">{{ project.kicker }} · {{ project.year }}</span>
          <h2 id="csTitle" class="cs-title r">{{ project.name }}</h2>
          <p class="cs-sum r">{{ project.summary }}</p>
        </header>

        <dl class="cs-meta r">
          <div><dt class="label">Client</dt><dd>{{ project.client }}</dd></div>
          <div><dt class="label">Year</dt><dd>{{ project.year }}</dd></div>
          <div><dt class="label">Role</dt><dd>Full-stack developer</dd></div>
          <div><dt class="label">Platform</dt><dd>{{ project.platform }}</dd></div>
          <div>
            <dt class="label">Live site</dt>
            <dd>
              <a v-if="liveUrl" :href="liveUrl" target="_blank" rel="noopener">{{ displayHost(liveUrl) }} ↗</a>
              <template v-else>Private build</template>
            </dd>
          </div>
        </dl>

        <div ref="hero" class="cs-hero">
          <img v-if="cover" :key="cover" :src="cover" :alt="`${project.name}: ${project.shots[0]?.[1] ?? ''}`">
        </div>

        <div class="cs-body">
          <nav class="cs-toc" aria-label="Case study sections">
            <a
              v-for="s in sections"
              :key="s.id"
              :href="`#cs-${s.id}`"
              :class="{ on: activeSection === s.id }"
              @click.prevent="jumpTo(s.id)"
            >{{ s.title }}</a>
          </nav>

          <!-- Keyed by project so every section mounts fresh on "next". -->
          <article ref="article" :key="project.slug" class="cs-article">
            <section
              v-for="(s, k) in sections"
              :id="`cs-${s.id}`"
              :key="s.id"
              class="cs-sec"
              :class="{ in: seenSections.has(s.id) }"
              :aria-labelledby="`cs-${s.id}-h`"
            >
              <span class="label">{{ pad2(k + 1) }} · {{ s.title }}</span>
              <h2 :id="`cs-${s.id}-h`">{{ s.heading }}</h2>

              <figure v-if="s.id === 'walkthrough' && project.video" class="vid">
                <video controls playsinline preload="metadata" :poster="asset(project.video.poster)" :aria-label="`${project.name} walkthrough video`">
                  <source :src="asset(project.video.src)" type="video/mp4">
                </video>
                <figcaption class="shot-cap"><span class="label">Video</span>A full pass through setup: camera, foreground, background, popups, sound and go live.</figcaption>
              </figure>

              <p v-else-if="s.id === 'overview'" class="prose">{{ project.context }}</p>

              <div v-else-if="s.id === 'users'" class="cards">
                <div v-for="[audience, items] in project.roles" :key="audience" class="mini">
                  <h3>{{ audience }}</h3>
                  <ul class="ticks"><li v-for="t in items" :key="t">{{ t }}</li></ul>
                </div>
              </div>

              <ol v-else-if="s.id === 'constraints' || s.id === 'approach'" class="nlist">
                <li v-for="([title, body], j) in (s.id === 'constraints' ? project.constraints : project.approach)" :key="title">
                  <span class="n">{{ pad2(j + 1) }}</span>
                  <h3>{{ title }}</h3>
                  <p>{{ body }}</p>
                </li>
              </ol>

              <div v-else-if="s.id === 'outcomes'" class="metrics">
                <div v-for="[value, label] in project.outcomes" :key="label" class="metric"><b>{{ value }}</b><span>{{ label }}</span></div>
              </div>

              <div v-else-if="s.id === 'screens'" class="gal">
                <button
                  v-for="([file, caption], j) in project.shots"
                  :key="file"
                  class="shot"
                  type="button"
                  :data-k="j"
                  data-cursor="Expand"
                  :aria-label="`View screen ${j + 1}: ${caption}`"
                  @click="openShot(j, $event)"
                >
                  <span class="shot-img"><img :src="shotSrc(project.slug, file, j === 0 ? 'f' : 't')" alt="" loading="lazy" decoding="async"></span>
                  <span class="shot-cap"><span class="label">{{ pad2(j + 1) }}</span>{{ caption }}</span>
                </button>
              </div>
            </section>
          </article>
        </div>

        <button class="cs-next" type="button" data-cursor="Next" @click="next">
          <span class="label">Next project</span>
          <span class="cs-next-t"><span>{{ nextProject.name }}</span><span class="ar">→</span></span>
        </button>
      </div>
    </div>

    <div ref="wipe" class="case-wipe" aria-hidden="true">
      <div class="case-wipe-t"><span ref="wipeText">{{ wipeTitle }}</span></div>
    </div>

    <ScreenshotViewer ref="viewer" :project="project" :get-thumb="thumbFor" />
  </div>

  <div ref="flip" class="flip" aria-hidden="true" />
</template>
