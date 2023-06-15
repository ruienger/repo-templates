import type { AxiosRequestConfig } from 'axios';
import type { HTTPMiddleware } from 'src/api/types/http';

const requestsPool = new Map();

function getRequestKey({ method = 'get', url, data, params }: AxiosRequestConfig) {
  return `${method}:${url}_${JSON.stringify(params)}_${JSON.stringify(data)}`;
}

/**
 * 请求节流器中间件，推荐作为第一个中间件使用
 *
 * 负责将重复的请求合并为一个，从一个请求发出后到请求响应前，如果有`method`、`url`、`params`、`data`都相同的请求发出则视为重复请求
 */
const requestThrottle: HTTPMiddleware = function (config, next) {
  const key = getRequestKey(config);
  if (requestsPool.has(key)) {
    return requestsPool.get(key);
  }

  const request = next().finally(() => {
    requestsPool.delete(key);
  });

  requestsPool.set(key, request);
  return request;
};

export default requestThrottle;
