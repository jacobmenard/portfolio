<script setup lang="ts">
import { BIO, PROFILE, STACK_A, STACK_B } from '~/data/portfolio'

const clock = useClock()

/** Split the bio into words for the scroll scrub; *starred* words get the serif italic. */
const bioWords = BIO.split(' ').map((w) => ({ text: w.replace(/\*/g, ''), serif: w.includes('*') }))

/** Each marquee row is the list twice so the -50% loop is seamless. */
const loop = <T,>(list: readonly T[]) => [...list, ...list]
</script>

<template>
  <section id="about" class="section" aria-labelledby="aboutTitle">
    <div class="wrap">
      <div class="sh">
        <h2 id="aboutTitle">About</h2>
        <p>Frontend first, full stack when the product needs it.</p>
      </div>
      <div class="bento">
        <div class="tile pad s-8 r-2 about-bio bio" data-reveal>
          <div class="tile-col">
            <span class="label">{{ PROFILE.fullName }}</span>
            <p id="bioText">
              <template v-for="(w, i) in bioWords" :key="i">
                <span class="w"><em v-if="w.serif" class="s">{{ w.text }}</em><template v-else>{{ w.text }}</template></span>{{ i < bioWords.length - 1 ? ' ' : '' }}
              </template>
            </p>
            <div class="bio-foot"><span class="label">Solo and Agile teams</span><span class="label">SaaS · e-commerce · healthcare · inventory</span></div>
          </div>
        </div>

        <div class="tile pad s-4" data-reveal>
          <div class="tile-col">
            <span class="label" style="display:flex;align-items:center;gap:10px"><span class="dot" />Open to projects</span>
            <div>
              <div class="clock-big">{{ clock }}</div>
              <p class="muted" style="margin-top:10px;font-size:var(--t-sm)">{{ PROFILE.city }}, {{ PROFILE.country }} · {{ PROFILE.utcLabel }}</p>
            </div>
          </div>
        </div>

        <div class="tile pad s-4" data-reveal>
          <div class="tile-col">
            <span class="label">Experience</span>
            <div>
              <div class="big">5+</div>
              <p class="muted" style="margin-top:12px;font-size:var(--t-sm)">Years building web and mobile apps. Writing production code since 2017.</p>
            </div>
          </div>
        </div>

        <div class="tile pad s-6 tile-hi" data-reveal>
          <div class="tile-col">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:16px">
              <span class="chip chip-acc">Civil Service eligibility</span>
              <span class="seal" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22"><path d="M5 12.5l4.2 4.2L19 7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
              </span>
            </div>
            <div>
              <h3 class="hi-title">EDPSE passer</h3>
              <p class="hi-sub">Electronic Data Processing Specialist Eligibility</p>
              <p class="muted" style="margin-top:14px;font-size:var(--t-sm);max-width:52ch">
                Granted by the Philippine Civil Service Commission (CSC Resolution No. 90-083) to passers of the ICT Office proficiency test in systems
                analysis and design and computer programming. It qualifies me for government IT and MIS roles such as Computer Programmer and
                Information Systems Analyst.
              </p>
              <a class="hi-link" href="https://csc.gov.ph/special-eligibilities/electronic-data-processing-specialist-eligibility" target="_blank" rel="noopener">About EDPSE on csc.gov.ph ↗</a>
            </div>
          </div>
        </div>

        <div class="tile pad s-6" data-reveal>
          <div class="tile-col">
            <span class="label">Stack</span>
            <p style="font-size:clamp(1.3rem,2vw,1.75rem);line-height:1.25;letter-spacing:-.03em;max-width:22ch">
              Vue and Nuxt on the front, Laravel and MySQL behind, <em class="s">Flutter</em> for mobile.
            </p>
            <div style="display:grid;gap:6px">
              <div class="mq"><div class="mq-row"><span v-for="(s, i) in loop(STACK_A)" :key="i" class="chip" :aria-hidden="i >= STACK_A.length || undefined">{{ s }}</span></div></div>
              <div class="mq"><div class="mq-row rev"><span v-for="(s, i) in loop(STACK_B)" :key="i" class="chip" :aria-hidden="i >= STACK_B.length || undefined">{{ s }}</span></div></div>
            </div>
          </div>
        </div>

        <div class="tile pad s-6" data-reveal>
          <div class="tile-col">
            <span class="label">Shipped for</span>
            <div>
              <div class="big">5</div>
              <p class="muted" style="margin-top:10px;font-size:var(--t-sm)">Countries: US, UK, Canada, Australia and the Philippines</p>
            </div>
          </div>
        </div>

        <div class="tile pad s-6 edu" data-reveal>
          <div class="tile-col">
            <span class="label">Education</span>
            <div style="display:grid;gap:14px">
              <div><b>BS Information Technology</b><span class="muted" style="font-size:var(--t-sm)">Saint Joseph Institute of Technology, 2011 – 2015</span></div>
              <div><b>Web Designer of the Year</b><span class="muted" style="font-size:var(--t-sm)">Web design competition, SJIT</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
