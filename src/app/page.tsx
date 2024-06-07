"use client";
import Carousel from "@/components/Carousel";
import Furniture from "@/components/Furniture";
import Headline from "@/components/Headline";
import LatestArrival from "@/components/LatestArrival";
import Sculpture from "@/components/Sculpture";
import SculptureShoCase from "@/components/SculptureShocae";
import ShoCase from "@/components/ShoCase";
import ShopCategory from "@/components/ShopCategory";
import Testimonials from "@/components/Testimonials";
import BottomNav from "@/components/navbar/BottomNav";
import Modal from "@/components/ui/Modal";
import { Product } from "@/types/type";
import { useState } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };
  return (
    <main className="relative">
      {/* Carsoule section  */}
      <Carousel />
      <div className="py-5 mt-3 mb-10">
        <ShopCategory />
        <LatestArrival handleCardClick={handleCardClick} />
      </div>
      {selectedProduct && (
        <Modal product={selectedProduct} onClose={handleCloseModal} />
      )}
      <Headline />
      <ShoCase />
      <Sculpture handleCardClick={handleCardClick} />
      <Furniture handleCardClick={handleCardClick} />
      <SculptureShoCase handleCardClick={handleCardClick} />
      <Testimonials />
      <div className="lg:hidden md:block sm:block ">
        <BottomNav />
      </div>
    </main>
  );
}
