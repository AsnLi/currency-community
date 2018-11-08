const Circle = () => import (/* webpackChunkName: "circle" */ '@/page/circle/Circle');

const circleRoute = {
    path: '/circle',
    name: 'circle',
    component: Circle,
};

export default [ circleRoute ]