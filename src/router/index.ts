import { useAuthGuard } from './guards/auth';
import { createRouter, createWebHashHistory } from 'vue-router';
import home from './routes/home';
import notfound from './routes/notfound';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [home, notfound],
});

useAuthGuard(router);

export default router;
