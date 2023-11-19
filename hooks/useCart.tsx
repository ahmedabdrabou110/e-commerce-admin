"use client";
import { CartContextProps, CartProductProps, Props } from "@/utils/interfaces";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

export const cartContext = createContext<CartContextProps | null>(null);

export const CartContextProvider = (props: Props) => {
  const [cartTotalQty, setCartTotalQty] = useState<number>(0);
  const [cartTotalPrice, setCartTotalPrice] = useState<number>(0);
  const [cartProducts, setCartProducts] = useState<CartProductProps[] | null>(
    null
  );

  useEffect(() => {
    const cartItems: any = localStorage.getItem("almasaEcommerce");
    const almasaCart: CartProductProps[] | null = JSON.parse(cartItems);
    setCartProducts(almasaCart);
  }, []);

  useEffect(() => {
    const getTotal = () => {
      if (cartProducts) {
        const { total, qty } = cartProducts?.reduce(
          (acc, item) => {
            const itemTotal = item.quantity * item.price;
            acc.total += itemTotal;
            acc.qty += item.quantity;
            return acc;
          },
          {
            total: 0,
            qty: 0,
          }
        );
        setCartTotalQty(qty);
        setCartTotalPrice(total);
      }
    };
    getTotal();
  }, [cartProducts]);

  const handleAddProductToCart = useCallback((product: CartProductProps) => {
    setCartProducts((prev) => {
      let updateCart;

      if (prev) {
        updateCart = [...prev, product];
      } else {
        updateCart = [product];
      }
      toast.success("Product added to Cart successfully");
      localStorage.setItem("almasaEcommerce", JSON.stringify(updateCart));

      return updateCart;
    });
  }, []);

  const handleremoveProductFromCart = (product: CartProductProps) => {
    if (cartProducts) {
      const filteredProducts = cartProducts.filter((item) => {
        return item?.id !== product.id;
      });

      setCartProducts(filteredProducts);
      toast.success("Product removed from Cart successfully");
      localStorage.setItem("almasaEcommerce", JSON.stringify(filteredProducts));
    }
  };

  const handleProductQtyIncrease = useCallback(
    (product: CartProductProps) => {
      let updateCart;
      if (product.quantity === 99) {
        return toast.error("Oops! Maximum reached");
      }
      if (cartProducts) {
        updateCart = [...cartProducts];
        const existingProdudct = cartProducts.findIndex(
          (item) => item.id === product.id
        );
        if (existingProdudct > -1) {
          updateCart[existingProdudct].quantity = ++updateCart[existingProdudct]
            .quantity;
        }
        setCartProducts(updateCart);
        localStorage.setItem("almasaEcommerce", JSON.stringify(updateCart));
      }
    },
    [cartProducts]
  );
  const handleClearCart = useCallback(() => {
    setCartProducts(null);
    setCartTotalQty(0);
    localStorage.setItem("almasaEcommerce", JSON.stringify(null));
  }, [cartProducts]);
  const handleProductQtyDecrease = useCallback(
    (product: CartProductProps) => {
      let updateCart;
      if (product.quantity === 1) {
        return toast.error("Oops! Minimum reached");
      }
      if (cartProducts) {
        updateCart = [...cartProducts];
        const existingProdudct = cartProducts.findIndex(
          (item) => item.id === product.id
        );
        if (existingProdudct > -1) {
          updateCart[existingProdudct].quantity = --updateCart[existingProdudct]
            .quantity;
        }
        setCartProducts(updateCart);
        localStorage.setItem("almasaEcommerce", JSON.stringify(updateCart));
      }
    },
    [cartProducts]
  );

  const value = {
    cartTotalQty,
    cartProducts,
    handleAddProductToCart,
    handleremoveProductFromCart,
    handleProductQtyIncrease,
    handleProductQtyDecrease,
    handleClearCart,
    cartTotalPrice,
  };
  return <cartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(cartContext);
  if (context === null) {
    throw new Error("usecart must be used within a cartContextProvider");
  }
  return context;
};
