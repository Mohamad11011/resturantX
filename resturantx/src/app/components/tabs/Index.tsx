import { useEffect, useState } from "react";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<any>();

  // const tabs = [
  //   { name: "HotDishes", disabled: false },
  //   { name: "Cold Dishes", disabled: false },
  //   { name: "Grill", disabled: false },
  //   { name: "Dessert", disabled: false },
  //   { name: "Disabled", disabled: true },
  // ];
  const tabs = [
    { name: "Food", disabled: false },
    { name: "Tobacco", disabled: false },
    { name: "Beverage", disabled: false },
    { name: "Dessert", disabled: false },
  ];
  const handleTabClick = (tabName: string) => {
    if (!tabs.find((tab) => tab.name === tabName)?.disabled) {
      setActiveTab(tabName);
    }
  };

  useEffect(() => {
    if (tabs && tabs.length > 0 && !activeTab) {
      setActiveTab(tabs[0]?.name);
    }
  }, [tabs]);
  return (
    <div className="text-sm font-medium text-center text-white/85 border-b border-lightBorder  ">
      <ul className="flex flex-wrap -mb-px">
        {tabs.map((tab) => (
          <li className="me-2" key={tab.name}>
            <a
              href="#"
              className={`inline-block p-4 rounded-t-lg text-lg ${
                tab.disabled
                  ? "text-gray-400 cursor-not-allowed "
                  : activeTab === tab.name
                  ? "text-primary border-b-2 border-primary"
                  : "border-b-2 border-transparent hover:text-white hover:border-primary/65"
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

export default Tabs;
