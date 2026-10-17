/** Two-digit index label: 1 -> "01". */
export const pad2 = (n: number): string => String(n).padStart(2, '0')

/** Only allow absolute https links into href attributes built from content data. */
export const safeUrl = (url: string | undefined | null): string => (/^https:\/\//i.test(url ?? '') ? (url as string) : '')

/** "https://www.valenciagrace.com" -> "valenciagrace.com" */
export const displayHost = (url: string): string => url.replace(/^https:\/\/(www\.)?/i, '').replace(/\/$/, '')

export function debounce<A extends unknown[]>(fn: (...args: A) => void, ms: number): (...args: A) => void {
  let timer: ReturnType<typeof setTimeout> | undefined
  return (...args: A) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), ms)
  }
}

/** True when a rect is at least partly inside the viewport. */
export const inViewport = (r: DOMRect): boolean =>
  r.bottom > 0 && r.top < window.innerHeight && r.right > 0 && r.left < window.innerWidth && r.width > 0
