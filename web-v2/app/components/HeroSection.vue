<script setup lang="ts">
import { PROFILE } from '~/data/portfolio'

const emit = defineEmits<{ navigate: [target: string] }>()
const clock = useClock()
const { label: copyLabel, copy } = useCopyEmail()

const headline = 'I design and build fast, functional web products, from Figma file to production.'
</script>

<template>
  <section class="hero">
    <div id="heroIn" class="wrap hero-in">
      <div class="hero-eyebrow" data-hero-fade>
        <span class="chip" style="height:30px;padding:0 12px"><span class="dot" />Available for new projects</span>
        <span class="label">{{ PROFILE.name }} · {{ PROFILE.title }}</span>
      </div>
      <h1 class="hero-title" :aria-label="headline">
        <span class="ln" aria-hidden="true"><span>I design and build fast,</span></span>
        <span class="ln" aria-hidden="true"><span><em class="s">functional</em> web products,</span></span>
        <span class="ln" aria-hidden="true"><span>from Figma file</span></span>
        <span class="ln" aria-hidden="true"><span>to production.</span></span>
      </h1>
      <p class="hero-sub" data-hero-fade>
        <b>Vue, Nuxt, React and Laravel</b> on the web, Flutter on mobile. 7 years shipping for teams in the US, UK, Canada and
        Australia from {{ PROFILE.city }}, {{ PROFILE.country }}.
      </p>
      <div class="hero-cta" data-hero-fade>
        <a v-magnetic href="#work" class="btn btn-solid" @click.prevent="emit('navigate', '#work')">View selected work <span class="ar">→</span></a>
        <button v-magnetic class="btn" type="button" aria-live="polite" @click="copy">{{ copyLabel }}</button>
        <a v-magnetic :href="PROFILE.resume" class="btn" target="_blank" rel="noopener noreferrer">View my CV <span class="ar">↗</span></a>
      </div>
      <div class="hero-foot label" data-hero-fade>
        <span>Local time <span style="color:var(--fg)">{{ clock }}</span> {{ PROFILE.utcLabel }}</span>
        <span>Featured work 2025 – 2026</span>
        <span>Scroll ↓</span>
      </div>
    </div>
  </section>
</template>
