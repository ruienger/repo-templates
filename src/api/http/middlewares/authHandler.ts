import type { AxiosError } from 'axios';
import type { HTTPMiddleware } from 'src/api/types/http';
import useStore from 'src/store/auth';

/**
 * 鉴权处理器中间件
 *
 * 负责重定向状态码为`401`的响应
 *
 * 负责自动重置`accessToken`
 *
 * 负责自动添加`accessToken`头
 */
const authHandler: HTTPMiddleware = function (config, next) {
  const store = useStore();
  if (config.headers && store.hasAccess) {
    config.headers.accessToken = store.accessToken;
  }
  return next().catch((e: AxiosError) => {
    if (e.code === '401') {
      store.logout();
    }

    throw e;
  });
};

export default authHandler;
