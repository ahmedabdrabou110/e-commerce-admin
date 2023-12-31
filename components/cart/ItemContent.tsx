"use client";
import { formatPrice } from "@/functions/formatPrice";
import truncateText from "@/functions/truncateText";
import { ItemContentProps } from "@/utils/interfaces";
import Link from "next/link";
import Button from "../ui/Button";
import Image from "next/image";
import SetQuantity from "../products/SetQuantity";
import { useCart } from "@/hooks/useCart";

const ItemContent = ({ item }: ItemContentProps) => {
  const {
    handleremoveProductFromCart,
    handleProductQtyIncrease,
    handleProductQtyDecrease,
  } = useCart();
  return (
    <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border-t-[1.5px] border-slate-200 py-4 items-center ">
      <div className="col-span-2 justify-self-start flex gap-2 md:gap-4">
        <Link href={`/product/${item?.id}`}>
          <div className="relative w-[70px] aspect-square">
            <Image
              src={item.selectedimg.image}
              alt={item.name}
              fill
              className="object-contain"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-between">
          <Link href={`/product/${item.id}`}>{truncateText(item.name)}</Link>
          <div>{item.selectedimg.color}</div>
          <div className="w-[70px]">
            <Button
              outline
              remove
              label="remove"
              onClick={() => handleremoveProductFromCart(item)}
              small
            />
          </div>
        </div>
      </div>
      <div className="justify-self-center font-medium">
        {formatPrice(item.price)}
      </div>
      <div className="justify-self-center">
        <SetQuantity
          cartCounter={true}
          cartProduct={item}
          handleQuantityIncrease={() => handleProductQtyIncrease(item)}
          handleQuantityDecrease={() => handleProductQtyDecrease(item)}
        />
      </div>
      <div className="justify-self-end font-semibold">
        {formatPrice(item.price * item.quantity)}
      </div>
    </div>
  );
};

export default ItemContent;
