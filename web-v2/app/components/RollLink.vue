<script setup lang="ts">
/** Text that rolls up to a duplicate of itself on hover. Renders as a link or a button. */
const props = defineProps<{
  label: string
  href?: string
  external?: boolean
}>()

const tag = computed(() => (props.href ? 'a' : 'button'))
const attrs = computed(() => {
  if (!props.href) return { type: 'button' }
  return props.external ? { href: props.href, target: '_blank', rel: 'noopener' } : { href: props.href }
})
</script>

<template>
  <component :is="tag" class="roll" v-bind="attrs">
    <span :data-t="label">{{ label }}</span>
  </component>
</template>
