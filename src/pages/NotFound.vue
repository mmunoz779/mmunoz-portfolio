<template>
    <MainLayout>
        <h1>404</h1>
        <h2>{{rootUrl}}{{currentRoute}} was not found</h2>
    </MainLayout>
</template>

<script>
    import MainLayout from '../layouts/Main.vue'
    export default {
        name: 'NotFound',
        components: {
            MainLayout
        }, computed: {
            currentRoute() {
                return window.location.pathname;
            },
            rootUrl() {
                return window.location.hostname;
            }
        }
    }
</script>

<style scoped>

</style>