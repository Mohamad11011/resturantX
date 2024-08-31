// components/Navbar.tsx
import React from "react";
import Button from "../button/Index";
import CallIcon from "@/app/icons/CallIcon";
import CartIcon from "@/app/icons/CartIcon";

const Navbar = () => {
  return (
    <nav className="shadow-md w-full">
      <div className="flex justify-between h-16 items-center">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <a href="/" className="text-2xl font-bold text-blue-600">
            Logo
          </a>
        </div>

        {/* Menu Section */}
        <div className="hidden md:flex space-x-4">
          <Button
            text="Call Waiter"
            iconName={CallIcon}
            // onClick={handleClick}
            className="mr-1 font-light bg-primary rounded-xl"
          />
          <Button
            text=""
            iconName={CartIcon}
            // onClick={handleClick}
            className="mx-2 bg-white px-3 rounded-xl"
            
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
