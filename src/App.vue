<template>
    <div id="app">
        <app-navbar :title="title" :nav-routes="navRoutes"/>
        <router-view class="page-body"/>
    </div>
</template>

<script>
    import Navbar from '@/components/Navbar.vue';

    export default {
        name: 'App',
        components: {
            'app-navbar': Navbar
        },
        props: {
            title: {
                type: String,
                required: true
            },
            navRoutes: {
                type: Array,
                required: true
            },
            nodeEnv: {
                type: String,
                required: false
            }
        }
    };
</script>

<style lang="sass">
    @import './styles/application'

    .app
        position: absolute
        height: 100vh
        width: 100vw
        margin: 0
        padding: 0

    .page-body
        position: relative
        height: auto
        width: auto
</style>
