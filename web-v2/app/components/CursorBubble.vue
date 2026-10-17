<script setup lang="ts">
/**
 * "View case" / "Expand" bubble that trails the pointer over anything with data-cursor.
 * Desktop pointers only; overlays switch it off through useUiState().cursorActive.
 */
const { cursorActive, cursorLabel } = useUiState()
const motion = useMotion()
const el = ref<HTMLElement | null>(null)

let x = -200
let y = -200
let cx = -200
let cy = -200
let raf = 0

const onMove = (e: PointerEvent) => {
  x = e.clientX
  y = e.clientY
}
const onOver = (e: PointerEvent) => {
  const t = (e.target as Element | null)?.closest?.<HTMLElement>('[data-cursor]')
  if (t) {
    cursorLabel.value = t.dataset.cursor ?? 'View'
    cursorActive.value = true
  }
}
const onOut = (e: PointerEvent) => {
  const t = (e.target as Element | null)?.closest?.('[data-cursor]')
  if (t && !t.contains(e.relatedTarget as Node | null)) cursorActive.value = false
}
const loop = () => {
  cx += (x - cx) * 0.2
  cy += (y - cy) * 0.2
  if (el.value) el.value.style.transform = `translate3d(${cx.toFixed(1)}px,${cy.toFixed(1)}px,0)`
  raf = requestAnimationFrame(loop)
}

onMounted(() => {
  if (!motion?.finePointer || motion.reduced) return
  document.documentElement.classList.add('has-cursor')
  window.addEventListener('pointermove', onMove, { passive: true })
  document.addEventListener('pointerover', onOver)
  document.addEventListener('pointerout', onOut)
  loop()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  document.documentElement.classList.remove('has-cursor')
  window.removeEventListener('pointermove', onMove)
  document.removeEventListener('pointerover', onOver)
  document.removeEventListener('pointerout', onOut)
})
</script>

<template>
  <div ref="el" class="cursor" :class="{ 'is-active': cursorActive }" aria-hidden="true">
    <div class="cursor-b"><span>{{ cursorLabel }}</span></div>
  </div>
</template>
