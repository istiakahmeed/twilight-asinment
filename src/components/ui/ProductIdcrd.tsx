"use client";
import { ProductIdcardProps } from "@/types/type";
import Link from "next/link";
import { useState } from "react";

const ProductIdcard: React.FC<ProductIdcardProps> = ({
  ui,
  id,
  title,
  imageSrc,
  hoverImageSrc,
  label,
  price,
  old_price,
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
      <div className="lg:w-[300px] lg:h-[380px] cursor-pointer ">
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
              ৳ {old_price}
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default ProductIdcard;
