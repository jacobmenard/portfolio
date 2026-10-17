/**
 * Soft radial highlight that follows the pointer across any `.tile`.
 * One delegated listener for the whole page; desktop pointers only.
 */
export function useSpotlight() {
  const onMove = (e: PointerEvent) => {
    const tile = (e.target as Element | null)?.closest?.<HTMLElement>('.tile')
    if (!tile) return
    const r = tile.getBoundingClientRect()
    tile.style.setProperty('--mx', `${e.clientX - r.left}px`)
    tile.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  onMounted(() => {
    if (useMotion()?.finePointer) document.addEventListener('pointermove', onMove, { passive: true })
  })
  onBeforeUnmount(() => document.removeEventListener('pointermove', onMove))
}
