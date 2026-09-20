<script lang="ts" setup>
import address from '@/assets/img/sidebar/address.svg'
import phone from '@/assets/img/sidebar/phone.svg'
import website from '@/assets/img/sidebar/website.svg'
import email from '@/assets/img/sidebar/email.svg'
import philippines from '@/assets/img/languages/philippines.png'
import usa from '@/assets/img/languages/usa.png'

    const languages = [
        {
            title: 'Filipino',
            level: 'Native Proficiency',
            icon: philippines
        },
        {
            title: 'Cebuano',
            level: 'Native Proficiency',
            icon: philippines
        },
        {
            title: 'English',
            level: 'Professional Proficiency',
            icon: usa
        },
    ];

    const informations = [
        {
            title: 'Email',
            value: 'jemenard082713@gmail.com',
            icon: email
        },
        {
            title: 'Website',
            value: 'https://deluxe-salamander-c57077.netlify.app/',
            icon: website
        },
        {
            title: 'Phone',
            value: '(+63) 921 279 8003',
            icon: phone
        },
        {
            title: 'Address',
            value: 'Butuan City, Agusan Del Norte, Philippines, 8600',
            icon: address
        },
    ];
</script>

<template>
    <div class="layout-sidebar-container position-fixed">
        
        <div class="portfolio-image-container">
            <div class="portfolio-image rounded-circle overflow-hidden">
                <img src="~assets/img/profile-img.jpg" class="object-fit-cover" height="100" width="100" alt="">
            </div>
            <h2 class="portfolio-name mt-3">Menard Catayas</h2>
            <h4 class="portfolio-title">Full-Stack Developer</h4>
        </div>

        <div class="separator"></div>

        <div class="portfolio-information-container">
            <div v-for="(information, i) in informations" :key="i" class="portfolio-information d-flex align-items-center gap-3 mb-4">
                <div class="information-icon">
                    <img :src="information.icon" height="32" width="32" alt="">
                </div>
                <div class="information-content">
                    <h5 class="information-title mb-1">{{ information.title }}</h5>
                    <p v-if="information.title != 'Website'" class="information-value mb-0">{{ information.value }}</p>
                    <a v-else :href="information.value">{{ information.value }}</a>
                </div>

            </div>
        </div>

        <div class="separator"></div>

        <div>Languages</div>

        <div class="portfolio-languages-container d-flex gap-4 flex-wrap w-100 mt-3">
            <div v-for="(language, i) in languages" :key="i" class="portfolio-language cursor-pointer d-flex align-items-center gap-3">
                
                <img :src="language.icon" height="20" class="object-fit-contain" :alt="language.icon">
                <div class="language-content">
                    <h5 class="language-title mb-0">{{ language.title }}</h5>
                    <p class="language-level mb-0">{{ language.level }}</p>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
    .layout-sidebar-container {
        width: 350px;
        height: 100vh;
        padding: 0 24px;

        @include tablet {
            position: relative !important;
            width: 100%;
        }

        @include tablet {
            position: relative !important;
            width: 100%;
            height: auto;
        }

        .portfolio-image-container {
            @include tablet {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }

        .portfolio-languages-container {
            @include tablet {
                justify-content: center !important;
            }
        }

        .portfolio-image {
            width: 100px;
            height: 100px;
            margin-top: 50px;
        }

        .portfolio-title {
            background: linear-gradient(90deg, #A478E8 0%, #516CF7 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }

        .information-content {
            font-family: 'DM Sans', sans-serif;
            .information-title {
                font-weight: 400;
                font-size: 14px;
                color: #79819A;
            }

            .information-value {
                font-weight: 500;
                font-size: 16px;
                color: #47516B;
            }
        }

        .portfolio-language {
            gap: 5px;
            .language-title {
                font-weight: 500;
                font-size: 16px;
                color: #47516B;
            }

            .language-level {
                font-weight: 400;
                font-size: 14px;
                color: #79819A;
            }
        }
    }
</style>
