import Image, { StaticImageData } from "next/image";
import React from "react";

interface TestimonialCardProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const TestimonialCard = ({
  image,
  title,
  description,
}: TestimonialCardProps) => {
  return (
    // <div className="bg-[#18162A] rounded-2xl p-5 flex flex-col items-center max-w-[400px] mx-auto shadow-lg">
    //   <Image src={image} alt="testimonial" width={56} height={56} className="mb-6" />
    //   <h2 className="text-white font-semibold text-2xl mb-4 text-center">
    //     {title}
    //   </h2>
    //   <p className="text-[#C1C1C1] font-normal text-base text-center">
    //     {description}
    //   </p>
    // </div>
    <div className="group bg-[#18162A]/90 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-6 lg:py-4 lg:px-8 flex flex-col items-center w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto shadow-lg hover:shadow-xl transition-all duration-300 border border-white/5 hover:border-white/20 hover:scale-105">
      {/* Icon/Image */}
      <div className="mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${title} icon`}
          width={56}
          height={56}
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain"
        />
      </div>

      {/* Title */}
      <h2 className="text-white font-semibold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-center leading-tight">
        {title}
      </h2>

      {/* Description */}
      <p className="text-[#C1C1C1] font-normal text-sm lg:text-base text-center leading-relaxed">
        {description}
      </p>

      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default TestimonialCard;
