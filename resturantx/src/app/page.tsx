import Navbar from "./components/navbar/Index";
import ItemsWrapper from "./components/itemsWrapper/Index";
import { MenuItems } from "@/constants";

export default function Home() {

  
  return (
    <main className="min-h-screen py-8 px-20 flex flex-col bg-night">
      <Navbar />
      <div className="flex space-x-8 w-full flex-1">
        <ItemsWrapper Items={MenuItems} />
      </div>
    </main>
  );
}
