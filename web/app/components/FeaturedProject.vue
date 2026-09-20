
<script lang="ts" setup>
import { ref } from "vue";
import valenciagrace from '@/assets/img/projects/valenciagrace.png';
import sipsandsparks from '@/assets/img/projects/sipsandsparks.png';
    const featuredProjects = ref([
        {
            title: 'Valencia Grace Website',
            description: `Valencia Grace is the official website of music artist Valencia Grace, designed to showcase her latest releases, music videos, tour dates, and exclusive content. The website delivers an immersive, responsive experience that reflects the artist's unique theatrical pop aesthetic while making it easy for fans to discover and stream her music across major platforms.`,
            link: 'https://www.valenciagrace.com',
            client: 'Valencia Grace',
            year: '2025',
            role: 'Full Stack Developer',
            img: valenciagrace
        },
        {
            title: 'Speed Dating Web Application',
            description: 'Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.',
            link: 'https://www.sipsandsparks.com',
            client: 'Sips and Sparks LLC',
            year: '2025',
            role: 'Full Stack Developer',
            img: sipsandsparks
        },
    ])
</script>

<template>
    <div class="featured-project-container d-flex flex-column w-100">
        <div v-reveal class="header-title">
            <h1 class="text-uppercase">Featured Projects</h1>
            <p>Here are some of the selected projects that showcase my passion as a web developer.</p>
        </div>

        <div class="fp-content-container">
            <div v-for="(project, i) in featuredProjects" :key="`featured-project-${i}`" class="ft-content-wrapper d-flex align-items-center w-100">
                <div v-reveal.left class="ft-image d-flex align-items-center justify-content-center w-100">
                    <img :src="project.img" :alt="project.title">
                </div>

                <div v-reveal.right="120" class="ft-details w-100">
                    <div class="description">
                        <h2 class="mb-3">{{ project.title }}</h2>

                        <p>{{ project.description }}</p>
                    </div>

                    <div class="other-details d-flex justify-content-between align-items-center gap-3">
                        <span>PROJECT INFO</span>
                    </div>
                    <div class="line-separator"></div>

                    <div class="other-details d-flex justify-content-between align-items-center gap-3">
                        <span>Client</span>
                        <span>{{ project.client }}</span>
                    </div>
                    <div class="line-separator"></div>
                    
                    <div class="other-details d-flex justify-content-between align-items-center gap-3">
                        <span>Year</span>
                        <span>{{ project.year }}</span>
                    </div>
                    <div class="line-separator"></div>

                    <div class="other-details d-flex justify-content-between align-items-center gap-3">
                        <span>Role</span>
                        <span>{{ project.role }}</span>
                    </div>
                    <div class="line-separator"></div>
                    
                    <div class="redirect-button d-flex">
                        <a :href="project.link" target="_blank" rel="noopener noreferrer">
                            <div class="d-flex align-items-center gap-1">
                                <span>Live Demo</span>
                                <img src="~assets/img/live-demo.svg" alt="live-demo" style="height: 24px;">
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .featured-project-container {
        gap: 80px;
        padding: 80px 108px;
        @include mobile-lg {
            padding: 3rem 2rem;
        }
        .header-title {
            h1 {
                font-family: 'Bebas Neue';
                font-style: normal;
                font-weight: 400;
                font-size: 76px;
                line-height: 100%;
                color: #FFFFFF;
                @include mobile-lg {
                    font-size: 48px;
                }
            }

            p {
                /* Body/Medium */
                font-family: 'Manrope';
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 150%;
                /* identical to box height, or 27px */

                /* Neutral/Offwhite */
                color: #C7C7C7;

            }
        }

        .fp-content-container {
            .ft-content-wrapper {
                gap: 48px;
                margin-bottom: 120px;

                @include resolution(1366px) {
                    flex-direction: column;
                }
                .ft-image {
                    background: #1A1A1A;
                    height: 600px !important;
                    border-radius: 12px;

                    img {
                        
                        max-width: 500px;
                        border-radius: 1rem;
                        width: 100%;

                    }

                    @include mobile-lg {
                        height: auto !important;
                    }
                }

                .ft-details {

                    .description {
                        margin-bottom: 32px;
                    }

                    .other-details {
                        height: 58px;

                    }

                    .other-details {
                        span {
                            font-family: 'Manrope';
                            font-style: normal;
                            font-weight: 600;
                            font-size: 16px;
                            line-height: 150%;

                            /* Neutral/White */
                            color: #FFFFFF;
                        }
                    }

                    h2 {
                        font-family: 'Manrope';
                        font-style: normal;
                        font-weight: 500;
                        line-height: 140%;

                        color: #FFFFFF;

                        
                        @include mobile-lg {
                            font-size: 22px;
                        }

                    }

                    p {
                        font-family: 'Manrope';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 18px;
                        line-height: 150%;

                        /* Neutral/Offwhite */
                        color: #C7C7C7;
                        @include mobile-lg {
                            font-size: 16px;
                        }

                    }
                }
            }
        }
    }
</style>
