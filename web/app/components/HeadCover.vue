
<script lang="ts" setup>
    import { ref } from "vue";

    const name = ref('menard catayas')
    const motto = ref('A passionate Filipino web developer  dedicated to turning ideas into fast, functional, and intuitive web solutions.')
    const utils = useUtils()

    function downToLetsConnect() {
        document.getElementById('letsconnect')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

</script>

<template>
    <div id="topCover" class="head-cover-container d-flex justify-content-between align-items-center gap-3">
        <div v-reveal.once class="head-cover-content">
            <h1 class="text-uppercase">hi, i am
                <br>
                {{ name }}
            </h1>
            <p>
                {{ motto }}
            </p>

            <div class="button-cover d-flex gap-3">
                <b-button variant="primary">
                    <div @click="downToLetsConnect" class="d-flex align-items-center gap-4">
                        <span>CONTACT ME</span>
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
        </div>

        <img v-reveal.scale.once="150" src="~assets/img/me.svg" alt="">
    </div>
</template>

<style lang="scss" scoped>
    .head-cover-container {
        padding: 30px 108px 80px;
        @include resolution(1024px) {
            padding-left: 2rem;
            padding-right: 2rem;
        }
        @include resolution(1366px) {
            flex-direction: column;
            gap: 3rem !important;
        }
        .head-cover-content {
            max-width: 544px;
            h1 {
                font-family: 'Bebas Neue';
                font-style: normal;
                font-weight: 400;
                line-height: 90%;
                color: #FFFFFF;
                font-size: 101px;
                @include mobile-lg {
                    font-size: 48px;
                }
            }

            p {
                font-family: 'Manrope';
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 150%;
                /* or 27px */

                /* Neutral/Offwhite */
                color: #C7C7C7;

            }

            img {
                height: 700px;
                object-fit: contain;
            }

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

        }

        img {
            @include resolution(1024px) {
                width: 100%;
            }
        }
    }
</style>
