import about from "../components/about";
import home from "../components/home";
import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

const routes = [
    {
        name : 'Home',
        path: '/',
        component: home,

    },
    {
        name : 'About',
        path: '/about',
        component: about,

    },
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
