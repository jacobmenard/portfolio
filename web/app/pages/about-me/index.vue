<script lang="ts" setup>
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

    const utils = useUtils()

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
            location: 'Butuan City, Philippines',
            logo: doh,
            responsibilities: `Conducted preventive maintenance for computer systems, served as a trainer for the Integrated Hospital Management Information System (iHOMIS), and developed and maintained internal healthcare systems to support efficient hospital operations and improve service delivery.`
        },  
    ];

    const developmentSkills = [
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
</script>

<template>
    <div class="about-page-container">
        <about-me>
            <template #footer>
                <div class="button-cover d-flex gap-3">
                    <b-button variant="primary">
                        <div @click="utils.openResume" class="d-flex align-items-center gap-4">
                            <span>DOWNLOAD RESUME</span>
                            <img src="~assets/img/dot.svg" alt="" style="height: 10px !important;">
                        </div>
                    </b-button>

                    <b-button variant="secondary" @click="utils.goToMyLinkedIn">
                        <img src="~assets/img/linkedin.svg" alt="linkedin" style="height: 26px !important;">
                    </b-button>
                    <b-button variant="secondary" @click="utils.goToMyGithub">
                        <img src="~assets/img/github.svg" alt="github" style="height: 26px !important;">
                    </b-button>

                    <b-button variant="secondary" class="d-flex align-items-center justify-content-center" href="mailto:jemenard082713@gmail.com">
                        <img src="~assets/img/gmail.svg" alt="github" style="height: 26px !important;">
                    </b-button>
                </div>
            </template>
        </about-me>
        <div class="line-separator"></div>

        <div class="capabilities-container d-flex justify-content-between w-100">
            <div v-reveal.left class="left w-100">
                <h1 class="text-uppercase">My Capabilities</h1>
            </div>
            <div v-reveal.right="120" class="right w-100">
                <p class="mb-5">
                    I am always looking to expand my skill set. Here are the technologies, tools, and skills I use to develop web applications.
                </p>

                <div class="mb-4">
                    <h3 class="mb-3">Development Skills</h3>
                    <div class="d-flex gap-3 flex-wrap">
                        <div v-for="(skill, i) in developmentSkills" :key="`skill-${i}`" class="skills-wrapper d-flex align-items-center justify-content-center gap-2 px-3 py-2">
                            <img :src="skill.icon" :alt="skill.title" style="height: 20px;">
                            <span>{{ skill.title }}</span>
                        </div>
                    </div>
                </div>
                
                <div class="mb-4">
                    <h3 class="mb-3">Other Development Skills</h3>
                    <div class="d-flex gap-3 flex-wrap">
                        <div v-for="(skill, i) in otherSkills" :key="`skill-${i}`" class="skills-wrapper d-flex align-items-center justify-content-center gap-2 px-3 py-2">
                            <img :src="skill.icon" :alt="skill.title" style="height: 20px;">
                            <span>{{ skill.title }}</span>
                        </div>
                    </div>
                </div>
                
                <div>
                    <h3 class="mb-3">AI-assisted coding tools</h3>
                    <div class="d-flex gap-3 flex-wrap">
                        <div v-for="(skill, i) in aiSkills" :key="`skill-${i}`" class="skills-wrapper d-flex align-items-center justify-content-center gap-2 px-3 py-2">
                            <img :src="skill.icon" :alt="skill.title" style="height: 20px;">
                            <span>{{ skill.title }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="line-separator"></div>

        <div class="capabilities-container d-flex justify-content-between w-100">
            <div v-reveal.left class="left w-100">
                <h1>My Experience</h1>
            </div>
            <div class="experience-container right d-flex flex-column w-100">
                <div v-for="(experience, i) in experiences" :key="`experiene-${i}`" v-reveal.right="Math.min(i * 80, 320)" class="experience-wrapper d-flex flex-column gap-1">
                    <div class="head-title d-flex align-items-center justify-content-between gap-3">
                        <span class="title">{{ experience.title }}</span>
                        <span class="year">{{ experience.duration }}</span>
                    </div>
                    <div class="company mb-3">
                        <span>{{ experience.company }}</span>
                    </div>
                    
                    <p class="responsibilities mb-3">{{ experience.responsibilities  }}</p>

                    <span class="location">{{ experience.location }}</span>
                </div>
            </div>
        </div>

        <div class="line-separator"></div>

        <layouts-footer></layouts-footer>
    </div>
</template>

<style lang="scss" scoped>
    .about-page-container {
        .btn-primary {

            font-family: 'Manrope';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 100%;
            /* identical to box height, or 16px */
            text-transform: uppercase;

            /* Neutral/Black */
            color: #0A0A0A;
            padding: 19px 24px;

        }

        .btn-secondary {
            width: 56px;
            height: 56px;
        }

        .button-cover {
            margin-top: 40px;
            @include mobile-lg {
                flex-wrap: wrap;
            }
        }

        .capabilities-container {
            gap: 24px;

            padding: 80px 108px;

            @include resolution(1024px) {
                padding-left: 2rem;
                padding-right: 2rem;
            }
            @include mobile-lg {
                padding: 3rem 2rem;
            }
            @include resolution(1366px) {
                flex-direction: column;
                gap: 3rem !important;
            }

            @include mobile-lg {
                gap: 1rem !important;
            }
            .left {
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
            }

            .right {
                font-family: 'Manrope';
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 150%;
                color: #C7C7C7;
                h3 {
                    
                    font-family: 'Bebas Neue';
                    font-style: normal;
                    font-weight: 400;
                    line-height: 100%;
                    color: #FFFFFF;
                }

                p {
                    
                    @include mobile-lg {
                        font-size: 16px;
                    }
                }
            }

            .experience-container {
                gap: 80px;
                .experience-wrapper {
                    gap: 80px;

                    .head-title {
                        margin-bottom: 8px;
                        .title {
                            font-family: 'Manrope';
                            font-style: normal;
                            font-weight: 500;
                            font-size: 24px;
                            line-height: 130%;
                            letter-spacing: -0.01em;
                            color: #FFFFFF;
                            
                            @include mobile-lg {
                                font-size: 20px;
                            }
                        }

                        .year {
                            font-family: 'Manrope';
                            font-style: normal;
                            font-weight: 400;
                            font-size: 18px;
                            line-height: 150%;
                            color: #C7C7C7;
                            
                            @include mobile-lg {
                                font-size: 16px;
                            }
                        }
                    }
                }

                .company {
                    span {
                        font-family: 'Manrope';
                        font-style: normal;
                        font-weight: 600;
                        font-size: 18px;
                        line-height: 160%;
                        color: #D3E97A;
                        
                        @include mobile-lg {
                            font-size: 16px;
                        }
                    }
                }

                .responsibilities {
                    font-family: 'Manrope';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 18px;
                    line-height: 150%;
                    color: #C7C7C7;

                    @include mobile-lg {
                        font-size: 16px;
                    }

                }

                .location {
                    font-family: 'Manrope';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 150%;
                    color: #C7C7C7;
                    @include mobile-lg {
                        font-size: 14px;
                    }
                }
            }
        }

        .skills-wrapper {
            border: 1px solid #484848;
            border-radius: 100px;

            span {
                font-family: 'Manrope';
                font-style: normal;
                font-weight: 700;
                font-size: 14px;
                line-height: 100%;
                text-transform: uppercase;
                color: #FFFFFF;

            }
        }
    }
</style>
