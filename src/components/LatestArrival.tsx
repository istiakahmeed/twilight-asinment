"use client";
import { products } from "@/db/data";
import { Product } from "@/types/type";
import SectionContainer from "@/utils/SectionContainer";
import { ArrowRight } from "lucide-react";
import Button from "./ui/Button";
import ProductCard from "./ui/ProductCard";
import TitleText from "./ui/TitleText";

interface LatestArrivalProps {
  handleCardClick: (product: Product) => void;
}

const LatestArrival: React.FC<LatestArrivalProps> = ({ handleCardClick }) => {
  return (
    <>
      <SectionContainer>
        <div className="container mb-6 mt-12">
          <div className="flex items-center font-semibold mb-5 justify-between">
            <TitleText title="Latest Arrivals" />
            <Button text="View All">
              <ArrowRight size={16} strokeWidth={4} />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {products[0].latestProducts.map((product) => (
            <ProductCard
              key={product.id}
              ui={product.ui}
              id={product.id}
              title={product.title}
              imageSrc={product.imageSrc}
              hoverImageSrc={product.hoverImageSrc}
              label={product.label}
              price={product.price}
              old_price={product.old_price}
              product={product}
              onCardClick={handleCardClick}
            />
          ))}
        </div>
      </SectionContainer>
    </>
  );
};

export default LatestArrival;
