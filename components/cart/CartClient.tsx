"use client";
import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import ItemContent from "./ItemContent";
import { formatPrice } from "@/functions/formatPrice";

const CartClient = () => {
  const { cartProducts, handleClearCart, cartTotalPrice } = useCart();
  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex items-center flex-col">
        <div className="text-3xl">Your cart is empty</div>
        <div className="text-slate-500 flex items-center gap-1 mt-2">
          <Link href="/" className="flex gap-1 items-center">
            <MdArrowBack />
            <span>Start Shopping</span>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Heading title="Shopping Cart" center />
      <div className="grid grid-cols-5 gap-2 items-center pb-2  text-xs mt-8">
        <div className="col-span-2 justify-self-start">PRODUCT</div>
        <div className="justify-self-center">PRICE</div>
        <div className="justify-self-center">QUANTITY</div>
        <div className="justify-self-end">TOTAL</div>
      </div>
      <div>
        {cartProducts.map((item) => (
          <ItemContent item={item} key={item?.id} />
        ))}
      </div>
      <div className="flex justify-between border-t-[1.5px] border-slate-200 py-4 gap-4 ">
        <div className="w-[120px] ml-2 ">
          <Button
            small
            outline
            onClick={() => handleClearCart()}
            label="clear cart"
          />
        </div>
        <div className="text-sm flex flex-col gap-1 items-start">
          <div className="flex justify-between w-full text-base font-bold">
            <span>Total Price</span>
            <span>{formatPrice(cartTotalPrice)}</span>
          </div>
          <p className="text-slate-500">
            Taxes and Shipping calculate at checkout
          </p>
          <Button label="Checkout" onClick={() => {}} />
          <div className="text-slate-500 flex items-center gap-1 mt-2">
            <Link href="/" className="flex gap-1 items-center">
              <MdArrowBack />
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartClient;
