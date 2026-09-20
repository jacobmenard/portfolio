<script lang="ts" setup>
import { BButton } from 'bootstrap-vue-next';

import nuxt from '@/assets/img/skills/nuxt.png'
import vue from '@/assets/img/skills/vue.png'
import claude from '@/assets/img/skills/claude.png'
import augment from '@/assets/img/skills/augment.png'
import chatgpt from '@/assets/img/skills/chatgpt.png'
import cursor from '@/assets/img/skills/cursor.png'
import laravel from '@/assets/img/skills/laravel.webp'
import monday from '@/assets/img/skills/monday.png'
import trello from '@/assets/img/skills/trello.png'
import jira from '@/assets/img/skills/jira.png'
import stripe from '@/assets/img/skills/stripe.png'
import paddle from '@/assets/img/skills/paddle.png'
import ghl from '@/assets/img/skills/ghl.png'
import js from '@/assets/img/skills/js.png'
import jquery from '@/assets/img/skills/jquery.png'
import ts from '@/assets/img/skills/ts.png'
import html from '@/assets/img/skills/html.png'
import css from '@/assets/img/skills/css.png'
import scss from '@/assets/img/skills/scss.png'
import bootstrap from '@/assets/img/skills/bootstrap.png'
import bootstrapvue from '@/assets/img/skills/bootstrapvue.png'
import tailwind from '@/assets/img/skills/tailwind.png'
import figma from '@/assets/img/skills/figma.png'
import photoshop from '@/assets/img/skills/photoshop.png'
import flutter from '@/assets/img/skills/flutter.png'
import flutterflow from '@/assets/img/skills/flutterflow.png'
import git from '@/assets/img/skills/git.png'
import doh from '@/assets/img/experience/doh.png'
import ethesia from '@/assets/img/experience/ethesia.png'
import peiso from '@/assets/img/experience/peiso.png'
import sipsandsparks from '@/assets/img/experience/sipsandsparks.png'
import valenciagrace from '@/assets/img/experience/valenciagrace.png'
import autosolve from '@/assets/img/experience/autosolve.png'


    const experiences = [
        
        {
            title: 'Full-Stack Developer',
            company: 'ZOK Inc.',
            duration: '2025 - 2026',
            location: 'San Diego, California',
            logo: ethesia,
            responsibilities: `Designed and developed responsive web applications by converting Figma and PSD designs into functional user interfaces, built and maintained backend systems using Laravel, and integrated frontend interfaces with backend APIs to deliver seamless and efficient web applications.`
        },
        {
            title: 'Full-Stack Developer',
            company: 'Valencia Grace',
            duration: '2025',
            location: 'London, United Kingdom',
            logo: valenciagrace,
            responsibilities: `Converted UI/UX designs into responsive web applications using Nuxt.js and developed a valencia grace music single release website with Nuxt.js and Laravel, delivering a seamless, responsive user experience and integrating frontend interfaces with robust backend services.`
        },
        
        {
            title: 'Full-Stack Developer',
            company: 'Sips and Sparks',
            duration: '2025',
            location: 'Connecticut, United States',
            logo: sipsandsparks,
            responsibilities: `Converted UI/UX designs into responsive web applications and developed a speed dating application, ensuring a seamless user experience and responsive functionality across devices.`
        },
        {
            title: 'Frontend Developer',
            company: 'Peiso Pty Ltd',
            duration: '2023-2025',
            location: 'San Diego, California',
            logo: peiso,
            responsibilities: `Converted Figma and PSD designs into responsive, production-ready web applications, developed modern frontend interfaces using Vue.js and Nuxt.js, provided backend support with Java Spring Boot, and built cross-platform mobile applications using Flutter and FlutterFlow.`
        },
        {
            title: 'Full Stack Developer',
            company: 'AUTOSOLVE',
            duration: '2021 - 2025',
            location: 'Creemore, Ontario, Canada',
            logo: autosolve,
            responsibilities: `Designed and developed responsive web applications by converting Figma and PSD designs into production-ready interfaces and developed a Tire and Rim Inventory Management System, delivering efficient inventory tracking and management solutions.`
        },
        {
            title: 'Computer Programmer I',
            company: 'DOH - CARAGA Region',
            duration: '2017 - 2020',
            location: 'Pizarro Street Corner Narra Road, Butuan City, Philippines',
            logo: doh,
            responsibilities: `Conducted preventive maintenance for computer systems, served as a trainer for the Integrated Hospital Management Information System (iHOMIS), and developed and maintained internal healthcare systems to support efficient hospital operations and improve service delivery.`
        },
    ];

    const frontendSkills = [
        {
            title: 'Nuxt',
            icon: nuxt
        },
        {
            title: 'Vue',
            icon: vue
        },
        {
            title: 'Laravel',
            icon: laravel
        },
        {
            title: 'JavaScript',
            icon: js
        },
        {
            title: 'jQuery',
            icon: jquery
        },
        {
            title: 'TypeScript',
            icon: ts
        },
        {
            title: 'HTML',
            icon: html
        },
        {
            title: 'CSS',
            icon: css
        },
        {
            title: 'SCSS',
            icon: scss
        },
        {
            title: 'Bootstrap',
            icon: bootstrap
        },
        {
            title: 'BootstrapVue',
            icon: bootstrapvue
        },
        {
            title: 'Tailwind CSS',
            icon: tailwind
        },
    ];

    const otherSkills = [
        {
            title: 'Git',
            icon: git
        },
        {
            title: 'Flutter',
            icon: flutter
        },
        {
            title: 'FlutterFlow',
            icon: flutterflow
        },
        {
            title: 'Figma',
            icon: figma
        },
        {
            title: 'Photoshop',
            icon: photoshop
        },
        {
            title: 'Monday.com',
            icon: monday
        },
        {
            title: 'JIRA',
            icon: jira
        },
        {
            title: 'Trello',
            icon: trello
        },
        {
            title: 'Stripe',
            icon: stripe
        },
        {
            title: 'Paddle',
            icon: paddle
        },
        {
            title: 'Gohighlevel',
            icon: ghl
        },
    ];

    const aiSkills = [
        {
            title: 'Claude',
            icon: claude
        },
        {
            title: 'ChatGPT',
            icon: chatgpt
        },
        {
            title: 'Augment',
            icon: augment
        },
        {
            title: 'Cursor',
            icon: cursor
        },
    ]

    const projects = [
        {
            title: 'Sips and Sparks',
            description: 'Sips & Sparks was made for people who are short on time but still want real connection. We host speed dating, singles mixers, and activity-based events across Connecticut and southern Massachusetts',
            fullDescription: "Done with swiping, awkward small talk, and first dates that lead nowhere? Sips & Sparks was made for people who are short on time but still want real connection. We host speed dating, singles mixers, and activity-based events across Connecticut and southern Massachusetts. All designed to make meeting new people feel natural, fun, and actually worth showing up for. Whether you’re into quick conversations, relaxed mingling, or something more interactive, there's an event that fits your vibe. Come sip a drink and spark some new connections. You never know where they might lead!",   
            link: 'https://www.sipsandsparks.com',
            imgLink: sipsandsparks
        },
        {
            title: 'Valencia Grace',
            description: `Valencia Grace is the official website of music artist Valencia Grace, designed to showcase her latest releases, music videos, tour dates, and exclusive content. The website delivers an immersive, responsive experience that reflects the artist's unique theatrical pop aesthetic while making it easy for fans to discover and stream her music across major platforms.`,
            fullDescription: `Valencia Grace is the official website of music artist Valencia Grace, designed to showcase her latest releases, music videos, tour dates, and exclusive content. The website delivers an immersive, responsive experience that reflects the artist's unique theatrical pop aesthetic while making it easy for fans to discover and stream her music across major platforms.`,
            link: 'https://www.valenciagrace.com',
            imgLink: valenciagrace   
        },
    ];
