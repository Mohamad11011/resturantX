"use client";
import { cn } from "@/app/utils/cn";
import React, { useState } from "react";
import Button from "../button/Index";
import { url } from "inspector";
import Image from "next/image";

interface MenuItem {
  label: string;
  img: string;
  onClick?: () => void;
}

interface SidebarProps {
  header?: string;
  menuItems?: MenuItem[];
  className?: string;
  setActiveCategory: any;
  activeCategory: any;
}

const Sidebar = ({
  header,
  menuItems,
  className,
  activeCategory,
  setActiveCategory,
}: SidebarProps) => {
  return (
    <aside className={cn("w-80 bg-lightNight p-4 rounded-md", className)}>
      {/* Sidebar Header */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-700">{header}</h2>
      </div>

      {/* Sidebar Menu Items */}
      <div className="relative h-full">
        <ul className="space-y-3 sticky top-16 right-0">
          {menuItems &&
            menuItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center space-x-2"
                onClick={() => setActiveCategory(item.label)}
              >
                <>
                  <div
                    className={cn(
                      "text-left overflow-hidden flex items-end justify-start py-2.5 relative",
                      "w-full rounded-xl px-4 h-24 transition overlay-shadow cursor-pointer"
                    )}
                  >
                    <span className="z-[1] text-xl">{item.label}</span>
                    <Image
                      alt={item.label}
                      src={item.img}
                      width={300}
                      height={120}
                      className="absolute w-full h-full object-cover left-0 top-0 z-[0]"
                    />
                  </div>
                  <span
                    className={cn(
                      " h-1  rounded-xl transition-all ",
                      item.label === activeCategory
                        ? "w-6 bg-primary"
                        : "w-12 bg-transparent"
                    )}
                  />
                </>
              </li>
            ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
