<script setup lang="ts">
import { PROFILE } from '~/data/portfolio'

const emit = defineEmits<{ navigate: [target: string] }>()
const year = new Date().getFullYear()
</script>

<template>
  <footer>
    <div class="wrap label">
      <span>© {{ year }} {{ PROFILE.name }}</span>
      <span>{{ PROFILE.city }}, {{ PROFILE.country }}</span>
      <RollLink label="Back to top ↑" @click="emit('navigate', '#top')" />
    </div>
  </footer>
</template>
