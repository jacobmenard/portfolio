<script setup lang="ts">
import { PROJECTS } from '~/data/portfolio'

const emit = defineEmits<{ navigate: [target: string] }>()
const caseStudy = useCaseStudy()
</script>

<template>
  <section id="work" class="section" aria-labelledby="workTitle">
    <div class="wrap">
      <div class="sh">
        <h2 id="workTitle">Selected work<sup>({{ pad2(PROJECTS.length) }})</sup></h2>
        <p>Products I designed, built and shipped. Each one opens into a full case study: context, constraints, decisions and outcomes.</p>
      </div>
      <div class="bento">
        <ProjectCard v-for="(p, i) in PROJECTS" :key="p.slug" :project="p" :index="i" @open="caseStudy.open" />
        <div class="tile pad s-4 cta-tile" data-reveal>
          <span class="label">Next up</span>
          <h3>Your product could be the next case study.</h3>
          <a href="#contact" class="btn btn-solid" style="align-self:flex-start" @click.prevent="emit('navigate', '#contact')">
            Start a conversation <span class="ar">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
