import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

declare global {
  interface Window {
    /** Set once the app owns the intro animation; read by the inline head script's fallback. */
    __motionReady?: boolean
  }
}

export interface MotionApi {
  gsap: typeof gsap
  ScrollTrigger: typeof ScrollTrigger
  /** Smooth scroller, or null when motion is reduced. */
  lenis: Lenis | null
  /** Animations allowed (user has not asked for reduced motion). */
  enabled: boolean
  reduced: boolean
  /** Mouse or trackpad with hover, as opposed to touch. */
  finePointer: boolean
  scrollTo: (target: string | HTMLElement | number) => void
  stopScroll: () => void
  startScroll: () => void
}

/**
 * Client-only motion runtime: GSAP + ScrollTrigger registered once, Lenis smooth scrolling
 * driven from GSAP's ticker so scroll-linked animations stay in sync.
 */
export default defineNuxtPlugin(() => {
  const root = document.documentElement
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  const enabled = !reduced

  gsap.registerPlugin(ScrollTrigger)
  root.classList.toggle('js-motion', enabled)
  window.__motionReady = true

  let lenis: Lenis | null = null
  if (enabled) {
    lenis = new Lenis({ lerp: 0.09, smoothWheel: true })
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis?.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)
  }

  const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)

  function scrollTo(target: string | HTMLElement | number) {
    const el = typeof target === 'string' ? document.querySelector<HTMLElement>(target) : typeof target === 'number' ? null : target
    if (lenis) {
      lenis.scrollTo(el ?? (typeof target === 'number' ? target : 0), { offset: el ? -24 : 0, duration: 1.5, easing: easeOutQuart })
    } else if (el) {
      el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' })
    } else {
      window.scrollTo({ top: typeof target === 'number' ? target : 0, behavior: reduced ? 'auto' : 'smooth' })
    }
  }

  const stopScroll = () => {
    if (lenis) lenis.stop()
    else root.style.overflow = 'hidden'
  }
  const startScroll = () => {
    if (lenis) lenis.start()
    else root.style.overflow = ''
  }

  // Layout shifts when web fonts swap in or the window resizes; re-measure trigger positions.
  window.addEventListener('resize', debounce(() => ScrollTrigger.refresh(), 200))
  document.fonts?.ready.then(() => ScrollTrigger.refresh())

  const api: MotionApi = { gsap, ScrollTrigger, lenis, enabled, reduced, finePointer, scrollTo, stopScroll, startScroll }
  return { provide: { motion: api } }
})
