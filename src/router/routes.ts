import AboutUs from "../views/AboutUs.vue";
import HomePage from "../views/HomePage.vue";
import { RouteRecordRaw } from 'vue-router';

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
    }
];

export default routes;
