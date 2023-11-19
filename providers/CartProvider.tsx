import { CartContextProvider } from "@/hooks/useCart";
import { ChildrenProps } from "@/utils/interfaces";
import React from "react";

const CartProvider: React.FC<ChildrenProps> = ({ children }) => {
  return <CartContextProvider>{children}</CartContextProvider>;
};

export default CartProvider;
