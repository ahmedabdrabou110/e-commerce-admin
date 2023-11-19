"use client";

import ListRating from "@/components/products/ListRating";
import ProductDetails from "@/components/products/ProductDetails";
import { Paramsprops } from "@/utils/interfaces";
import { products } from "@/utils/products";

const Product = ({ params }: { params: Paramsprops }) => {
  const product = products.find((item) => item.id === params.productId);
  return (
    <div className="p-8">
      <ProductDetails product={product} />
      <div className="mt-20 flex flex-col gap-4">
        <div>Add List</div>
        <ListRating product={product} />
      </div>
    </div>
  );
};

export default Product;
