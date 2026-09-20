import type { Directive, DirectiveBinding } from 'vue'

type RevealElement = HTMLElement & { __revealObserver__?: IntersectionObserver }

const DIRECTIONS = ['left', 'right', 'down', 'scale', 'fade'] as const

function setup(el: RevealElement, binding: DirectiveBinding<number | undefined>) {
    if (import.meta.server || typeof IntersectionObserver === 'undefined') return

    el.classList.add('reveal')

    const direction = DIRECTIONS.find((dir) => binding.modifiers[dir])
    el.classList.add(`reveal--${direction ?? 'up'}`)

    const delay = typeof binding.value === 'number' ? binding.value : 0
    if (delay) {
        el.style.transitionDelay = `${delay}ms`
    }

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                el.classList.add('reveal--visible')
                if (binding.modifiers.once) {
                    observer.unobserve(el)
                }
            } else if (!binding.modifiers.once) {
                el.classList.remove('reveal--visible')
            }
        },
        {
            threshold: binding.modifiers.subtle ? 0.05 : 0.2,
            rootMargin: '0px 0px -10% 0px',
        }
    )

    observer.observe(el)
    el.__revealObserver__ = observer
}

export default defineNuxtPlugin((nuxtApp) => {
    const reveal: Directive<RevealElement, number | undefined> = {
        mounted: setup,
        unmounted(el) {
            el.__revealObserver__?.disconnect()
            delete el.__revealObserver__
        },
    }

    nuxtApp.vueApp.directive('reveal', reveal)
})
