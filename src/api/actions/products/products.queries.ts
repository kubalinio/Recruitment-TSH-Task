import { AxiosInstance } from 'axios';
import { stringify } from 'qs';

import {
  GetProductsResponse,
  GetProductsListArgs,
  // QUERY_TYPE_IMPORTS
} from './products.types';

export const productsQueries = {
  getProductsList:
    (client: AxiosInstance) =>
    async ({ page, active, promo, search }: GetProductsListArgs) => {
      const queryParams = stringify({ page, active, promo, limit: 8, search }, { addQueryPrefix: true });
      return (await client.get<GetProductsResponse>(`/products${queryParams}`)).data;
      // return (await client.get<GetProductsResponse>(`/products`)).data;
    },
  // QUERY_FUNCTIONS_SETUP
};
