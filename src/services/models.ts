export interface ProductType {
  id: number;
  image: string;
  name: string;
  price: number;
}

export interface FormValuesType {
  [key: string]: any;
}

export interface ButtonProps {
  text: string;
}

export interface MenuProps {
  pageTitle: string;
}

export interface AppContextType {
  count: number;
  handleAddCount: () => void;
  isCartOpen: boolean;
  cartItems: ProductType[];
  handleAddToCart: (workshop: ProductType) => void;
  handleOpenCart: () => void;
}
export interface ProviderType {
  children: React.ReactNode;
}
