import axios from 'axios';

import { requestSuccessInterceptor } from 'app/shared/context/apiClient/apiClientContextController/interceptors/requestInterceptors';
import {
  responseFailureInterceptor,
  responseSuccessInterceptor,
} from 'app/shared/context/apiClient/apiClientContextController/interceptors/responseInterceptors';

export const BASE_URL = import.meta.env.VITE_API_URL;

const axiosClient = axios.create({
  headers: {
    Connection: 'Keep-Alive',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  baseURL: BASE_URL,
  withCredentials: false,
});

axiosClient.interceptors.request.use(requestSuccessInterceptor);
axiosClient.interceptors.response.use(responseSuccessInterceptor, responseFailureInterceptor);

// eslint-disable-next-line import/no-default-export
export default axiosClient;
