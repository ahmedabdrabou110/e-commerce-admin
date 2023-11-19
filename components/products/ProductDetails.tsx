"use client";
import { productRating } from "@/functions/productRating";
import {
  CartProductProps,
  ProductProps,
  SelectedImgProps,
} from "@/utils/interfaces";
import { Rating } from "@mui/material";
import { useCallback, useState, useEffect } from "react";
import SetColor from "./SetColor";
import SetQuantity from "./SetQuantity";
import Button from "@/components/ui/Button";
import ProductImages from "./ProductImages";
import { useCart } from "@/hooks/useCart";
import { MdCheckCircle } from "react-icons/md";
import { useRouter } from "next/navigation";

const Horizontal = () => {
  return <hr className="w-[30%] my-2" />;
};

const ProductDetails = ({ product }: ProductProps) => {
  const { handleAddProductToCart, cartProducts } = useCart();
  const [isExistingInCart, setIsExistingInCart] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    setIsExistingInCart(false);
    if (cartProducts) {
      const existingProduct = cartProducts?.findIndex(
        (item) => item.id === product.id
      );

      if (existingProduct > -1) {
        setIsExistingInCart(true);
      } else {
        setIsExistingInCart(false);
      }
    }
  }, [cartProducts]);
  const [cartProduct, setCartProduct] = useState<CartProductProps>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    quantity: 1,
    price: product.price,
    selectedimg: { ...product.images[0] },
  });

  const handleColorSelect = useCallback(
    (value: SelectedImgProps) => {
      setCartProduct((prev) => {
        return { ...prev, selectedimg: value };
      });
    },
    [cartProduct.selectedimg]
  );
  console.log(cartProducts);
  const handleQuantityDecrease = useCallback(() => {
    if (cartProduct.quantity === 1) {
      return;
    }

    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity-- };
    });
  }, [cartProduct]);

  const handleQuantityIncrease = useCallback(() => {
    if (cartProduct.quantity === 99) {
      return;
    }

    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity++ };
    });
  }, [cartProduct]);

  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
      <ProductImages
        cartProduct={cartProduct}
        product={product}
        handleColorSelected={handleColorSelect}
      />

      <div className="flex flex-col gap-1 text-slate-500 text-sm">
        <h2 className="text-3xl font-medium text-slate-900 ">{product.name}</h2>
        <div className="flex items-center gap-3">
          <Rating value={productRating(product)} readOnly />
          <div>{product.reviews.length} reviews </div>
        </div>
        <Horizontal />
        <div className="text-justify">{product.description}</div>
        <Horizontal />
        <div>
          <span className="font-semibold">CATEGORY : </span>
          <span>{product.category}</span>
        </div>
        <div>
          <span className="font-semibold">BRAND : </span>
          <span>{product.brand}</span>
        </div>
        <div
          className={`${
            product.inStock ? "text-teal-400" : "text-rose-400"
          } font-semibold`}
        >
          {product.inStock ? "In stock" : "out stock"}
        </div>
        <Horizontal />
        {isExistingInCart ? (
          <>
            <p className="mb-2 flex items-center text-slate-500">
              <MdCheckCircle className="text-teal-500 mr-1" size={20} />
              <span>Product added to cart</span>
            </p>
            <div className="max-w-[300px]">
              <Button
                label="View Cart"
                onClick={() => {
                  router.push("/cart");
                }}
                outline
              />
            </div>
          </>
        ) : (
          <>
            <SetColor
              cartProduct={cartProduct}
              images={product.images}
              handleColorSelect={handleColorSelect}
            />
            <Horizontal />
            <SetQuantity
              cartProduct={cartProduct}
              handleQuantityDecrease={handleQuantityDecrease}
              handleQuantityIncrease={handleQuantityIncrease}
            />
            <Horizontal />
            <div className="max-w-[300px]">
              <Button
                label="Add To Cart"
                onClick={() => handleAddProductToCart(cartProduct)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
