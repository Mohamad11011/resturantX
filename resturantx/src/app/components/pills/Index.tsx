import { MenuItem, SidebarProps } from "@/app/types/types";
import { useEffect, useState } from "react";


const Phills = ({
  menuItems,
  activeCategory,
  setActiveCategory,
  className,
}: SidebarProps) => {
  const [activeTab, setActiveTab] = useState<any>();

  const tabs = [
    { name: "HotDishes", disabled: false },
    { name: "Cold Dishes", disabled: false },
    { name: "Grill", disabled: false },
    { name: "Dessert", disabled: false },
    { name: "Shawarma", disabled: false },
    { name: "Pizza", disabled: true },
  ];

  const handleTabClick = (tabName: string) => {
    if (!tabs.find((tab) => tab.name === tabName)?.disabled) {
      setActiveTab(tabName);
      setActiveCategory(tabName)
    }
  };

  useEffect(() => {
    if (tabs && tabs.length > 0 && !activeTab) {
      setActiveTab(tabs[0]?.name);
    }
  }, [tabs]);
  return (
    <div className="text-sm font-medium text-center text-white/85">
      <ul className="flex flex-wrap space-x-2">
        {tabs.map((tab) => (
          <li className="me-2" key={tab.name}>
            <a
              href="#"
              className={`inline-block py-1.5 px-6 text-lg rounded-full bg-night border border-lightBorder ${
                tab.disabled
                  ? "text-gray-400 cursor-not-allowed   "
                  : activeTab === tab.name
                  ? "text-black border-primary font-medium bg-primary"
                  : " hover:text-white hover:border-primary/65"
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleTabClick(tab.name);
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
