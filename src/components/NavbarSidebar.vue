<template>
    <ul class="sidenav" id="mobile-navbar">
        <!-- Create Navigation links for side navbar -->
        <router-link v-for="page in navRoutes" :key="page.path" :to="page.path"
                     v-slot="{ href, route, navigate, isActive, isExactActive }">
            <li :class="[isExactActive && 'active']">
                <a :href="href" @click="navigate" tabindex="0">{{page.name}}</a>
            </li>
        </router-link>
    </ul>
</template>

<script>
    export default {
        name: "NavbarSidebar",
        props: {
            navRoutes: {
                type: Array,
                required: true
            }
        }
    };
</script>

<style scoped>

</style>