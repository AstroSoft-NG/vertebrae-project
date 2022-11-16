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
