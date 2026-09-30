
<script lang="ts" setup>
const { projects: featuredProjects } = useProjects()
</script>

<template>
    <div id="featured-projects" class="featured-project-container d-flex flex-column w-100">
        <div v-reveal class="header-title">
            <h1 class="text-uppercase">Featured Projects</h1>
            <p>Here are some of the selected projects that showcase my passion as a web developer.</p>
        </div>

        <div class="fp-content-container">
            <div v-for="(project, i) in featuredProjects" :key="`featured-project-${i}`" class="ft-content-wrapper d-flex align-items-center w-100">
                <nuxt-link :to="`/projects/${project.slug}`" v-reveal.left class="ft-image d-flex align-items-center justify-content-center w-100">
                    <img :src="project.coverImage" :alt="project.title">
                    <div class="ft-image-overlay d-flex align-items-center justify-content-center">
                        <span>View Snapshots</span>
                    </div>
                </nuxt-link>

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
                    
                    <div class="redirect-button d-flex gap-4">
                        <nuxt-link :to="`/projects/${project.slug}`">
                            <div class="d-flex align-items-center gap-1">
                                <span>View Details</span>
                            </div>
                        </nuxt-link>
                        <a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer">
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
                    position: relative;
                    background: #1A1A1A;
                    height: 600px !important;
                    border-radius: 12px;
                    overflow: hidden;
                    cursor: pointer;

                    img {

                        max-width: 500px;
                        border-radius: 1rem;
                        width: 100%;
                        transition: 0.4s ease;

                    }

                    &-overlay {
                        position: absolute;
                        inset: 0;
                        background: rgba(0, 0, 0, 0.55);
                        opacity: 0;
                        transition: 0.3s ease;

                        span {
                            font-family: 'Manrope';
                            font-style: normal;
                            font-weight: 700;
                            font-size: 16px;
                            text-transform: uppercase;
                            letter-spacing: 0.02em;
                            color: #D3E97A;
                            border: 1px solid #D3E97A;
                            border-radius: 30px;
                            padding: 12px 24px;
                        }
                    }

                    &:hover {
                        .ft-image-overlay {
                            opacity: 1;
                        }

                        img {
                            transform: scale(1.04);
                        }
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
