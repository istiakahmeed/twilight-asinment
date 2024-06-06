"use client";
import { ProductCardProps } from "@/types/type";
import Link from "next/link";
import { useState } from "react";

const ProductCard: React.FC<ProductCardProps> = ({
  ui,
  id,
  title,
  imageSrc,
  hoverImageSrc,
  label,
  price,
  old_price,
  onCardClick,
  product,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageSrc, setCurrentImageSrc] = useState(imageSrc);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setCurrentImageSrc(hoverImageSrc); // Change to hover image source
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentImageSrc(imageSrc); // Revert to the original image source
  };

  return (
    <>
      <div className="lg:w-[300px] lg:h-[380px] cursor-pointer">
        <div
          className="relative group overflow-hidden rounded-lg lg:h-[320px] cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link href={`/details/${ui}`}>
            <img
              src={currentImageSrc}
              alt="Clothing"
              width={300}
              height={300}
              className="object-cover w-full aspect-square lg:h-full group-hover:scale-[1.2] transition-transform duration-500"
            />
          </Link>
          <div className="absolute top-4 left-4 bg-neutral-400 text-white px-2 py-1 rounded-md text-sm">
            {label}
          </div>
          <button
            className="absolute bottom-4 left-1/2 transform w-4/5 -translate-x-1/2 bg-white text-black border border-neutral-500 rounded-md text-sm p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={() => onCardClick(product)}
          >
            Shop Now
          </button>
        </div>
        <div className="pt-2">
          <Link href={`/details/${ui}`}>
            <h3 className="text-[16px] font-thin text-black cursor-pointer">
              {title}
            </h3>
          </Link>

          <span className="flex gap-x-4 pt-1">
            <span className="text-black font-bold">৳ {price}</span>
            <span className="font-bold text-red-500 line-through">
              ৳ {old_price + 30}
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
