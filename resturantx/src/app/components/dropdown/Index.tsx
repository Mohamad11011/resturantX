import { useCurrency } from "@/app/context/cart/CurrencyContext";
import { cn } from "@/app/utils/cn";
import { useState } from "react";

const DropDown = () => {
  const { selectedCurrency, setSelectedCurrency } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { name: "Dollar", rate: 1 },
    { name: "Lira", rate: 90000 },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleOptionClick = (option: { name: string; rate: number }) => {
    setSelectedCurrency(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="text-white text-xl bg-night border font border-lightBorder hover:bg-night/60 focus:ring-0 focus:outline-none focus:ring-transparent rounded-lg px-3 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        <span className="min-w-16">{selectedCurrency.name}</span>

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
            {options.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  onClick={() => handleOptionClick(item)}
                  className={cn(
                    "block text-white px-4 py-2 hover:bg-white/5",
                    selectedCurrency.name === item.name
                      ? "text-white bg-night/80"
                      : "text-white/80"
                  )}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
