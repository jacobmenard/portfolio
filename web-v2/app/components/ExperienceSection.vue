<script setup lang="ts">
import { EXPERIENCE } from '~/data/portfolio'
</script>

<template>
  <section id="experience" class="section" aria-labelledby="xpTitle">
    <div class="wrap">
      <div class="sh">
        <h2 id="xpTitle">Experience</h2>
        <p>From hospital systems at the Department of Health to products for clients abroad.</p>
      </div>
      <ul class="xp">
        <li v-for="x in EXPERIENCE" :key="x.company + x.years" class="xp-row" data-reveal>
          <span class="label">{{ x.years }}</span>
          <span class="xp-co">{{ x.company }}</span>
          <span class="xp-role"><b>{{ x.role }}</b><span>{{ x.note }}</span></span>
          <span class="xp-loc label">{{ x.location }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
