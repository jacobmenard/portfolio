import { PROFILE } from '~/data/portfolio'

const IDLE = 'Copy email'

/**
 * Copy-to-clipboard for the contact email, with a visible fallback: when the Clipboard API
 * is unavailable or refused (insecure context, permissions), the email text on the page is
 * selected so the visitor can copy it by hand.
 */
export function useCopyEmail() {
  const label = ref(IDLE)
  let reset: ReturnType<typeof setTimeout> | undefined

  const show = (text: string, ms: number) => {
    label.value = text
    clearTimeout(reset)
    reset = setTimeout(() => {
      label.value = IDLE
    }, ms)
  }

  const selectOnPage = () => {
    const el = document.getElementById('emailText')
    const selection = window.getSelection()
    if (el && selection) {
      const range = document.createRange()
      range.selectNodeContents(el)
      selection.removeAllRanges()
      selection.addRange(range)
    }
    show('Selected, press Ctrl+C', 3200)
  }

  async function copy() {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard API unavailable')
      await navigator.clipboard.writeText(PROFILE.email)
      show('Copied to clipboard', 2200)
    } catch {
      selectOnPage()
    }
  }

  onBeforeUnmount(() => clearTimeout(reset))

  return { label, copy }
}
