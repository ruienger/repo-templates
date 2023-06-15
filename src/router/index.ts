import { createRouter, createWebHashHistory } from 'vue-router';
import home from './routes/home';
import notfound from './routes/notfound';
import { useAuthGuard } from './guards/auth';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [home, notfound],
});

useAuthGuard(router);

export default router;
