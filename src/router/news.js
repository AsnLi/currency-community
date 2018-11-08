const News = () => import (/* webpackChunkName: "news" */ '@/page/news/News');
const NewsDetail = () => import (/* webpackChunkName: "news" */ '@/page/news/newsDetail');

const news = {
    path: '/news',
    name: 'news',
    component: News,
};

const newsDetail = {
    path: '/newsDetail',
    name: 'newsDetail',
    component: NewsDetail,
    meta: {
        activeItem: 'news'
    }
};

export default [news, newsDetail]