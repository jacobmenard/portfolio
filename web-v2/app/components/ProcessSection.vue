<script setup lang="ts">
import { PROCESS } from '~/data/portfolio'
</script>

<template>
  <section id="process" class="section" aria-labelledby="processTitle">
    <div class="wrap">
      <div class="sh">
        <h2 id="processTitle">How I work</h2>
        <p>Most projects run end to end, from the design file to the admin dashboard the client uses every day.</p>
      </div>
      <ol class="steps">
        <li v-for="(s, i) in PROCESS" :key="s.title" class="tile pad step" data-reveal>
          <i class="step-bar" />
          <span class="step-n">{{ pad2(i + 1) }}</span>
          <h3>{{ s.title }}</h3>
          <p>{{ s.body }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
