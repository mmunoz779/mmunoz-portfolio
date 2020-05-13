import Vue from 'vue';
import App from './App.vue';
import Routes from "@/routes.js";
import VueRouter from 'vue-router';

// import NotFound from '@/pages/NotFound.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: Routes,
    mode: 'history'
})

Vue.config.productionTip = false;

const pages = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'About',
        link: '/about'
    },
    {
        name: 'Projects',
        link: '/projects'
    }
]

const app = new Vue({
    data: {
        title: 'Michael Munoz',
        routes: pages
    },
    template: '<app :title="title" :routes="routes"/>',
    components: {
        'app': App
    },
    router: router
}).$mount('#app');

window.addEventListener('popstate', () => {
    app.currentRoute = window.location.pathname;
});