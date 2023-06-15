import { RouteRecordRaw } from 'vue-router';

const homeRoute: RouteRecordRaw = {
  path: '/',
  component: () => import('src/pages/Home/HomePage.vue'),
};
export default homeRoute;
