import { cn } from "@/app/utils/cn";
import React from "react";

interface ButtonProps {
  text: string;
  iconName?: React.ComponentType<{ iconsSize?: number }>;
  onClick?: () => void;
  className?: string;
  customText?: string;
  iconsSize?: number;
}

const Button: React.FC<ButtonProps> = ({
  text,
  iconName:Icon,
  iconsSize,
  onClick,
  className,
  customText
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
      <p className={cn("text-white text-xl relative z-[2]",
        customText
      )}>{text}</p>
    </button>
  );
};

export default Button;
