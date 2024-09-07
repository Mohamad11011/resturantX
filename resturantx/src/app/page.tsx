import Navbar from "./components/navbar/Index";
import ItemsWrapper from "./components/itemsWrapper/Index";
import { MenuItems } from "@/constants";

export default function Home() {
  return (
  
      <main className="min-h-screen py-6 px-4 md:px-16 flex flex-col bg-lightNight">
        {/* <Navbar /> */}
        {/* max-md: space-x-6 */}
        <div className="flex w-full flex-1 flex-col space-y-4">
          <ItemsWrapper Items={MenuItems} />
        </div>
      </main>
   
  );
}
