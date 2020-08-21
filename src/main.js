import Vue from 'vue';
import App from './App.vue';
import Routes from "@/routes.js";
import VueRouter from 'vue-router';
import VueAnnouncer from 'vue-announcer';

// Add router middleware
Vue.use(VueRouter);

// Create router using navRoutes file
const router = new VueRouter({
    routes: Routes,
    mode: 'history',
    linkExactActiveClass: 'active',
    base: Vue.config.publicPath
});

// Add announcer middleware for screen reader accessibility on route change
Vue.use(VueAnnouncer, {
    complimentRoute: 'has loaded'
}, router);

// Hide production warning in console
Vue.config.productionTip = false;

// List of navRoutes for the navbar and their readable name
const pages = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Projects',
        path: '/projects'
    }
];

// Instantiate Vue root with the title and navbar navRoutes
const app = new Vue({
    data: {
        title: 'Michael Munoz',
        navRoutes: pages,
        nodeEnv: process.env.NODE_ENV
    },
    template: '<app :title="title" :navRoutes="navRoutes"/>',
    components: {
        'app': App
    },
    router: router
}).$mount('#app');

// Update the current route on the popstate event
window.addEventListener('popstate', () => {
    app.currentRoute = window.location.pathname;
});