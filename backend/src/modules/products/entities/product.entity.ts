export class Product {
  id: string;
  name: string;
  slug: string;
  description?: string;
  price: number;
  stock: number;
  images: string[];
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;
}
