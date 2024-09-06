// components/Card.tsx
import { useCart } from "@/app/context/cart/CartContext";
import PlusIcon from "@/app/icons/PlusIcon";
import Image from "next/image";
import React from "react";

interface ItemCardProps {
  imageSrc: string;
  title: string;
  description: string;
  price: number;
}

const Card = ({ imageSrc, title, description, price }: ItemCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ title, price, quantity: 1 });
  };

  return (
    <div className="flex rounded-lg overflow-hidden space-x-3 group ">
      <div className="min-w-[120px] h-[120px] overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover bg-night/80 rounded-xl group-hover:opacity-85"
          width={100}
          height={100}
        />
      </div>

      <div className="pt-1 pr-2 flex flex-col justify-between">
        <div>
          <h2 className="text-base font-semibold text-white line-clamp-1 group-hover:text-primary">
            {title}
          </h2>
          <p className="mt-1 text-white/90 font-light text-[10px] line-clamp-3">{description}</p>
        </div>

        <div className="flex justify-between items-center pb-1">
          <span className="text-lg font-semibold text-white">{price}$</span>
          <div
            className="bg-primary rounded-md cursor-pointer hover:bg-primary/85"
            onClick={handleAddToCart}
          >
            <PlusIcon size={26} className={"fill-white"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
