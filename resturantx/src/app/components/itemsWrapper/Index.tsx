"use client";
import React, { useState } from "react";
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

  const items = getItems(activeCategory);
  return (
    <>
      <Sidebar
        header="Main Menu"
        menuItems={Items}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />
      <div className="flex flex-1 flex-col p-8 bg-secondary rounded-md">
        <div className="flex space-x-3 items-center py-3">
          <h1 className="text-3xl text-primary font-semibold">
            {activeCategory}
          </h1>
        </div>

        <div className="flex space-x-1">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-y-6 gap-x-10 relative py-4 pr-6 ">
          {items.map((item,index) => (
              <Card key={index}
                imageSrc="/food/salad.jpeg"
                title={item.title}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
          <div className="relative h-full w-6 py-20 border-r">
            <p className="sticky -right-8 top-48 font-extralight whitespace-nowrap pr-5 -rotate-90">
              scroll down
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemsWrapper;
