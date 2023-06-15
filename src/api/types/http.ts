/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosRequestConfig, AxiosResponse, Axios } from 'axios';

export type HTTPMiddleware<T = any, R = any, C extends HTTPInterface = HTTPInterface> = (
  this: C,
  config: AxiosRequestConfig,
  next: () => Promise<T>
) => Promise<R>;

export interface HTTPInterface<DefR = AxiosResponse, DefD = any> extends Axios {
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
  request<R = DefR, D = DefD>(config: AxiosRequestConfig<D>): Promise<R>;

  /**
   * 发送`get`请求
   */
  get<R = DefR, D = DefD>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;

  /**
   * 发送`delete`请求
   */
  delete<R = DefR, D = DefD>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;

  /**
   * 发送`head`请求
   */
  head<R = DefR, D = DefD>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;

  /**
   * 发送`options`请求
   */
  options<R = DefR, D = DefD>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;

  /**
   * 发送`post`请求
   */
  post<R = DefR, D = DefD>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;

  /**
   * 发送`put`请求
   */
  put<R = DefR, D = DefD>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;

  /**
   * 发送`patch`请求
   */
  patch<R = DefR, D = DefD>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;

  /**
   * 发送`post`请求，但`Content-Type`的值为`multipart/form-data`
   */
  postForm<R = DefR, D = DefD>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;

  /**
   * 发送`patch`请求，但`Content-Type`的值为`multipart/form-data`
   */
  patchForm<R = DefR, D = DefD>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;

  /**
   * 发送`put`请求，但`Content-Type`的值为`multipart/form-data`
   */
  putForm<R = DefR, D = DefD>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
}
