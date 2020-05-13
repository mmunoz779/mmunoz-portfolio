import Home from '@/pages/Home';
import About from '@/pages/About';
import NotFound from "@/pages/NotFound";
import Projects from "@/pages/Projects";

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/projects',
        component: Projects
    },
    {
        path: '*',
        component: NotFound
    }
]