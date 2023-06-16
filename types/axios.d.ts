import type { AxiosDefaults, AxiosRequestConfig } from 'axios';

/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'axios' {
  interface AxiosStatic {
    mergeConfig<D>(config1: mergeableConfig<D>, config2?: mergeableConfig<D>): AxiosRequestConfig<D>;
  }
}

export type mergeableConfig<D> = AxiosRequestConfig<D> | AxiosDefaults<D>;
