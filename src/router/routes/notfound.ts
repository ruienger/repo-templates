import { RouteRecordRaw } from 'vue-router';

const notfoundRoute: RouteRecordRaw = {
  path: '/:path(.*)*',
  component: () => import('../../pages/404/NotFound.vue'),
};
export default notfoundRoute;
