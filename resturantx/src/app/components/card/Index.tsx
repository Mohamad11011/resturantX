
import { useCart } from "@/app/context/cart/CartContext";
import { useCurrency } from "@/app/context/cart/CurrencyContext";
import MinusIcon from "@/app/icons/MinusIcon";
import PlusIcon from "@/app/icons/PlusIcon";
import { ItemCardProps } from "@/app/types/types";
import { cn } from "@/app/utils/cn";
import { formatPrice } from "@/app/utils/formatPrice";
import Image from "next/image";
import React from "react";

const Card = ({ id, imageSrc, title, description, price }: ItemCardProps) => {
  const { addToCart, decreaseFromCart, cart } = useCart();
  const { selectedCurrency } = useCurrency();
  const handleAddToCart = () => {
    addToCart({ title, price, id });
  };
  const handleDecreaseFromCart = () => {
    decreaseFromCart({ title, price, id });
  };
  function isInCart(cart: any[], name: string) {
    return cart.some((item) => item.title === name);
  }
  function getQuantityInCart(cart: any[], name: string) {
    const item = cart.find((item) => item.title === name);
    return item ? item.quantity : null;
  }
  return (
    // <div className="flex rounded-lg overflow-hidden space-x-3 group ">
    //   <div className="min-w-[120px] h-[120px] overflow-hidden">
    //     <Image
    //       src={imageSrc}
    //       alt={title}
    //       className="w-full h-full object-cover rounded-xl"
    //       width={100}
    //       height={100}
    //     />
    //   </div>

    //   <div className="pt-1 pr-2 flex flex-col justify-between">
    //     <div>
    //       <h2 className="text-[15px] font-semibold text-white line-clamp-1 group-hover:text-primary">
    //         {title}
    //       </h2>
    //       <p className="mt-1 text-white/90 font-light text-[11px] line-clamp-3">
    //         {description}
    //       </p>
    //     </div>

    //     <div className="flex justify-between items-center pb-1">
    //       <span className="text-lg font-semibold text-white">{price}$</span>
    //       <div
    //         className="bg-primary rounded-md cursor-pointer hover:bg-primary/85"
    //         onClick={handleAddToCart}
    //       >
    //         <PlusIcon size={26} className={"fill-white"} />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col items-center rounded-xl group bg-night mt-8 relative">
      <div className="w-[120px] h-[120px] relative select-none">
        <Image
          src={imageSrc}
          alt={title}
          className="w-32 md:w-36 h-auto max-w-36 object-cover rounded-xl absolute -top-8 left-1/2 -translate-x-1/2"
          width={180}
          height={180}
        />
      </div>

      <div className="pb-8 flex flex-col space-y-5 justify-between px-4 md:px-8">
        <h2
          className={cn(
            "md:text-xl font-semibold line-clamp-1 md:group-hover:text-primary text-center select-none",
            isInCart(cart, title) ? "text-primary" : "text-white"
          )}
        >
          {title}
        </h2>
        <p className="mt-1 text-white/90 font-light text-sm line-clamp-3 select-none">
          {description}
         
        </p>
      </div>
      <div className="text-2xl font-semibold text-white absolute top-2 left-3 select-none">
        {selectedCurrency.name === "Dollar" ? (
          <span> {price} $ </span>
        ) : (
          <span className="text-lg">
            {formatPrice(selectedCurrency.rate * price)} L.L
          </span>
        )}
      </div>
      <div className=" absolute top-2 right-3 flex flex-col space-y-1">
        <div
          className="bg-primary rounded-lg cursor-pointer hover:bg-primary/85"
          onClick={handleAddToCart}
        >
          <PlusIcon size={40} className={"fill-white max-sm:w-6 max-sm:h-6"} />
        </div>
        <span
          className={cn(
            "text-center",
            isInCart(cart, title) ? "block" : "hidden"
          )}
        >
          {getQuantityInCart(cart, title)}
        </span>
        <div
          className={cn(
            "bg-primary rounded-lg cursor-pointer hover:bg-primary/85",
            isInCart(cart, title) ? "block" : "hidden"
          )}
          onClick={handleDecreaseFromCart}
        >
          <MinusIcon size={40} className={"fill-white max-sm:w-6 max-sm:h-6"} />
        </div>
      </div>
    </div>
  );
};

export default Card;
