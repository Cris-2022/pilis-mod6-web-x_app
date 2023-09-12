export interface ProductFormData {
  name: string;
  price: number;
  stock: number;
  category: string;
  product: File;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  image: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}
