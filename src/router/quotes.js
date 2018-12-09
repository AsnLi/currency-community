const Quotes = () => import (/* webpackChunkName: "quotes" */ '@/page/quotes/Quotes');
const Digiccy = () => import (/* webpackChunkName: "quotes" */ '@/page/quotes/Digiccy');

const quotesRoute = {
    path: '/quotes',
    name: 'quotes',
    component: Quotes,
};

const DigiccyRoute = {
    path: '/digiccy',
    name: 'digiccy',
    component: Digiccy,
    meta: {
        activeItem: 'quotes'
    }
};

export default [ quotesRoute, DigiccyRoute ]