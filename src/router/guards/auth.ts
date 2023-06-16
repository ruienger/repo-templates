import type { Router } from 'vue-router';
import useStore from 'src/store/auth';

export function useAuthGuard(router: Router) {
  router.beforeResolve(() => {
    const store = useStore();
    if (!store.hasAccess) {
      store.logout();
      return false;
    }
  });

  return router;
}
