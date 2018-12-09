const knowledgeMap = () => import (/* webpackChunkName: "tool" */ '@/page/tool/knowledgeMap');
const recheck = () => import (/* webpackChunkName: "tool" */ '@/page/tool/recheck');

const knowledgeMapRoute = {
    path: '/knowledgemap',
    name: 'knowledgemap',
    component: knowledgeMap,
};

const recheckRoute = {
    path: '/recheck',
    name: 'recheck',
    component: recheck,
};

export default [ knowledgeMapRoute,  recheckRoute]