</script>

<template>

    <div class="pf-main-container">

        <head-cover></head-cover>

        <div class="line-separator"></div>

        <featured-project></featured-project>

        <div class="line-separator"></div>

        <about-me></about-me>
        
        <div class="line-separator"></div>

        <layouts-footer></layouts-footer>

        <!-- <div class="pf-spacer"></div>

        <div class="pf-wrapper position-relative">
            <div class="pf-title position-absolute d-flex align-items-center flex-row-reverse">
                <reusable-pointer></reusable-pointer>
                <span class="mb-0">Latest Projects</span>
            </div>

            <div class="pf-content projects d-flex flex-column gap-3">
                <div class="pf-projects">
                    <div v-for="(project, i) in projects" :key="`project-${i}`" class="pf-project-container d-flex flex-column">

                        <div class="content d-flex gap-3">
                            <div class="project-image d-flex align-items-center justify-content-center">
                                <img :src="project.imgLink" :alt="project.title" class="object-fit-contain rounded">
                            </div>
                            <div class="project-title w-100">
                                <span class="d-block mb-2">{{ project.title }}</span>
                                <p class="d-block fw-normal truncate truncate--3">{{ project.description }}</p>
                            </div>
                        </div>

                        <div class="project-link d-flex align-items-center gap-2">
                            <img src="~assets/img/link.svg" height="24" alt="link.svg">
                            <a :href="project.link" target="_blank" rel="noopener noreferrer" class=" truncate truncate--1">
                                {{ project.link }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="pf-wrapper position-relative">
            <div class="pf-title position-absolute d-flex align-items-center flex-row-reverse">
                <reusable-pointer></reusable-pointer>
                <span class="mb-0">Experience</span>
            </div>

            <div class="pf-content experience d-flex flex-column gap-3">
                <div v-for="(experience, i) in experiences" :key="`experience-${i}`" class="pf-experience-container d-flex align-items-center gap-3">
                    <div class="experience-content d-flex align-items-center gap-3 w-100">
                        <div class="pf-experience-logo">
                            <img :src="experience.logo" :alt="experience.company" width="50" class="object-fit-contain">
                        </div>
                        <div class="experience-title w-100">
                            <span>
                                {{ experience.title }}
                                <span class="fw-bold d-block">{{ experience.company }}</span>
                            </span>
                        </div>
                    </div>
                    <div class="pf-year-location">
                        <span class="fw-bold">
                            {{ experience.duration }}
                            <span class="d-block fw-normal">
                                <img src="~assets/img/location-marker.svg" alt="Location" height="16" class="object-fit-contain me-2">
                                {{ experience.location }}
                            </span>
                        </span>
                    </div>
                </div>
            </div>

        </div>

        <div class="pf-wrapper position-relative">
            <div class="pf-title position-absolute d-flex align-items-center flex-row-reverse">
                <reusable-pointer></reusable-pointer>
                <span class="mb-0">Development Skills</span>
            </div>

            <div class="pf-content">
                <div class="portfolio-skills-container d-flex gap-3 flex-wrap w-100 mt-3">
                    <div v-for="(skill, i) in frontendSkills" :key="i" class="portfolio-skill cursor-pointer d-flex align-items-center">
                        
                        <img :src="skill.icon" height="20" class="object-fit-contain" :alt="skill.icon">
                        <div class="skill-content">
                            <h5 class="skill-title mb-0">{{ skill.title }}</h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="pf-wrapper position-relative">
            <div class="pf-title position-absolute d-flex align-items-center flex-row-reverse">
                <reusable-pointer></reusable-pointer>
                <span class="mb-0">Other Development Skills</span>
            </div>

            <div class="pf-content">
                <div class="portfolio-skills-container d-flex gap-3 flex-wrap w-100 mt-3">
                    <div v-for="(skill, i) in otherSkills" :key="i" class="portfolio-skill cursor-pointer d-flex align-items-center">
                        
                        <img :src="skill.icon" height="20" class="object-fit-contain" :alt="skill.icon">
                        <div class="skill-content">
                            <h5 class="skill-title mb-0">{{ skill.title }}</h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="pf-wrapper position-relative">
            <div class="pf-title position-absolute d-flex align-items-center flex-row-reverse">
                <reusable-pointer></reusable-pointer>
                <span class="mb-0">AI-assisted coding tools</span>
            </div>

            <div class="pf-content">
                <div class="portfolio-skills-container d-flex gap-3 flex-wrap w-100 mt-3">
                    <div v-for="(skill, i) in aiSkills" :key="i" class="portfolio-skill cursor-pointer d-flex align-items-center">
                        
                        <img :src="skill.icon" height="20" class="object-fit-contain" :alt="skill.icon">
                        <div class="skill-content">
                            <h5 class="skill-title mb-0">{{ skill.title }}</h5>
                        </div>
                    </div>
                </div>
            </div>

        </div> -->
    </div>
</template>

<style lang="scss" scoped>
    .pf-main-container {
        @include tablet {
            padding-left: 0px;
        }
        .pf-spacer {
            height: 100px;
        }
        .pf-wrapper {
            padding: 0px 50px;
            border-left: 2px solid #E2E6EE;

            @include tablet {
                padding: 0px 32px;
            }

            .pf-title {
                top: -1rem;
                background-color: transparent;
                left: -17px;
                gap: 32px;

                @include tablet {
                    left: 1rem;
                }

                span {
                    font-size: 32px;
                    line-height: normal;
                    font-weight: 500;

                    @include tablet {
                        font-size: 24px;
                    }
                }
            }

            .pf-content {
                    padding-top: 30px;
                    padding-bottom: 60px;

                    &.experience {
                        padding-top: 50px;
                        gap: 5px;

                        .pf-experience-container {
                            font-family: 'DM Sans', sans-serif;
                            line-height: normal;

                            padding: 1rem 2rem;
                            background-color: #ffffff;
                            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05) ;
                            transition: 0.3s ease-in-out;
                            cursor: pointer;
                            &:hover {
                                box-shadow: 0px 6px 7px rgba(0, 0, 0, 0.10);
                            }

                            

                            @include mobile-lg {
                                flex-direction: column;

                                .experience-content {
                                    flex-direction: column;
                                    align-items: center !important;
                                }

                                .experience-title {
                                    text-align: center;
                                }
                            }

                            span {
                                font-size: 16px;
                                color: #79819A;

                                > span {
                                    font-size: 18px;
                                    color: #2E2E48;
                                }
                            }

                            &:first-child {
                                border-top-left-radius: 1rem;
                                border-top-right-radius: 1rem;
                                background-color: #F8F2FC;
                            }

                            &:last-child {
                                border-bottom-left-radius: 1rem;
                                border-bottom-right-radius: 1rem;
                            }
                        }

                        .pf-year-location {
                            text-align: right;
                            span {
                                font-size: 14px;
                                color: #47516B;

                                > span {
                                    font-size: 14px;
                                    color: #79819A;
                                }
                            }

                            @include mobile-lg {
                                width: 100%;
                            }
                        }

                        .pf-experience-logo {
                            border-radius: 10px;

                        }
                    }
                    

                    &.projects {
                        padding-top: 50px;
                        .pf-projects {
                            display: grid;
                            grid-template-columns: repeat(2, 1fr);
                            gap: 24px;

                            @include laptop {
                                display: flex !important;
                                flex-direction: column;
                            }

                            @include tablet {
                                display: flex !important;
                                flex-direction: column;
                            }

                            .pf-project-container {
                                background-color: #ffffff;
                                padding: 24px;

                                .project-image {
                                    min-width: 60px;
                                    max-width: 60px;
                                    height: 60px;
                                    border-radius: 10px;
                                    overflow: hidden;
                                    background-color: #F8F2FC;

                                    img {
                                        width: 50px;
                                        height: 50px;
                                    }

                                }
                                
                                @include mobile-lg {
                                    .content {
                                        flex-direction: column;
                                    }
                                }
                            }

                            .project-title {
                                font-family: 'DM Sans', sans-serif;
                                line-height: normal;
                                span {
                                    font-size: 18px;
                                    color: #2E2E48;
                                    font-weight: 500;
                                }

                                p {
                                    font-size: 16px;
                                    color: #79819A;
                                    line-height: 20px;
                                }
                            }

                            .project-link {
                                a {
                                    font-size: 16px;
                                    color: #516CF7;
                                    font-weight: 500;
                                    text-decoration: none !important;

                                    &:hover {
                                        text-decoration: underline;
                                    }
                                }
                            }
                            
                        }
                    }


            }
        }

        

        .portfolio-skill {
            gap: 5px;
            border-radius: 20px;
            padding: 8px 12px;
            background-color: #E2E6EE;
            .skill-title {
                font-weight: 500;
                font-size: 16px;
                color: #47516B;
            }
        }
    }
</style>
