import type { AxiosResponse } from 'axios';
import type { HTTPMiddleware } from 'src/api/types/http';

/**
 * 请求数据转换器中间件
 *
 * 负责转换响应成功的数据
 */
const responseHandler: HTTPMiddleware = function (_config, next) {
  return next().then((res: AxiosResponse) => {
    return res.data;
  });
};

export default responseHandler;
