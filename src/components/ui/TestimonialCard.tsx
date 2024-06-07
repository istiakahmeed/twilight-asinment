import SectionContainer from "@/utils/SectionContainer";
import { QuoteIcon, StarIcon } from "lucide-react";
import React from "react";

interface TestimonialCardProps {
  author: string;
  content: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  author,
  content,
}) => {
  return (
    <SectionContainer>
      <div className="flex space-x-4 md:w-[392px] lg:w-[392px] lg:h-[300px] md:[300px]">
        <div className="p-4 bg-[#F6F6F6] rounded-lg shadow-md border border-gray-400">
          <QuoteIcon className="text-black h-16 w-16 rotate-180" />
          <div className="flex mt-2 mb-4">
            <StarIcon className="text-yellow-400 h-6 w-6" />
            <StarIcon className="text-yellow-400 h-6 w-6" />
            <StarIcon className="text-yellow-400 h-6 w-6" />
            <StarIcon className="text-yellow-400 h-6 w-6" />
            <StarIcon className="text-yellow-400 h-6 w-6" />
          </div>
          <p className="text-lg text-gray-950 pt-2">{content}</p>
          <p className="mt-6 font-bold">{author}</p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default TestimonialCard;
