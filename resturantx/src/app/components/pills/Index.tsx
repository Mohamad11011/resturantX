import { MenuItem, SidebarProps } from "@/app/types/types";
import { LocalCategories } from "@/constants";
import { useEffect, useState } from "react";

const Phills = ({
  menuItems,
  activeCategory,
  setActiveCategory,
  className,
}: SidebarProps) => {
  const [activeTab, setActiveTab] = useState<any>();

  // const tabs = [
  //   { name: "HotDishes", disabled: false },
  //   { name: "Cold Dishes", disabled: false },
  //   { name: "Grill", disabled: false },
  //   { name: "Dessert", disabled: false },
  //   { name: "Shawarma", disabled: false },
  //   { name: "Pizza", disabled: true },
  // ];

  const handleTabClick = (tabId: string) => {
    if (!LocalCategories.find((tab) => tab.id === tabId)?.disabled) {
      setActiveTab(tabId);
      setActiveCategory(tabId);
    }
  };

  useEffect(() => {
    if (LocalCategories && LocalCategories.length > 0 && !activeTab) {
      setActiveTab(LocalCategories[0]?.id);
      setActiveCategory(LocalCategories[0]?.id);

    }
  }, [LocalCategories,activeTab]);
  return (
    <div className="text-sm font-medium text-center text-white/85 pt-6">
      <ul className="flex space-x-2 overflow-x-scroll scroll-bar-hide">
        {LocalCategories.map((tab,index) => (
          <li className="me-2" key={index}>
            <a
              href="#"
              className={`inline-block py-1.5 px-6 text-lg whitespace-nowrap rounded-full bg-night border border-lightBorder ${
                tab?.disabled
                  ? "text-gray-400 cursor-not-allowed "
                  : activeTab === tab.id
                  ? "text-black border-primary font-medium bg-primary"
                  : " hover:text-white hover:border-primary/65"
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleTabClick(tab?.id);
              }}
              aria-current={activeTab === tab.name ? "page" : undefined}
            >
              {tab.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Phills;
