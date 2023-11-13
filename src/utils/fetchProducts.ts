import { ProductDTO } from "~/@types/DTOs/ProductDTO";
import { fetchWrapper } from "./fetchWrapper";

export interface ProductsResponse {
  products: Array<Omit<ProductDTO, "price"> & { price: string }>;
  count: number;
}

export function fetchProducts(perPage: number, options?: RequestInit) {
  const apiUrl = `https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=${perPage}&sortBy=name&orderBy=ASC`;
  
  return fetchWrapper<ProductsResponse>(apiUrl, options);
}