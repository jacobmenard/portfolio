<script lang="ts" setup>
    import { shallowRef } from 'vue'
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
    import type { Swiper as SwiperInstance } from 'swiper'

    import 'swiper/css'
    import 'swiper/css/navigation'
    import 'swiper/css/free-mode'
    import 'swiper/css/thumbs'

    const route = useRoute()
    const { getProjectBySlug } = useProjects()

    const project = getProjectBySlug(route.params.slug as string)

    if (!project) {
        throw createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true })
    }

    useSeoMeta({
        title: `${project.title} | Menard Catayas`,
        description: project.description,
        ogTitle: project.title,
        ogDescription: project.description,
        ogImage: project.coverImage,
    })

    const activeIndex = ref(0)
    const isLightboxOpen = ref(false)
    const mainSwiper = shallowRef<SwiperInstance | null>(null)
    const thumbsSwiper = shallowRef<SwiperInstance | null>(null)
    const activeImage = computed(() => project.gallery[activeIndex.value] ?? project.coverImage)

    function onMainSwiper(swiper: SwiperInstance) {
        mainSwiper.value = swiper
    }

    function setThumbsSwiper(swiper: SwiperInstance) {
        thumbsSwiper.value = swiper
    }

    function onSlideChange(swiper: SwiperInstance) {
        activeIndex.value = swiper.activeIndex
    }

    function openLightbox() {
        isLightboxOpen.value = true
    }

    function nextImage() {
        mainSwiper.value?.slideNext()
    }

    function prevImage() {
        mainSwiper.value?.slidePrev()
    }
</script>

<template>
    <div class="project-details-container">
        <div class="pd-hero d-flex flex-column">
            <nuxt-link to="/#featured-projects" class="back-link d-flex align-items-center gap-2">
                <span>&larr;</span>
                <span>Back to Projects</span>
            </nuxt-link>

            <div v-reveal.once class="pd-hero-content">
                <h1 class="text-uppercase">{{ project.title }}</h1>
                <p class="pd-description">{{ project.description }}</p>

                <div class="pd-meta d-flex flex-wrap gap-5">
                    <div class="meta-item d-flex flex-column">
                        <span class="label">Client</span>
                        <span class="value">{{ project.client }}</span>
                    </div>
                    <div class="meta-item d-flex flex-column">
                        <span class="label">Year</span>
                        <span class="value">{{ project.year }}</span>
                    </div>
                    <div class="meta-item d-flex flex-column">
                        <span class="label">Role</span>
                        <span class="value">{{ project.role }}</span>
                    </div>
                </div>

                <div v-if="project.link" class="redirect-button d-flex">
                    <a :href="project.link" target="_blank" rel="noopener noreferrer">
                        <div class="d-flex align-items-center gap-1">
                            <span>Visit Live Site</span>
                            <img src="~assets/img/live-demo.svg" alt="live-demo" style="height: 24px;">
                        </div>
                    </a>
                </div>
            </div>
        </div>

        <div class="line-separator"></div>

        <div v-reveal class="pd-gallery">
            <h2 class="gallery-title text-uppercase mb-4">Snapshots</h2>

            <ClientOnly>
                <swiper
                    :modules="[Navigation, Thumbs]"
                    :thumbs="{ swiper: thumbsSwiper }"
                    :navigation="project.gallery.length > 1"
                    :space-between="16"
                    class="gallery-main-swiper"
                    @swiper="onMainSwiper"
                    @slide-change="onSlideChange"
                >
                    <swiper-slide v-for="(shot, index) in project.gallery" :key="`slide-${index}`">
                        <button type="button" class="gallery-slide-btn" @click="openLightbox">
                            <img :src="shot" :alt="`${project.title} snapshot ${index + 1}`">
                            <div class="gallery-main-overlay d-flex align-items-center justify-content-center">
                                <span>Click to enlarge</span>
                            </div>
                        </button>
                    </swiper-slide>
                </swiper>

                <swiper
                    v-if="project.gallery.length > 1"
                    :modules="[FreeMode, Thumbs]"
                    watch-slides-progress
                    free-mode
                    :slides-per-view="4"
                    :breakpoints="{
                        0: { slidesPerView: 3, spaceBetween: 8 },
                        600: { slidesPerView: 4, spaceBetween: 12 },
                        1024: { slidesPerView: 5, spaceBetween: 12 },
                    }"
                    class="gallery-thumbs-swiper mt-3"
                    @swiper="setThumbsSwiper"
                >
                    <swiper-slide v-for="(shot, index) in project.gallery" :key="`thumb-${index}`" class="gallery-thumb-slide">
                        <img :src="shot" :alt="`${project.title} thumbnail ${index + 1}`">
                    </swiper-slide>
                </swiper>

                <template #fallback>
                    <div class="gallery-main-fallback">
                        <img :src="project.coverImage" :alt="project.title">
                    </div>
                </template>
            </ClientOnly>
        </div>

        <div class="line-separator"></div>

        <div v-reveal class="pd-about">
            <h2 class="text-uppercase mb-3">About this project</h2>
            <p>{{ project.fullDescription }}</p>
        </div>

        <b-modal
            v-model="isLightboxOpen"
            size="xl"
            centered
            scrollable
            no-header
            no-footer
            content-class="pd-lightbox-content"
            body-class="p-0"
        >
            <div class="pd-lightbox">
                <div class="pd-lightbox-toolbar d-flex justify-content-end">
                    <button type="button" class="lightbox-close" aria-label="Close" @click="isLightboxOpen = false">&times;</button>
                </div>

                <div class="pd-lightbox-stage d-flex align-items-center">
                    <button
                        v-if="project.gallery.length > 1"
                        type="button"
                        class="lightbox-nav prev"
                        aria-label="Previous snapshot"
                        @click="prevImage"
                    >
                        &#8249;
                    </button>

                    <div class="pd-lightbox-image d-flex align-items-center justify-content-center">
                        <img :src="activeImage" :alt="`${project.title} snapshot ${activeIndex + 1}`">
                    </div>

                    <button
                        v-if="project.gallery.length > 1"
                        type="button"
                        class="lightbox-nav next"
                        aria-label="Next snapshot"
                        @click="nextImage"
                    >
                        &#8250;
                    </button>
                </div>

                <div v-if="project.gallery.length > 1" class="pd-lightbox-counter">
                    {{ activeIndex + 1 }} / {{ project.gallery.length }}
                </div>
            </div>
        </b-modal>
    </div>
