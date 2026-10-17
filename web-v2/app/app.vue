<script setup lang="ts">
import { PROFILE } from '~/data/portfolio'

const title = `${PROFILE.name} · ${PROFILE.title}`

useSeoMeta({
  title,
  description: PROFILE.description,
  ogTitle: title,
  ogDescription: PROFILE.description,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  colorScheme: 'dark'
})

const motion = useMotion()

/** Every in-page link funnels through here so it uses the smooth scroller. */
function navigate(target: string) {
  if (motion) motion.scrollTo(target === '#top' ? 0 : target)
  else document.querySelector(target)?.scrollIntoView()
}

usePageMotion()
useSpotlight()
</script>

<template>
  <AppNav @navigate="navigate" />
  <CursorBubble />

  <main id="top">
    <HeroSection @navigate="navigate" />
    <WorkSection @navigate="navigate" />
    <AboutSection />
    <ProcessSection />
    <ExperienceSection />
    <ContactSection />
  </main>

  <AppFooter @navigate="navigate" />
  <CaseStudy />
</template>
