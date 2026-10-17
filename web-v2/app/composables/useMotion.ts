import type { MotionApi } from '~/plugins/motion.client'

/**
 * Access the motion runtime. It only exists in the browser, so call this from
 * onMounted or event handlers; on the server it returns null.
 */
export function useMotion(): MotionApi | null {
  return (useNuxtApp().$motion as MotionApi | undefined) ?? null
}
