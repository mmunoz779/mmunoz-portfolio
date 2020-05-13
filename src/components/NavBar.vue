<template>
    <div>
        <nav>
            <div class="nav-wrapper">
                <router-link to="/" class="brand-logo right">{{title}}</router-link>
                <router-link to="#" data-target="mobile-navbar" class="sidenav-trigger"><i class="tiny material-icons">menu</i></router-link>
                <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li><router-link class="active" to="/">Home</router-link></li>
                    <li><router-link to="/projects">Projects</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                </ul>
            </div>
        </nav>
        <ul class="sidenav" id="mobile-navbar">
            <li><router-link class="active" to="/">Home</router-link></li>
            <li><router-link to="/projects">Projects</router-link></li>
            <li><router-link to="/about">About</router-link></li>
        </ul>
    </div>
</template>

<script>
    import 'materialize-css';

    document.addEventListener('DOMContentLoaded', function() {
        let elem = document.querySelectorAll('.sidenav');
        // eslint-disable-next-line no-undef,no-unused-vars
        let instances = M.Sidenav.init(elem);
    });

    export default {
        name: 'NavBar',
        props: {
            title: String,
            routes: {
                type: Array,
                required: false
            }
        }
    }
</script>

<style scoped lang="sass">

</style>