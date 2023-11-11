export type Product = {
  name: string;
  description: string;
  rating: 4;
  image: string;
  promo: boolean;
  active: boolean;
  id: string;
};

export type ProductMeta = {
  currentPage: number;
  itemCount: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
};

export type GetProductsResponse = {
  items: Product[];
  meta: ProductMeta;
};

export type GetProductsListArgs = {
  page?: string;
};
