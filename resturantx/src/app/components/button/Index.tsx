import { cn } from "@/app/utils/cn";
import React from "react";

interface ButtonProps {
  text: string;
  iconName?: React.ComponentType<{ iconsSize?: number }>;
  onClick?: () => void;
  className?: string;
  iconsSize?: number;
}

const Button: React.FC<ButtonProps> = ({
  text,
  iconName:Icon,
  iconsSize,
  onClick,
  className,
}) => {
  return (
    <button
      className={cn(
        `flex items-center justify-center px-4 py-2  text-white rounded-md transition duration-300 `,
        className
      )}
      onClick={onClick}
    >
      {Icon && (
        <span className="mr-2">
           <Icon iconsSize={iconsSize} />
        </span>
      )}
      <p className="text-white text-xl relative z-[2]">{text}</p>
    </button>
  );
};

export default Button;
