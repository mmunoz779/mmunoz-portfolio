<template>
    <MainLayout>
        <app-summary/>
    </MainLayout>
</template>

<script>
    import Summary from "@/components/Summary.vue";
    import MainLayout from "@/layouts/Main.vue";

    export default {
        name: "Home",
        components: {
            MainLayout,
            'app-summary': Summary
        }
    }
</script>

<style scoped>

</style>