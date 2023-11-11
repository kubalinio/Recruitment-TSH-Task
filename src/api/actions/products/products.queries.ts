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
    async ({ page = '1' }: GetProductsListArgs) => {
      const queryParams = stringify({ page, limit: 8 }, { addQueryPrefix: true });
      return (await client.get<GetProductsResponse>(`/products${queryParams}`)).data;
      // return (await client.get<GetProductsResponse>(`/products`)).data;
    },
  // QUERY_FUNCTIONS_SETUP
};
