"use client";
import { allProduct } from "@/db/data";
import useCart from "@/hooks/useCart";
import { Product } from "@/types/type";
import SectionContainer from "@/utils/SectionContainer";
import {
  ChevronLeft,
  ChevronRight,
  LockKeyhole,
  Minus,
  Plus,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface PageProps {
  params: { productId: number };
}

export default function Page({ params }: PageProps) {
  const productId = Number(params.productId);
  const product = allProduct.find((p) => p.ui === productId) as
    | Product
    | undefined;

  if (!product) {
    return <div>Product not found</div>;
  }

  const [activeImage, setActiveImage] = useState<string>(product.imageSrc);
  const [previousImage, setPreviousImage] = useState<string | null>(null);
  const [direction, setDirection] = useState<string>("");
  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);

  const { addToCart, removeFromCart, getCartQuantity, cart } = useCart();

  const calculatePercentageChange = (oldPrice: number, newPrice: number) => {
    if (oldPrice === 0) return 0;
    const change = ((newPrice - oldPrice) / oldPrice) * 100;
    return parseFloat(change.toFixed(2));
  };

  const percentageChange = calculatePercentageChange(
    product.old_price,
    product.price
  );

  const handleImageClick = (newImageSrc: string) => {
    if (newImageSrc !== activeImage) {
      setDirection(newImageSrc === product.hoverImageSrc ? "right" : "left");
      setPreviousImage(activeImage);
      setActiveImage(newImageSrc);

      setTimeout(() => {
        setPreviousImage(null);
      }, 300);
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
    setIsAddedToCart(true);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
    setIsAddedToCart(false);
  };

  return (
    <SectionContainer>
      <header className="w-full h-16 bg-white sticky top-0 ">
        <div className="flex justify-start items-center h-16 z-50 overflow-hidden">
          <h3 style={{ fontFamily: "none" }}>
            <span className="text-gray-700 hover:text-black cursor-none">
              <Link href="/" className="cursor-none">
                Home
              </Link>
            </span>{" "}
            / <span className="text-gray-700 hover:text-black">Catagories</span>{" "}
            / <span className="text-black  text-lg">{product.title}</span>
          </h3>
        </div>
      </header>
      <div className="flex flex-col md:flex-row lg:flex-row gap-x-5 w-full h-screen-sm pt-10">
        <div className="relative">
          <div className="w-auto h-auto md:w-[614px] md:h-[602px] border-2 border-[#EFEFEF] rounded-lg overflow-hidden relative -z-10">
            {previousImage && (
              <img
                src={previousImage}
                alt="Previous Image"
                className={`w-full h-full object-cover absolute top-0 left-0 transition-transform duration-300 transform ${
                  direction === "left"
                    ? "-translate-x-full"
                    : "translate-x-full"
                }`}
              />
            )}
            <img
              src={activeImage}
              alt="Image"
              className={`w-full h-full object-cover transition-transform duration-300 transform ${
                direction === "left" ? "translate-x-0" : "translate-x-0"
              }`}
            />
          </div>
          <div className="flex w-full h-20 justify-center items-center gap-x-4 pt-2">
            <div
              className={`overflow-hidden w-[75px] h-full -z-20 ${
                activeImage === product?.hoverImageSrc
                  ? "border-4 border-black"
                  : "border-2 border-[#EFEFEF] rounded-sm"
              }`}
              onClick={() => handleImageClick(product?.hoverImageSrc)}
            >
              <img
                src={product?.hoverImageSrc}
                alt="Product Image"
                className="w-full h-full object-cover rounded-sm px-2 cursor-pointer pb-2"
              />
            </div>

            <div
              className={`w-[75px] h-full -z-20 ${
                activeImage === product?.imageSrc
                  ? "border-4 border-black"
                  : "border-2 border-[#EFEFEF] rounded-sm"
              }`}
              onClick={() => handleImageClick(product?.imageSrc)}
            >
              <img
                src={product?.imageSrc}
                alt="Product Image"
                className="w-full h-full object-cover cursor-pointer"
              />
            </div>

            <div
              className="absolute cursor-pointer -z-20 left-4 w-8 h-8 rounded-full bg-[#dddcdc] flex justify-center items-center"
              onClick={() => handleImageClick(product?.hoverImageSrc)}
            >
              <ChevronLeft
                size={24}
                strokeWidth={3}
                className="text-[#B2B2B2]"
              />
            </div>
            <div
              className="absolute cursor-pointer -z-20 right-4 w-8 h-8 rounded-full bg-[#dddcdc] flex justify-center items-center"
              onClick={() => handleImageClick(product?.hoverImageSrc)}
            >
              <ChevronRight
                size={24}
                strokeWidth={3}
                className="text-[#B2B2B2]"
              />
            </div>
          </div>
        </div>
        <div className="w-auto h-auto md:w-full md:h-full">
          <div
            className="flex flex-col items-start py-5 md:pl-6 pt-8"
            style={{ fontFamily: "none" }}
          >
            <h1 className="text-[20px] text-black font-semibold">
              {product?.title}
            </h1>
            <p className="text-green-600 text-[16px] md:text-[24px] pt-10">
              <span className="md:text-4xl text-black pr-2 font-normal">
                ৳{product?.price}
              </span>
              <span className="line-through pr-2 text-neutral-600">
                ৳{product?.old_price}
              </span>
              <span className="pl-2">SAVE {percentageChange}</span>%
            </p>
            <p className="pt-8">
              Availability{" "}
              <span className="text-red-800 uppercase">:OUT OF STOCK</span>
            </p>
            <h3 className="pt-2 flex justify-between items-center gap-x-12">
              <span>OTY</span>
              <span className="text-sm text-red-600">: out of Stock</span>
            </h3>
            <div className="pt-8">
              <p className="text-lg">Select Color *</p>
              <div className="flex  gap-x-2 pt-2">
                <div
                  className="w-full h-10 bg-[#4A90E2] pt-1 rounded-md"
                  onClick={() => handleImageClick(product?.imageSrc)}
                ></div>
                <div
                  className="w-full h-10 bg-[#FACD95] pt-1 rounded-md"
                  onClick={() => handleImageClick(product?.hoverImageSrc)}
                ></div>
              </div>
            </div>
            <div className="flex justify-between items-center gap-5 pt-10">
              <div className="w-full h-full flex">
                <ShieldCheck size={46} className="text-gray-400" />
                <span className="text-sm text-gray-400 flex">
                  <span className="text-gray-400 font-semibold">
                    {" "}
                    <span>Secure</span> <br /> Checkout
                  </span>
                </span>
              </div>
              <div className="w-full h-full flex">
                <ShieldCheck size={46} className="text-gray-400" />
                <span className="text-sm text-gray-400">
                  Satisfaction <br />
                  <span className="text-gray-400 font-semibold">
                    Guaranteed
                  </span>
                </span>
              </div>
              <div className="w-full h-full flex">
                <LockKeyhole size={46} className="text-gray-400" />
                <span className="text-sm text-gray-400">
                  Privacy <br />
                  <span className="text-gray-400 font-semibold">Protected</span>
                </span>
              </div>
            </div>
            <div className="flex justify-start items-start gap-x-3 pt-8 w-full">
              {!isAddedToCart ? (
                <button
                  onClick={handleAddToCart}
                  className="bg-[#8F8F8F] text-white px-4 py-3 rounded w-full uppercase"
                >
                  Add to Cart
                </button>
              ) : (
                <div className="inline-flex rounded-md md:w-[283px]">
                  <span
                    className="h-12 w-12 cursor-pointer flex-shrink-0 flex items-center justify-center border border-gray-400 text-black"
                    onClick={handleRemoveFromCart}
                  >
                    <Minus />
                  </span>
                  <span className="h-12 md:w-[322px] flex items-center justify-center uppercase font-semibold px-8 border border-gray-400">
                    {getCartQuantity()}
                  </span>
                  <span
                    className="h-12 w-12 flex-shrink-0 flex items-center justify-center border border-l border-gray-400 text-black"
                    onClick={() => addToCart(product)}
                  >
                    <Plus />
                  </span>
                </div>
              )}
              <button className="bg-[#000000] text-white px-4 py-3 rounded w-full uppercase">
                Buy Now
              </button>
            </div>
            <div className="pt-8 w-auto h-auto">
              <p className="text-lg text-black">Description</p>
              <p className="pt-2 ">
                Description We take our customers’ needs very seriously. Our
                team works tirelessly to craft fresh new designs and the quality
                of goods meets high standards. At the same time with us you can
                expect low prices on a wide variety of exciting items. We care
                about the planet and use only modern, recyclable, eco-friendly
                materials and not plastic packaging. Delivery Our delivery is
                completely free. It will take no more than 2 days from your
                order to your door. We start packing your order right from the
                time of purchase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
