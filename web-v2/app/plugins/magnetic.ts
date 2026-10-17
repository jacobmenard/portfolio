import type { Directive } from 'vue'

type MagneticEl = HTMLElement & { __magneticCleanup?: () => void }

declare module 'vue' {
  interface GlobalDirectives {
    vMagnetic: Directive<MagneticEl>
  }
}

/**
 * v-magnetic: the element drifts toward the pointer while hovered and springs back on leave.
 * Desktop pointers only, and off for reduced motion. Universal plugin so SSR can resolve
 * the directive (it renders nothing on the server).
 */
export default defineNuxtPlugin((nuxtApp) => {
  const magnetic: Directive<MagneticEl> = {
    getSSRProps: () => ({}),
    mounted(el) {
      const motion = nuxtApp.$motion as import('~/plugins/motion.client').MotionApi | undefined
      if (!motion || !motion.enabled || !motion.finePointer) return
      const { gsap } = motion
      const xTo = gsap.quickTo(el, 'x', { duration: 0.7, ease: 'power3' })
      const yTo = gsap.quickTo(el, 'y', { duration: 0.7, ease: 'power3' })
      let rect: DOMRect | null = null

      const onEnter = () => {
        gsap.set(el, { x: 0, y: 0 })
        rect = el.getBoundingClientRect()
      }
      const onMove = (e: PointerEvent) => {
        rect ??= el.getBoundingClientRect()
        xTo((e.clientX - (rect.left + rect.width / 2)) * 0.25)
        yTo((e.clientY - (rect.top + rect.height / 2)) * 0.25)
      }
      const onLeave = () => {
        rect = null
        xTo(0)
        yTo(0)
      }

      el.addEventListener('pointerenter', onEnter)
      el.addEventListener('pointermove', onMove)
      el.addEventListener('pointerleave', onLeave)
      el.__magneticCleanup = () => {
        el.removeEventListener('pointerenter', onEnter)
        el.removeEventListener('pointermove', onMove)
        el.removeEventListener('pointerleave', onLeave)
        gsap.killTweensOf(el)
      }
    },
    beforeUnmount(el) {
      el.__magneticCleanup?.()
    }
  }

  nuxtApp.vueApp.directive('magnetic', magnetic)
})
