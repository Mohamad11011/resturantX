export interface MenuItem {
  label: string;
  img: string;
  onClick?: () => void;
}

export interface SidebarProps {
  header?: string;
  menuItems?: MenuItem[];
  className?: string;
  setActiveCategory?: any;
  activeCategory?: any;
}

export interface ItemCardProps {
    imageSrc: string;
    title: string;
    description: string;
    price: number;
    id:number
  }