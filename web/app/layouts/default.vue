
<script lang="ts" setup>
    import { onMounted, onUnmounted, ref } from "vue"

    const showBackToTop = ref(false)

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    
    function handleScroll() {
        showBackToTop.value = window.scrollY >= 500
    }
    
    onMounted(() => {
        window.addEventListener('scroll', handleScroll)
        handleScroll() // Check initial position
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
    })
</script>

<template>
    <div>
        <layouts-header></layouts-header>
        <!-- <layouts-sidebar></layouts-sidebar> -->
        <slot />

        <div v-if="showBackToTop" class="scroll-to-top">
            <b-button @click="scrollToTop" variant="primary" z class="scroll-to-top-button d-flex align-items-center justify-content-center">
                <img src="~assets/img/scroll-top.svg" alt="scroll top">
            </b-button>
        </div>
    </div>
</template>

<style lang="scss">
.light-mode {
    .portfolio-main-container {
        background-color: #ffffff;
    }
}

.scroll-to-top {
    position: fixed;
    bottom: 1rem;
    right: 1rem;

    &-button {
        height: 50px;
        width: 50px;
    }
    
}
</style>
