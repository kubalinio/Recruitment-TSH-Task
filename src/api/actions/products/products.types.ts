export type Product = {
  name: string;
  description: string;
  rating: 4;
  image: string;
  promo: boolean;
  active: boolean;
  id: string;
};

export type ProductsMeta = {
  currentPage: number;
  itemCount: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
};

export type GetProductsResponse = {
  items: Product[];
  meta: ProductsMeta;
};

export type GetProductsListArgs = {
  page?: string;
  promo?: string;
  active?: string;
  search?: string;
  limit?: number;
};
