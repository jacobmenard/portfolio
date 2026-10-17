<script setup lang="ts">
import type { Project } from '~/types/portfolio'

const props = defineProps<{ project: Project; index: number }>()
const emit = defineEmits<{ open: [index: number] }>()

const { coverSrc } = useAsset()
const cover = computed(() => coverSrc(props.project))
const screens = computed(() => props.project.shots.length)
</script>

<template>
  <!-- data-i is how the case study overlay finds this card's image for the shared-element transition. -->
  <article class="tile pc" :class="[project.span, { 'pc-feature': project.latest }]" :data-i="index" data-reveal>
    <div class="pc-shot">
      <div v-if="cover" class="pc-par">
        <img :src="cover" alt="" decoding="async" :loading="index > 1 ? 'lazy' : 'eager'">
      </div>
      <div v-else class="pc-ph">{{ project.name.charAt(0) }}</div>
    </div>
    <div class="pc-tags">
      <span v-if="project.latest" class="chip chip-hi">Latest</span>
      <span class="chip">{{ project.year }}</span>
      <span v-if="safeUrl(project.live)" class="chip"><span class="dot" style="width:5px;height:5px" />Live</span>
      <span v-if="project.video" class="chip">▶ {{ project.video.length }} walkthrough</span>
      <span v-if="screens > 1" class="chip">{{ screens }} screens</span>
    </div>
    <button
      class="pc-hit"
      type="button"
      data-cursor="View case"
      :aria-label="`Open case study: ${project.name}`"
      @click="emit('open', index)"
    />
    <div class="pc-info">
      <div>
        <h3 class="pc-title">{{ project.name }} <span class="muted" style="font-weight:400">· {{ project.kicker }}</span></h3>
        <p class="pc-desc">{{ project.short }}</p>
      </div>
      <span class="pc-arrow" aria-hidden="true">→</span>
    </div>
  </article>
</template>
