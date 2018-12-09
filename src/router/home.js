const Home = () => import (/* webpackChunkName: "home" */ '@/page/home/Home');
const MyCount = () => import (/* webpackChunkName: "home" */ '@/page/home/MyCount');
const Message = () => import (/* webpackChunkName: "home" */ '@/page/home/Message');
const PostContent = () => import (/* webpackChunkName: "home" */ '@/page/home/PostContent');
const UpdateCount = () => import (/* webpackChunkName: "home" */ '@/page/home/updateCount/baseLayout');

const homeRoute = {
    path: '/home',
    name: 'home',
    component: Home,
};

const MyCountRoute = {
    path: '/mycount',
    name: 'mycount',
    component: MyCount,
};

const PostContentRoute = {
    path: '/postcontent',
    name: 'postcontent',
    component: PostContent,
};

const UpdateCountRoute = {
    path: '/updatecount',
    name: 'updatecount',
    component: UpdateCount,
};

const MessageRoute = {
    path: '/message',
    name: 'message',
    component: Message,
};


export default [ homeRoute, MyCountRoute, MessageRoute, UpdateCountRoute, PostContentRoute ]