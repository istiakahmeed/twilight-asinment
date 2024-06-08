import { testimonials } from "@/db/data";
import SectionContainer from "@/utils/SectionContainer";
import { useEffect, useState } from "react";
import TestimonialCard from "./ui/TestimonialCard";
import TitleText from "./ui/TitleText";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(
      (currentIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <SectionContainer>
      <div className="container mt-16 pt-4">
        <div className="flex items-center font-semibold justify-between">
          <TitleText title="Testimonial" />
        </div>
      </div>
      <div className="relative  pb-10 pt-5 ">
        <div className="w-auto h-auto md:w-full md:h-full lg:h-full pt-5 overflow-hidden">
          <div
            className="flex justify-center items-center w-auto h-auto md:w-full md:h-full  transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 10}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.author}
                author={testimonial.author}
                content={testimonial.content}
              />
            ))}
          </div>
        </div>
        <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
          {testimonials.map((_, index) => (
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
    </SectionContainer>
  );
}
