import { CreateProductRequest } from "../dto/createProduct";

export interface Product extends CreateProductRequest {
  id: string;
}
