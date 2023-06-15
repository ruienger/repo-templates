import requestThrottle from './middlewares/requestThrottle';
import errorHandler from './middlewares/errorHandler';
import authHandler from './middlewares/authHandler';
import HTTP from '.';

const inst = new HTTP({
  baseURL: `${import.meta.env.VITE_BASE_URL}xboot`,
  headers: {
    ['Content-Type']: 'application/x-www-form-urlencoded; charset=UTF-8',
  },
  timeout: 5000,
});

inst.use(requestThrottle);
inst.use(errorHandler);
inst.use(authHandler);

export default inst;
