import { RouteRecordRaw } from 'vue-router';
import { HOME } from '../name';

const homeRoute: RouteRecordRaw = {
  path: '/',
  name: HOME,
  component: () => import('src/pages/Home/HomePage.vue'),
};
export default homeRoute;
