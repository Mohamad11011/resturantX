"use client";
import { cn } from "@/app/utils/cn";
import React, { useEffect, useState } from "react";
import Button from "../button/Index";
import { url } from "inspector";
import Image from "next/image";
import { grillObject, italianObject, pizzaObject, saladsObject, shawarmaObject } from "@/constants";

interface MenuItem {
  label: string;
  img: string;
  onClick?: () => void;
}

interface SidebarProps {
  header?: string;
  menuItems?: MenuItem[];
  className?: string;
  setActiveCategory?: any;
  activeCategory?: any;
}

const Topbar = ({
  header,
  menuItems,
  className,
  activeCategory,
  setActiveCategory,
}: SidebarProps) => {

  return (
    <div className={cn("w-full bg-white/5 p-2 rounded-md", className)}>
      {/* Sidebar Header */}
      {/* <div className="mb-4">
        <h2 className="text-xl text-gray-200">{header}</h2>
      </div> */}

      {/* Sidebar Menu Items */}
      <div className="relative h-full">
        <ul className="flex space-x-4">
          {menuItems &&
            menuItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center"
                onClick={() =>
                  setActiveCategory && setActiveCategory(item.label)
                }
              >
                <>
                  <div
                    className={cn(
                      "text-left overflow-hidden flex items-end justify-start py-2.5 relative border border-transparent",
                      "w-36 h-24 rounded-xl px-4 transition overlay-shadow cursor-pointer",
                      item.label === activeCategory && "text-primary transition"
                    )}
                  >
                    <span
                      className={cn(
                        "z-[1] text-xl",
                        item.label === activeCategory &&
                          "text-primary transition"
                      )}
                    >
                      {item.label}
                    </span>
                    <Image
                      alt={item.label}
                      src={item.img}
                      width={300}
                      height={120}
                      className="absolute w-full h-full object-cover left-0 top-0 z-[0]"
                    />
                  </div>
                </>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
