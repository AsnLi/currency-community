const Quotes = () => import (/* webpackChunkName: "quotes" */ '@/page/quotes/Quotes');

const quotesRoute = {
    path: '/quotes',
    name: 'quotes',
    component: Quotes,
};

export default [ quotesRoute ]