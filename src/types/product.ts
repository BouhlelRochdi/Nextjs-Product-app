export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  thumbnail: string;
  image: string;
}
export interface ProductContextType {
  products: Product[];
  filteredProducts: Product[];
  isLoading: boolean;
  error: string | null;
  filterByRating: (minRating: number) => void;
  minRating: number;
}
