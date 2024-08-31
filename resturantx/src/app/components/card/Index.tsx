import Image from "next/image";
import React from "react";

interface ItemCardProps {
  imageSrc: string;
  title: string;
  description: string;
  price: number;
}

const Card = ({ imageSrc, title, description, price }: ItemCardProps) => {
  return (
    <div className="flex rounded-lg overflow-hidden space-x-3">
      <div className="flex-shrink-0 w-28 aspect-square overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover bg-night/80 rounded-xl"
          width={112}
          height={112}
        />
      </div>

      <div className="pt-1 pr-2 flex flex-col justify-between">
        <div>
          <h2 className="text-base font-semibold text-white line-clamp-1">{title}</h2>
          <p className="mt-1 text-white/90 font-light text-[10px] line-clamp-3">{description}</p>
        </div>

        <div className="text-left">
          <span className="text-lg font-semibold  text-white">{price}$</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
