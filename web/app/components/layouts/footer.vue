
<script lang="ts" setup>
import { ref } from "vue";

    const { $swal } = useNuxtApp()
    const isSubmitVisible = ref(true)
    const isLoading = ref(false)

    async function submit() {
        try {
            isLoading.value = true
            const response = await fetch(
            'https://hooks.zapier.com/21830471231231238/444rytsq/',
                {
                    method: 'POST',
                    body: {
                        name: 'John Doe',
                        email: 'john@example.com',
                        subject: 'Contact Form',
                        message: 'Hello from my Nuxt 4 website!',
                    },
                }
            )

            $swal.fire({
                title: "Successfully submitted",
                text: `Thank you for contacting me. Will reach you out as soon as possible.`,
                icon: "success",
                showCancelButton: false,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes",
                showLoaderOnConfirm: true,
                allowOutsideClick: false,
                allowEscapeKey : false
            })
            isLoading.value = false
        } catch (error) {
            isLoading.value = false
            $swal.fire({
                title: "Something went wrong",
                text: `I'm currently experiencing an issue with my contact form. Please send me an email at jemenard082713@gmail.com instead of submitting your message here. Sorry for the inconvience`,
                icon: "error",
            })
        }
    }
</script>

<template>
    <div id="letsconnect" class="layout-footer-container d-flex justify-content-between">
        <div v-reveal.left class="left position-relative">
            <h1>LET'S CONNECT</h1>
            <p>
                Say hello at <a href="mailto:jemenard082713@gmail.com">jemenard082713@gmail.com</a> <br>
                For more info, here’s my resume
            </p>

            <div class="d-flex gap-3">
                <img src="~assets/img/linkedin.svg" alt="linkedin" style="height: 25px;">
                <img src="~assets/img/github.svg" alt="github" style="height: 25px;">
                <img src="~assets/img/gmail.svg" alt="gmail" style="height: 25px;">
            </div>

            <div class="foot-copyright mt-5">
                <span>© 2025 Menard Catayas</span>
            </div>
        </div>

        <div v-reveal.right="120" class="right" v-if="isSubmitVisible">
            <b-form @submit.stop.prevent="submit">
                <b-form-group class="form-input-text" id="name" label="Name" label-for="name" description="">
                    <b-form-input id="name" placeholder="" required></b-form-input>
                </b-form-group>
                
                <b-form-group class="form-input-text" id="email" label="Email" label-for="email" description="">
                    <b-form-input id="email" type="email" placeholder="" required></b-form-input>
                </b-form-group>
                
                <b-form-group class="form-input-text" id="subject" label="Subject" label-for="subject" description="">
                    <b-form-input id="subject" placeholder="" required></b-form-input>
                </b-form-group>
                
                <b-form-group class="form-input-text" id="message" label="Message" label-for="message" description="">
                    <b-form-textarea id="message" placeholder="" rows="5" max-rows="10" required></b-form-textarea>
                </b-form-group>

                <b-button v-if="!isLoading" variant="primary" type="submit">SUBMIT</b-button>
                <b-button v-else variant="primary" type="submit">SUBMITTING...</b-button>
            </b-form>
        </div>
    </div>
</template>

<style lang="scss">
    .layout-footer-container {
        gap: 24px;
        padding: 55px 108px;
        
        @include resolution(1366px) {
            flex-direction: column-reverse;
        }
        @include mobile-lg {
            padding-left: 2rem;
            padding-right: 2rem;
        }
        .left {
            width: 100%;
            h1 {
                font-family: 'Bebas Neue';
                font-style: normal;
                font-weight: 400;
                font-size: 76px;
                line-height: 100%;
                color: #FFFFFF;
                margin-bottom: 1rem;

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
                color: #C7C7C7;

                > a {
                    color: #C7C7C7;
                    text-decoration: none;
                    border-bottom: 1px solid #D3E97A;
                    transition: 0.3s;

                    &:hover {
                        color: #D3E97A;
                    }
                }

                margin-bottom: 40px;

            }

            .foot-copyright {
                position: absolute;
                left: 0px;
                bottom: 0px;
                font-family: 'Manrope';
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 160%;
                color: #C7C7C7;
                @include resolution(1366px) {
                    position: relative;
                }
            }
        }

        .right {
            width: 100%;
            .form-input-text {
                margin-bottom: 24px;
            }
        }

        .b-form-group {
            .form-label {
                font-family: 'Manrope';
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 160%;
                color: #C7C7C7;

            }

            .form-control {
                font-family: 'Manrope';
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 150%;

                background: #1A1A1A;
                border-color: #1A1A1A;
                border-radius: 4px;

                color: #C7C7C7;


            }
        }

        .btn-primary {
            padding: 19px 40px !important; 

            font-family: 'Manrope';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 100%;
            color: #0A0A0A;

            margin-top: 1rem;

        }
    }
</style>
