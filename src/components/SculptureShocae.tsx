import { products } from "@/db/data";
import { Product } from "@/types/type";
import SectionContainer from "@/utils/SectionContainer";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import ProductCard from "./ui/ProductCard";

interface SculptureShoCaseProps {
  handleCardClick: (product: Product) => void;
}

const SculptureShoCase: React.FC<SculptureShoCaseProps> = ({
  handleCardClick,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(
      (currentIndex - 1 + products[0].sculpture.length) %
        products[0].sculpture.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % products[0].sculpture.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  return (
    <SectionContainer>
      <div className="container h-screen mt-12">
        <div className="flex justify-center items-center bg-[#F6F6F6] flex-col lg:flex-row h-full">
          <div className="w-full lg:w-2/4 h-full lg:h-full overflow-hidden group">
            <img
              src="/image_26.webp"
              alt="Image"
              className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-2/4 h-full lg:h-full flex justify-center items-center ">
            <div className="relative w-4/5 h-full lg:h-[88vh] pt-5 overflow-hidden">
              <div
                className="w-full h-full flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {products[0].sculpture.map((product) => (
                  <div
                    key={product.id}
                    className="w-full flex justify-center items-center flex-shrink-0 pb-4"
                  >
                    <ProductCard
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
                  </div>
                ))}
              </div>
              <button
                onClick={prevSlide}
                className="absolute top-1/2 -translate-y-1/2 left-4 z-10 p-2 bg-[#23232370] rounded-full text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
              >
                <ArrowLeft className="w-8 h-8" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 -translate-y-1/2 right-4 z-10 p-2 bg-[#23232370] rounded-full text-white focus:outline-none"
              >
                <ArrowRight className="w-8 h-8" />
              </button>
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
                {products[0].sculpture.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentIndex === index ? "bg-[#f7d240]" : "bg-white/50"
                    } hover:bg-[#eecb3e] focus:bg-[#f8d33d] focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default SculptureShoCase;

{
}

{
  /* */
}
