import { AxiosRequestHeaders, InternalAxiosRequestConfig } from 'axios';

import { authStorage } from 'app/shared/context/auth/authStorage/AuthStorage';

export const requestSuccessInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  if (authStorage.accessToken) {
    return {
      ...config,
      withCredentials: false,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${authStorage.accessToken}`,
      } as AxiosRequestHeaders,
    };
  }
  return config;
};
