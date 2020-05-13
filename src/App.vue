<template>
    <div id="app">
        <app-navbar :title="title" :routes="routes"/>
        <router-view/>
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar.vue'

    export default {
        name: 'App',
        components: {
            'app-navbar': NavBar
        },
        props: {
            title: {
                type: String,
                required: true
            },
            routes: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style lang="sass">
    @import './styles/application'
</style>
