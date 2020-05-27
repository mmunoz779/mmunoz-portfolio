<template>
    <div>
        <nav>
            <div class="nav-wrapper">
                <router-link to="/" class="brand-logo right" tabindex="2"><a>{{title}}</a></router-link>
                <router-link to="" data-target="mobile-navbar" class="sidenav-trigger" tabindex="2">
                    <i class="tiny material-icons">menu</i>
                </router-link>
                <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <router-link v-for="page in navRoutes" :key="page.path" :to="page.path"
                                 v-slot="{ href, route, navigate, isActive, isExactActive }">
                        <li :class="[isExactActive && 'active']">
                            <a :href="href" @click="navigate" tabindex="1">{{page.name}}</a>
                        </li>
                    </router-link>
                </ul>
            </div>
        </nav>
        <app-nav-sidebar :nav-routes="navRoutes"></app-nav-sidebar>
    </div>
</template>

<script>
    import 'materialize-css';
    import NavbarSidebar from '@/components/NavbarSidebar';

    document.addEventListener('DOMContentLoaded', function () {
        let elem = document.querySelectorAll('.sidenav');
        // eslint-disable-next-line no-undef,no-unused-vars
        let instances = M.Sidenav.init(elem);
    });

    export default {
        name: 'Navbar',
        components: {
            'app-nav-sidebar': NavbarSidebar
        },
        props: {
            title: String,
            navRoutes: {
                type: Array,
                required: false
            }
        }
    };
</script>

<style scoped lang="sass">

</style>