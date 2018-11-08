const Home = () => import (/* webpackChunkName: "home" */ '@/page/home/Home');

const homeRoute = {
    path: '/home',
    name: 'home',
    component: Home,
};

export default [ homeRoute ]