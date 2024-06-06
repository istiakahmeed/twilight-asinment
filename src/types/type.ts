export interface ProductCardProps {
  ui: number;
  id: number;
  title: string;
  imageSrc: string;
  hoverImageSrc: string;
  label: string;
  price: number;
  old_price: number;
  product: Product;
  onCardClick: (product: Product) => void;
  className?: string;
}

export interface Product {
  ui: number;
  id: number;
  title: string;
  imageSrc: string;
  hoverImageSrc: string;
  label: string;
  price: number;
  old_price: number;
}

export interface ProductCategory {
  latestProducts: Product[];
  sculpture: Product[];
  furniture: Product[];
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  imageSrc: string;
  quantity: number;
}
