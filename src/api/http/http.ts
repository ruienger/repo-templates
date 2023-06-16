import type { AxiosRequestConfig } from 'axios';
import type { HTTPMiddleware, HTTPInterface } from '../types/http';
import axios, { Axios } from 'axios';

export default class HTTP extends Axios implements HTTPInterface {
  readonly middlewares: HTTPMiddleware[] = [];

  constructor(config: AxiosRequestConfig) {
    super(axios.mergeConfig(axios.defaults, config));
  }

  use(middleware: HTTPMiddleware): number {
    return this.middlewares.push(middleware) - 1;
  }

  drop(index: number): HTTPMiddleware {
    return this.middlewares.splice(index, 1)[0];
  }

  request<R, D>(config: AxiosRequestConfig<D>): Promise<R> {
    const _ = (count: number) => {
      if (count === this.middlewares.length) return super.request(config);
      const fn = this.middlewares[count];
      return new Promise((resolve, reject) => {
        try {
          resolve(fn.call(this, config, () => _(count + 1)));
        } catch (e) {
          reject(e);
        }
      });
    };

    return _(0) as Promise<R>;
  }
}
