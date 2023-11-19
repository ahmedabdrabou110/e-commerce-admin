import { CartProductProps, SelectedImgProps } from "@/utils/interfaces";
import Image from "next/image";

interface ProductImageProps {
  cartProduct: CartProductProps;
  product: any;
  handleColorSelected: (value: SelectedImgProps) => void;
}

const ProductImages: React.FC<ProductImageProps> = ({
  cartProduct,
  product,
  handleColorSelected,
}) => {
  return (
    <div
      className="
      grid
      grid-cols-6
      gap-2
      h-full
      max-h-[500px]
      min-h-[300px]
      sm:min-h-[400px] 
    "
    >
      <div
        className="
        flex
        flex-col
        items-center
        justify-center
        gap-4 
        cursor-pointer
        border
        h-full
        max-h-[500px]
        min-h-[300px]
        sm:min-h-[400px]
      "
      >
        {product?.images.map((image: SelectedImgProps) => {
          return (
            <div
              key={image.color}
              onClick={() => handleColorSelected(image)}
              className={`relative w-[80%] aspect-square border-teal-300 rounded ${
                cartProduct.selectedimg.color === image.color
                  ? "border-[1.5px]"
                  : "border-none"
              } `}
            >
              <Image
                src={image.image}
                alt={image.color}
                fill
                className="object-contain"
              />
            </div>
          );
        })}
      </div>
      <div className="col-span-5 relative aspect-square">
        <Image
          src={cartProduct.selectedimg.image}
          alt={cartProduct.name}
          fill
          className="max-h-[500px]
        min-h-[300px]
        sm:min-h-[400px] object-contain"
        />
      </div>
    </div>
  );
};

export default ProductImages;
