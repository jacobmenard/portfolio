/**
 * Cross-component UI flags. The nav reads these to stay put while an overlay is open,
 * and overlays use the cursor state to hide the "View" bubble when they take over.
 */
export function useUiState() {
  const caseOpen = useState('ui:caseOpen', () => false)
  const menuOpen = useState('ui:menuOpen', () => false)
  const cursorActive = useState('ui:cursorActive', () => false)
  const cursorLabel = useState('ui:cursorLabel', () => 'View')

  return { caseOpen, menuOpen, cursorActive, cursorLabel }
}
