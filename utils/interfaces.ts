import { IconType } from "react-icons";

export interface ChildrenProps {
  children: React.ReactNode;
}

export interface ProductDataProps {
  data: any;
}

export interface Paramsprops {
  productId?: string;
}

export interface ProductProps {
  product: any;
}

export interface CartProductProps {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  quantity: number;
  price: number;
  selectedimg: SelectedImgProps;
}

export interface SelectedImgProps {
  color: string;
  colorCode: string;
  image: string;
}

export interface SetColorProps {
  images: SelectedImgProps[];
  cartProduct: CartProductProps;
  handleColorSelect: (value: SelectedImgProps) => void;
}

export interface SetQuantityProps {
  cartCounter?: boolean;
  cartProduct: CartProductProps;
  handleQuantityIncrease: () => void;
  handleQuantityDecrease: () => void;
}

export interface ButtonProps {
  label: string;
  disabled?: boolean;
  outline?: boolean;
  remove?: boolean;
  small?: boolean;
  custom?: string;
  icon?: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface HeadingProps {
  title: string;
  center?: boolean;
}

export interface AvatarProps {
  src?: string | null | undefined;
}

export interface CartContextProps {
  cartTotalQty: number;
  cartProducts: CartProductProps[] | null;
  handleAddProductToCart: (cartProduct: CartProductProps) => void;
  handleremoveProductFromCart: (cartProduct: CartProductProps) => void;
  handleProductQtyIncrease: (cartProduct: CartProductProps) => void;
  handleProductQtyDecrease: (cartProduct: CartProductProps) => void;
  handleClearCart: () => void;
  cartTotalPrice: number;
}

export interface Props {
  [propName: string]: any;
}

export interface ItemContentProps {
  item: CartProductProps;
}
