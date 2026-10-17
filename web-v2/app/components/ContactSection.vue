<script setup lang="ts">
import { PROFILE, SOCIALS } from '~/data/portfolio'

const { label: copyLabel, copy } = useCopyEmail()
const socials = SOCIALS.filter((s) => safeUrl(s.url))
</script>

<template>
  <section id="contact" class="contact" aria-labelledby="contactTitle">
    <div class="wrap">
      <span class="label">Contact</span>
      <h2 id="contactTitle" class="contact-title" style="margin-top:20px">Have a product<br>in mind? <em class="s">Let's build it.</em></h2>
      <div class="contact-grid">
        <div>
          <span class="label">Email</span>
          <p id="emailText" class="email" style="margin-top:12px">{{ PROFILE.email }}</p>
        </div>
        <div class="contact-actions">
          <p class="muted" style="max-width:40ch">Tell me what you are building and when it needs to launch. I reply within one working day, Philippine time.</p>
          <button v-magnetic class="btn btn-solid" type="button" aria-live="polite" @click="copy">{{ copyLabel }}</button>
          <div v-if="socials.length" class="socials">
            <RollLink v-for="s in socials" :key="s.label" :label="`${s.label} ↗`" :href="s.url" external />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
