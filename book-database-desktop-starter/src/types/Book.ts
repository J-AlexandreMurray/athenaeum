
export interface Book {
  id: string;
  title: string;
  author: string;
  publisher: string;
  price: number;
  stock: number;
  rating?: number;
  notes?: string;
}
