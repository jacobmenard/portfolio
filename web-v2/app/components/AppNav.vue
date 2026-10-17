<script setup lang="ts">
import { PROFILE } from '~/data/portfolio'
import type MobileMenu from './MobileMenu.vue'

const emit = defineEmits<{ navigate: [target: string] }>()

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' }
] as const

const { caseOpen, menuOpen } = useUiState()
const motion = useMotion()

const scrolled = ref(false)
const hidden = ref(false)
const progressEl = ref<HTMLElement | null>(null)
const menuBtn = ref<HTMLButtonElement | null>(null)
const menu = ref<InstanceType<typeof MobileMenu> | null>(null)
let lastY = 0

/** Backdrop once scrolled, hide on scroll down, return on scroll up, progress line always. */
function onScroll(y: number) {
  const max = document.documentElement.scrollHeight - window.innerHeight
  scrolled.value = y > 20
  if (!caseOpen.value && !menuOpen.value) {
    if (y > lastY + 4 && y > 320) hidden.value = true
    else if (y < lastY - 4) hidden.value = false
  }
  // Written directly: this runs every frame and should not re-render the component.
  if (progressEl.value) progressEl.value.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`
  lastY = y
}

const onWindowScroll = () => onScroll(window.scrollY)
const onLenisScroll = (e: { scroll: number }) => onScroll(e.scroll)

onMounted(() => {
  if (motion?.lenis) motion.lenis.on('scroll', onLenisScroll)
  else window.addEventListener('scroll', onWindowScroll, { passive: true })
  onScroll(window.scrollY)
})
onBeforeUnmount(() => {
  motion?.lenis?.off('scroll', onLenisScroll)
  window.removeEventListener('scroll', onWindowScroll)
})

function go(e: MouseEvent, href: string) {
  e.preventDefault()
  emit('navigate', href)
}
</script>

<template>
  <header class="nav" :class="{ 'is-scrolled': scrolled, 'is-hidden': hidden }">
    <div class="wrap nav-in">
      <a href="#top" class="brand" @click="go($event, '#top')"><span class="brand-mark">{{ PROFILE.initials }}</span>{{ PROFILE.name }}</a>
      <nav class="nav-links" aria-label="Primary">
        <RollLink v-for="l in links" :key="l.href" :label="l.label" :href="l.href" @click="go($event, l.href)" />
      </nav>
      <div class="nav-right">
        <a v-magnetic href="#contact" class="btn btn-solid nav-cta" @click="go($event, '#contact')">Let's talk</a>
        <button
          ref="menuBtn"
          class="menu-btn"
          type="button"
          :aria-expanded="menuOpen"
          aria-controls="menu"
          @click="menu?.toggle()"
        >
          <span class="bars" /><span class="lbl">{{ menuOpen ? 'Close' : 'Menu' }}</span>
        </button>
      </div>
    </div>
    <div ref="progressEl" class="nav-progress" />
  </header>

  <!-- Sibling of the header, not a child: the header's backdrop-filter would otherwise
       become the containing block for this fixed-position overlay. -->
  <MobileMenu ref="menu" :links="links" :origin="menuBtn" @navigate="emit('navigate', $event)" />
</template>
