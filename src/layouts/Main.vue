<template>
    <div>
        <slot/>
    </div>
</template>

<script>
    export default {
        name: 'MainLayout'
    }
</script>

<style lang="sass" scoped>
    @import '../styles/application'
    @import '../styles/layouts/l-main'

    div
        width: 100%
        height: 100%
        background-image: linear-gradient(320deg, $primary-color 25%, rgba($secondary-color, .3) 75%)
</style>

