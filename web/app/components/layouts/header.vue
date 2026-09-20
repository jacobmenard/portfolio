
<script lang="ts" setup>
import { ref } from "vue";
    const headerIcon = ref('MENARD CATAYAS')

    function downToLetsConnect() {
        document.getElementById('letsconnect')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        isShowMenu.value = false
    }

    const isShowMenu = ref(false)

    const router = useRouter()

    function redirectToHome() {
        router.push('/')
        isShowMenu.value = false
    }

    function redirectToAbout() {
        router.push('/about-me')
        isShowMenu.value = false
    }
</script>

<template>
    <div class="layout-header-container position-sticky">
        <div class="layout-header-wrapper d-flex align-items-center justify-content-between gap-3 w-100 h-100 position-relative">
            <div @click="redirectToHome" class="header-icon cursor-pointer">
                <h2>{{ headerIcon }}</h2>
            </div>

            <div class="header-menu d-flex gap-1">
                <div class="menu px-3 py-2">
                    <nuxt-link to="/" @click="isShowMenu = false">
                        <span>Home</span>
                    </nuxt-link>
                </div>
                <div class="menu px-3 py-2">
                    <nuxt-link to="/about-me">

                        <span>About</span>
                    </nuxt-link>
                </div>
                <div @click="downToLetsConnect" class="menu px-3 py-2">
                    <span>Contact</span>
                </div>
            </div>

            <div class="mobile" @click="isShowMenu = !isShowMenu">
                <img src="~assets/img/hamburger-menu.svg" alt="hamburger-menu">
            </div>
        </div>

        <div class="mobile-menu d-flex flex-column w-100" :class="{'show' : isShowMenu}">
            
            <div @click="redirectToHome" class="menu px-3 py-2">
                <span>Home</span>
            </div>
            <div @click="redirectToAbout" class="menu px-3 py-2">
                <span>About</span>
            </div>
            <div @click="downToLetsConnect" class="menu px-3 py-2">
                <span>Contact</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .layout-header-container {
        top: 0px;
        height: 96px;
        padding: 0 60px;
        z-index: 100;
        background: #000000;

        @include mobile-lg {
            padding-left: 2rem;
            padding-right: 2rem;
            height: 70px;
        }

        .mobile-menu {
            position: absolute;
            left: 0px;
            background: #000;
            z-index: 100;
            padding-left: 1rem;
            padding-right: 1rem;
            max-height: 0;
            overflow: hidden;
            opacity: 0;
            transition: 0.3s;

            &.show {
                max-height: 300px;
                opacity: 1;
            }

            
            a, span {
                text-decoration: none;
                color: white;
            }
        }

        .header-icon {
            font-family: 'Bebas Neue';
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: -0.01em;
            color: #C7C7C7;
            
        }

        .mobile {
            display: none;
            @include mobile-lg {
                display: block !important;
            }
        }

        .header-menu {
            color: #C7C7C7;
            font-family: "Inter", sans-serif;
            font-optical-sizing: auto;
            @include mobile-lg {
                display: none !important;
            }
            
            .menu {
                background: transparent;
                transition: 0.3s;
                cursor: pointer;
                border-radius: 20px;

                a {
                    text-decoration: none;
                    color: white;
                }

                &:hover {
                    background: #D3E97A;
                    color: #000;

                    a {
                        color: #000;
                    }
                }
            }
        }
    }
</style>
