const News = () => import (/* webpackChunkName: "news" */ '@/page/news/News');

const news = {
    path: '/news',
    name: 'News',
    component: News,
};

export default news