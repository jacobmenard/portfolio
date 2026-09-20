<template>
  <div class="portfolio-main-container light-mode">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
  body {
    font-family: 'Outfit', sans-serif;
    background: linear-gradient(180deg, #000000 0%, #2A2A2A 100%);
    // background: #000000;
  }


  .separator {
    width: 100%;
    height: 1px;
    background-color: #E2E6EE;
    margin: 32px 0;
  }

  h2 {
    margin-bottom: 0px;
  }

  .cursor-pointer {
    cursor: pointer;
  }

  
  .portfolio-main-container {
    max-width: 1440px;
    margin: auto;
  }

  

  .truncate {
      word-wrap: break-word;
      -webkit-hyphens: auto;
      -ms-hyphens: auto;
      hyphens: auto;
      display: -moz-box !important;
      display: -webkit-box !important;
      -webkit-box-orient: vertical;
      box-orient: vertical;
      white-space: normal;
      overflow: hidden;
      &.truncate {
          &--4 {
              -webkit-line-clamp: 4;
              -moz-line-clamp: 4;
              line-clamp: 4;
          }
          &--3 {
              -webkit-line-clamp: 3;
              -moz-line-clamp: 3;
              line-clamp: 3;
          }
          &--2 {
              -webkit-line-clamp: 2;
              -moz-line-clamp: 2;
              line-clamp: 2;
          }
          &--1 {
              -webkit-line-clamp: 1;
              -moz-line-clamp: 1;
              line-clamp: 1;
          }
      }
  }

  .line-separator {
    border-bottom: 1px solid #484848;
  }

  // Scroll-triggered reveal transitions (see app/plugins/scroll-reveal.client.ts)
  .reveal {
    opacity: 0;
    transform: translate3d(0, 64px, 0);
    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;

    &--left {
      transform: translate3d(-72px, 0, 0);
    }

    &--right {
      transform: translate3d(72px, 0, 0);
    }

    &--down {
      transform: translate3d(0, -64px, 0);
    }

    &--scale {
      transform: scale3d(0.9, 0.9, 1);
    }

    &--fade {
      transform: none;
    }

    &--visible {
      opacity: 1;
      transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .reveal {
      opacity: 1 !important;
      transform: none !important;
      transition: none !important;
    }
  }

  .btn {
    text-wrap: nowrap;
    font-family: 'Manrope', sans-serif;
    &-primary {
      background: #D3E97A;
      color: #000;
      border: 1px solid #D3E97A !important;
      border-radius: 30px;

      &:hover {
        background: #a7b962;
        color: #000;
      }
    }

    &-secondary {
      background: #222222;
      color: #fff;
      border: 1px solid #222222 !important;
      border-radius: 30px;

      &:hover {
        background: #131313;
        border: 1px solid #131313 !important;
        color: #000;
      }
    }
  }

  

  .redirect-button {
      margin-top: 48px;

      a {
          font-family: 'Manrope';
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 150%;
          /* identical to box height, or 24px */
          text-transform: uppercase;

          color: #D3E97A !important;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: 0.3s;
          cursor: pointer;

          &:hover {
              border-color: #D3E97A;
          }

      }


  }
</style>