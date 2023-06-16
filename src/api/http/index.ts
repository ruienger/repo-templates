import type { HTTPInterface } from '../types/http';
import HTTP from './http';
import authHandler from './middlewares/authHandler';
import errorHandler from './middlewares/errorHandler';
import requestThrottle from './middlewares/requestThrottle';
import responseHandler from './middlewares/responseHandler.ts';

const http: HTTPInterface = new HTTP({
  baseURL: `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_NAMESPACE}`,
  timeout: 5000,
});

http.use(requestThrottle);
http.use(errorHandler);
http.use(authHandler);
http.use(responseHandler);

export default http;
