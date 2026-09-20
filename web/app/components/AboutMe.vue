<script lang="ts" setup>
    
    const router = useRouter()

    function goToAboutme() {
        router.push('/about-me')
    }
</script>

<template>
    <div class="about-me-container d-flex justify-content-between gap-5">

        <div v-reveal.left class="left">
            <h1>About me</h1>
        </div>

        <div v-reveal.right="120" class="right">
            <h2 class="mb-3">A passionate Filipino web developer  dedicated to turning ideas into fast, functional, and intuitive web solutions.</h2>
            <p>
                I am Mc Nilou Menard Catayas a fullstack developer and a highly skilled in frontend development using Vue, Nuxt stacks and backend development using Laravel PHP. I am also a mobile developer using flutter and I have experience also using flutterflow tools . I also have a knowledge in creating UI/UX design using figma.
            </p>

            
            <slot name="footer">
                <div class="redirect-button d-flex">
                    <a @click="goToAboutme" rel="noopener noreferrer">
                        <div @click="goToAboutme" class="d-flex align-items-center gap-1">
                            <span>More about me</span>
                        </div>
                    </a>
                </div>
            </slot>
        </div>

    </div>
</template>

<style lang="scss" scoped>
    .about-me-container {
        padding: 122px 108px;
        @include resolution(1366px) {
            flex-direction: column;
        }

        @include mobile-lg {
            padding: 3rem 2rem;
            gap: 1rem !important;
        }
        .left {
            h1 {
                font-family: 'Bebas Neue';
                font-style: normal;
                font-weight: 400;
                font-size: 101px;
                line-height: 90%;
                color: #FFFFFF;

                @include mobile-lg {
                    font-size: 48px;
                }

            }
        }

        .right {
            max-width: 704px;
            @include resolution(1366px) {
                max-width: unset;
            }
            h2 {
                font-family: 'Manrope';
                font-style: normal;
                font-weight: 500;
                line-height: 150%;
                color: #C7C7C7;

                @include mobile-lg {
                    font-size: 20px;
                }

            }

            p {
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
</style>
