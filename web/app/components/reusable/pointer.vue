<script lang="ts" setup>

</script>

<template>
    <div class="pointer-container d-flex align-items-center justify-content-center">
        <div class="pointer"></div>
    </div>
</template>

<style lang="scss" scoped>
    .pointer-container {
        /* _Step icon base */

        width: 32px;
        height: 32px;

        /* White */
        background: #FFFFFF;
        /* Elevation/Light */
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05), 0px 6px 24px rgba(0, 0, 0, 0.04), inset 0px 1px 1px rgba(0, 0, 0, 0.04);
        border-radius: 100px;

        /* Inside auto layout */
        flex: none;
        order: 1;
        flex-grow: 0;

        .pointer {
            /* Primary/Dark */
            background: #5531A7;
            width: 8px;
            height: 8px;
            border-radius: 100%;
        }

        @include tablet {
            display: none !important;
        }

    }
</style>
