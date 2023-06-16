/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosRequestConfig, Axios } from 'axios';

export type HTTPMiddleware<T = any, R = any> = (this: HTTPInterface, config: AxiosRequestConfig, next: () => Promise<T>) => Promise<R>;

export interface HTTPInterface extends Axios {
  readonly middlewares: HTTPMiddleware[];

  /**
   * 使用中间件，返回该中间件的索引
   */
  use(middleware: HTTPMiddleware): number;

  /**
   * 丢弃索引指向的中间件，返回该中间件
   */
  drop(index: number): HTTPMiddleware;

  /**
   * 发送请求，先经由各个中间件处理，如果需要则调用`Axios.request`
   */
  request<R = any, D = any>(config: AxiosRequestConfig<D>): Promise<R>;

  /**
   * 发送`get`请求
   */
  get<R = any, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;

  /**
   * 发送`delete`请求
   */
  delete<R = any, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;

  /**
   * 发送`head`请求
   */
  head<R = any, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;

  /**
   * 发送`options`请求
   */
  options<R = any, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;

  /**
   * 发送`post`请求
   */
  post<R = any, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;

  /**
   * 发送`put`请求
   */
  put<R = any, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;

  /**
   * 发送`patch`请求
   */
  patch<R = any, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;

  /**
   * 发送`post`请求，但`Content-Type`的值为`multipart/form-data`
   */
  postForm<R = any, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;

  /**
   * 发送`patch`请求，但`Content-Type`的值为`multipart/form-data`
   */
  patchForm<R = any, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;

  /**
   * 发送`put`请求，但`Content-Type`的值为`multipart/form-data`
   */
  putForm<R = any, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
}
