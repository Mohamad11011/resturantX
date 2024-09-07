import { cn } from "@/app/utils/cn";
import React, { useState } from "react";

const DropDown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("Dine In"); // Default selected option

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown after selecting
  };

  return (
    <div className="relative inline-block text-left">
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="text-white text-xl bg-night border font border-lightBorder hover:bg-night/60 focus:ring-0 focus:outline-none focus:ring-transparent rounded-lg px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        <span className="min-w-20">{selectedOption}</span>

        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1l4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          id="dropdown"
          className="absolute z-[11] top-[105%] bg-lightNight border border-lightBorder divide-y divide-gray-100 rounded-lg w-full "
          onBlur={closeDropdown}
        >
          <ul
            className="py-2 text-sm text-gray-700 "
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                onClick={() => handleOptionClick("Dine In")}
                className={cn(
                  "block text-white px-4 py-2 hover:bg-white/5",
                  selectedOption === "Dine In" ? "text-white" : "text-white/80"
                )}
              >
                Dine In
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleOptionClick("Take Out")}
                className={cn(
                  "block text-white px-4 py-2 hover:bg-white/5",
                  selectedOption === "Take Out"
                    ? "text-white "
                    : "text-white/80"
                )}
              >
                Take Out
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
