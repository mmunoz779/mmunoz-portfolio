<template>
    <div>
        <slot/>
    </div>
</template>

<script>
    export default {
        name: 'MainLayout',
        components: {

        },
        props: {
            title: {
                type: String
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import '../styles/layouts/l-main'
</style>

<style lang="sass">
    @import '../styles/application'
</style>
