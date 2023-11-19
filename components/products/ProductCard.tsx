"use client";
import { formatPrice } from "@/functions/formatPrice";
import truncateText from "@/functions/truncateText";
import { ProductDataProps } from "@/utils/interfaces";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
const ProductCard = ({ data }: ProductDataProps) => {
  const productRating =
    data?.reviews.reduce((acc: number, item: any) => acc + item.rating, 0) /
    data?.reviews.length;
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/products/${data?.id}`)}
      className="col-span-1 cursor-pointer border-[1.3px] border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-sm text-center"
    >
      <div className="flex flex-col items-center w-full gap-1">
        <div className="aspect-square overflow-hidden relative w-full ">
          <Image
            src={data?.images[0]?.image}
            fill
            className="w-full h-full object-contain"
            alt={data.name}
          />
        </div>
        <div className="mt-4">{truncateText(data.name)}</div>
        <div>
          <Rating value={productRating} readOnly />
        </div>
        <div>{data?.reviews?.length} reviews</div>
        <div className="font-semibold">{formatPrice(data?.price)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
