export type APISkus = {
  id: number;
  name: string;
  url: string;
  image_url: string;
  price: number;
  rating: number;
  reviews_count: number;
};

export type APICategories = {
  id: number;
  name: string;
  url: string;
  skus: APISkus[];
};

export type APIResult = {
  categories?: APICategories[];
};
