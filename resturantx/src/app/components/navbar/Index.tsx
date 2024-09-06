// components/Navbar.tsx
import React from "react";
import Button from "../button/Index";
import CallIcon from "@/app/icons/CallIcon";
import CartIcon from "@/app/icons/CartIcon";

const Navbar = () => {
  return (
    <nav className="shadow-md w-full">
      <div className="flex justify-between mb-6 items-center">
        {/* Logo Section */}
        <div className="">
          <img src="/logo.svg" width={55} />
        </div>

        {/* Menu Section */}
        <div className="hidden md:flex space-x-4">
          <Button
            text="Call Waiter"
            iconName={CallIcon}
            // onClick={handleClick}
            customText={"text-black font-semibold"}
            className="bg-primary rounded-xl"
          />
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
