import AboutUs from "../views/AboutUs.vue";
import HomePage from "../views/HomePage.vue";
import { RouteRecordRaw } from 'vue-router';
import Channels from "../views/Channels.vue";

const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
        path: '/about-us',
        name: 'AboutUs',
        component: AboutUs
    },
    {
        path: '/channels',
        name: 'Channels',
        component: Channels
    }
];

export default routes;
