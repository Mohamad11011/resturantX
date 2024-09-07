"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/Index";
import Card from "../card/Index";
import { cn } from "@/app/utils/cn";
import {
  grillObject,
  italianObject,
  pizzaObject,
  saladsObject,
  shawarmaObject,
} from "@/constants";
import Topbar from "../topbar/Index";
import { CartProvider } from "@/app/context/cart/CartContext";
import CartList from "../cart/Index";
import DropDown from "../dropdown/Index";
import Tabs from "../tabs/Index";
import Phills from "../pills/Index";

interface ItemsWrapper {
  Items: any;
}

const ItemsWrapper = ({ Items }: ItemsWrapper) => {
  const [activeCategory, setActiveCategory] = useState<any>();
  const getItems = (category: any) => {
    switch (category) {
      case "Salads":
        return saladsObject.items;
      case "Grill":
        return grillObject.items;
      case "Italian":
        return italianObject.items;
      case "Pizza":
        return pizzaObject.items;
      case "Shawarma":
        return shawarmaObject.items;
      default:
        return [];
    }
  };
  useEffect(() => {
    if (!activeCategory) {
      setActiveCategory("Salads");
    }
  }, [activeCategory]);

  const items = getItems(activeCategory);
  return (
    <CartProvider>
      <>
        {/* <Sidebar
        header="Main Menu"
        menuItems={Items}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      /> */}
        <div className="flex justify-between">
          <div className="flex items-center space-x-6">
            <div className="">
              <img src="/logo.svg" width={50} />
            </div>

            <h1 className="text-2xl text-white font-semibold">Choose Dishes</h1>
          </div>
          <DropDown />
        </div>
        <div className="sticky top-0 z-10 flex flex-col space-y-4 bg-lightNight pb-4">
          <Tabs />

          <Phills
            menuItems={Items}
            setActiveCategory={setActiveCategory}
            activeCategory={activeCategory}
          />
        </div>


   <CartList />

       
        {/* <Topbar
          header="Our Menu"
          menuItems={Items}
          setActiveCategory={setActiveCategory}
          activeCategory={activeCategory}
        /> */}

        <div className="flex flex-1 flex-col py-2 px-6 rounded-md">
          {/* <div className="flex space-x-3 items-center py-3">
            <h1 className="text-3xl text-primary font-semibold">
              {activeCategory}
            </h1>
          </div> */}

          <div className="flex space-x-1">
            <div className="w-full grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-3 gap-6 relative py-4 pr-6 ">
              {items.map((item, index) => (
                <Card
                  key={index}
                  id={index}
                  imageSrc="/food/salad.jpeg"
                  title={item.title}
                  description={item.description}
                  price={item.price}
                />
              ))}
            </div>
            <div className="relative h-auto w-6 py-20 border-r">
              <p className="sticky -right-8 top-48 font-extralight whitespace-nowrap pr-5 -rotate-90">
                scroll down
              </p>
            </div>
          </div>
        </div>
      </>
    </CartProvider>
  );
};

export default ItemsWrapper;
