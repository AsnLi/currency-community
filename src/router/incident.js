const Incident = () => import (/* webpackChunkName: "incident" */ '@/page/incident/Incident');

const IncidentRoute = {
    path: '/incident',
    name: 'incident',
    component: Incident,
};

export default [ IncidentRoute ]