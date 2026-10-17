/**
 * Bridge between the work grid and the case study overlay. The overlay registers its
 * controller when it mounts (browser only); cards call open() with a project index.
 * Kept outside Vue state on purpose: it holds functions, not data, and never runs on the server.
 */
export interface CaseStudyController {
  open: (index: number) => void
}

let controller: CaseStudyController | null = null

export function useCaseStudy() {
  return {
    register(ctrl: CaseStudyController) {
      controller = ctrl
      return () => {
        if (controller === ctrl) controller = null
      }
    },
    open(index: number) {
      controller?.open(index)
    }
  }
}