</template>

<style lang="scss" scoped>
    .project-details-container {
        padding: 0 108px 80px;

        @include resolution(1024px) {
            padding-left: 2rem;
            padding-right: 2rem;
        }
        @include mobile-lg {
            padding: 0 2rem 3rem;
        }

        .line-separator {
            margin: 60px 0;
        }

        .pd-hero {
            padding-top: 48px;

            .back-link {
                font-family: 'Manrope';
                font-weight: 600;
                font-size: 15px;
                text-transform: uppercase;
                letter-spacing: 0.02em;
                color: #C7C7C7;
                text-decoration: none;
                width: fit-content;
                margin-bottom: 40px;
                transition: 0.3s;

                &:hover {
                    color: #D3E97A;
                }
            }

            h1 {
                font-family: 'Bebas Neue';
                font-style: normal;
                font-weight: 400;
                font-size: 76px;
                line-height: 100%;
                color: #FFFFFF;

                @include mobile-lg {
                    font-size: 42px;
                }
            }

            .pd-description {
                font-family: 'Manrope';
                font-size: 18px;
                line-height: 150%;
                color: #C7C7C7;
                max-width: 760px;
                margin-top: 16px;

                @include mobile-lg {
                    font-size: 16px;
                }
            }

            .pd-meta {
                margin-top: 40px;

                .meta-item {
                    .label {
                        font-family: 'Manrope';
                        font-weight: 600;
                        font-size: 14px;
                        text-transform: uppercase;
                        letter-spacing: 0.04em;
                        color: #79819A;
                        margin-bottom: 4px;
                    }

                    .value {
                        font-family: 'Manrope';
                        font-weight: 600;
                        font-size: 18px;
                        color: #FFFFFF;
                    }
                }
            }

            .redirect-button {
                margin-top: 40px;
            }
        }

        .pd-gallery {
            --swiper-theme-color: #D3E97A;
            --swiper-navigation-size: 22px;

            .gallery-title {
                font-family: 'Bebas Neue';
                font-weight: 400;
                font-size: 32px;
                color: #FFFFFF;
            }

            .gallery-main-fallback,
            :deep(.gallery-main-swiper) {
                width: 100%;
                height: 640px;
                border-radius: 12px;
                overflow: hidden;
                background: #1A1A1A;

                @include mobile-lg {
                    height: 320px;
                }
            }

            .gallery-main-fallback img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }

            :deep(.gallery-main-swiper) {
                .swiper-button-prev,
                .swiper-button-next {
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    background: rgba(0, 0, 0, 0.5);
                    color: #FFFFFF;

                    &::after {
                        font-size: 18px;
                        font-weight: 700;
                    }

                    &:hover {
                        background: var(--swiper-theme-color);
                        color: #000;
                    }
                }
            }

            .gallery-slide-btn {
                position: relative;
                display: block;
                width: 100%;
                height: 100%;
                border: none;
                padding: 0;
                cursor: pointer;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    display: block;
                }
            }

            .gallery-main-overlay {
                position: absolute;
                inset: 0;
                background: rgba(0, 0, 0, 0.45);
                opacity: 0;
                transition: 0.3s ease;

                span {
                    font-family: 'Manrope';
                    font-weight: 700;
                    font-size: 15px;
                    text-transform: uppercase;
                    letter-spacing: 0.02em;
                    color: #D3E97A;
                    border: 1px solid #D3E97A;
                    border-radius: 30px;
                    padding: 10px 22px;
                }
            }

            .gallery-slide-btn:hover .gallery-main-overlay {
                opacity: 1;
            }

            :deep(.gallery-thumbs-swiper) {
                padding: 4px 2px;
            }

            .gallery-thumb-slide {
                height: 80px;
                border-radius: 8px;
                overflow: hidden;
                background: #1A1A1A;
                border: 2px solid transparent;
                cursor: pointer;
                transition: 0.3s;
                opacity: 0.6;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }

                &:hover {
                    opacity: 1;
                }
            }

            .gallery-thumb-slide.swiper-slide-thumb-active {
                border-color: #D3E97A;
                opacity: 1;
            }
        }

        .pd-about {
            max-width: 860px;

            h2 {
                font-family: 'Bebas Neue';
                font-weight: 400;
                font-size: 32px;
                color: #FFFFFF;
            }

            p {
                font-family: 'Manrope';
                font-size: 18px;
                line-height: 160%;
                color: #C7C7C7;

                @include mobile-lg {
                    font-size: 16px;
                }
            }
        }

        :deep(.pd-lightbox-content) {
            background: #0A0A0A;
            border: none;
            border-radius: 12px;
        }

        :deep(.modal-backdrop) {
            opacity: 0.85 !important;
        }

        .pd-lightbox {
            display: flex;
            flex-direction: column;
            padding: 8px 24px 24px;

            @include mobile-lg {
                padding: 8px 16px 16px;
            }

            .pd-lightbox-toolbar {
                margin-bottom: 4px;
            }

            .lightbox-close {
                flex: 0 0 auto;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.1);
                border: none;
                color: #FFFFFF;
                font-size: 24px;
                line-height: 1;
                cursor: pointer;
                transition: 0.3s;

                &:hover {
                    background: #D3E97A;
                    color: #000;
                }
            }

            .pd-lightbox-stage {
                gap: 16px;
                min-height: 0;

                @include mobile-lg {
                    gap: 8px;
                }
            }

            .pd-lightbox-image {
                flex: 1 1 auto;
                min-width: 0;

                img {
                    display: block;
                    max-width: 100%;
                    max-height: 65vh;
                    width: auto;
                    height: auto;
                    object-fit: contain;
                    border-radius: 8px;
                    margin: 0 auto;

                    @include mobile-lg {
                        max-height: 45vh;
                    }
                }
            }

            .lightbox-nav {
                flex: 0 0 auto;
                width: 48px;
                height: 48px;
                border-radius: 50%;
                border: 1px solid rgba(255, 255, 255, 0.3);
                background: rgba(255, 255, 255, 0.08);
                color: #FFFFFF;
                font-size: 28px;
                line-height: 1;
                cursor: pointer;
                transition: 0.3s;

                &:hover {
                    background: #D3E97A;
                    color: #000;
                    border-color: #D3E97A;
                }

                @include mobile-lg {
                    width: 36px;
                    height: 36px;
                    font-size: 20px;
                }
            }

            .pd-lightbox-counter {
                text-align: center;
                margin-top: 16px;
                font-family: 'Manrope';
                font-size: 14px;
                color: #C7C7C7;
            }
        }
    }
</style>
