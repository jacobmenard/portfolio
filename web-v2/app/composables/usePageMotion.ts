import type { gsap } from 'gsap'

/**
 * Scroll-driven motion for the main page: hero intro and fade, staggered reveals,
 * card image parallax, word-by-word bio, process step bars and the contact headline.
 * Everything is created inside one gsap.context so it is torn down on unmount (and HMR).
 */
export function usePageMotion() {
  let ctx: gsap.Context | undefined

  onMounted(() => {
    const motion = useMotion()
    if (!motion?.enabled) return
    const { gsap, ScrollTrigger } = motion

    ctx = gsap.context(() => {
      // Hero intro. fromTo (not from) because CSS already holds the hidden start state.
      // y: 0 matters: GSAP parses the CSS translateY(110%) into a pixel `y`, which would
      // otherwise stay applied on top of the yPercent tween and leave the lines offset.
      gsap
        .timeline({ delay: 0.1 })
        .fromTo('.hero-title .ln > span', { y: 0, yPercent: 110 }, { yPercent: 0, duration: 1.25, stagger: 0.08, ease: 'expo.out' })
        .fromTo('[data-hero-fade]', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.08, ease: 'expo.out' }, 0.35)
        .fromTo('.nav-in > *', { y: -12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.06, ease: 'expo.out' }, 0.2)

      gsap.to('#heroIn', {
        yPercent: -8,
        opacity: 0.35,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
      })

      // Staggered reveal for every tile and row as it scrolls in.
      const reveals = gsap.utils.toArray<HTMLElement>('main [data-reveal]')
      gsap.set(reveals, { y: 56 })
      ScrollTrigger.batch(reveals, {
        start: 'top 92%',
        once: true,
        onEnter: (batch) => gsap.to(batch, { y: 0, duration: 1.2, stagger: 0.08, ease: 'expo.out', overwrite: true })
      })

      // Project card images drift slower than the page.
      gsap.utils.toArray<HTMLElement>('.pc').forEach((card) => {
        const par = card.querySelector('.pc-par')
        if (!par) return
        gsap.fromTo(par, { yPercent: 0 }, {
          yPercent: -10,
          ease: 'none',
          scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: true }
        })
      })

      // Bio lights up word by word.
      gsap.fromTo('#bioText .w', { opacity: 0.3 }, {
        opacity: 1,
        stagger: 0.1,
        ease: 'none',
        scrollTrigger: { trigger: '#bioText', start: 'top 85%', end: 'bottom 55%', scrub: true }
      })

      // Process steps: progress bar fills in sequence.
      gsap.utils.toArray<HTMLElement>('.step').forEach((step, i) => {
        const bar = step.querySelector('.step-bar')
        if (!bar) return
        gsap.fromTo(bar, { scaleX: 0 }, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: { trigger: '.steps', start: `top ${80 - i * 6}%`, end: `top ${40 - i * 6}%`, scrub: true }
        })
      })

      gsap.fromTo('#contactTitle', { scale: 0.9, yPercent: 6 }, {
        scale: 1,
        yPercent: 0,
        ease: 'none',
        scrollTrigger: { trigger: '#contact', start: 'top bottom', end: 'top 30%', scrub: true }
      })
    })
  })

  onBeforeUnmount(() => ctx?.revert())
}
