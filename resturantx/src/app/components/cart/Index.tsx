import { useCart } from "@/app/context/cart/CartContext";
import CartIcon from "@/app/icons/CartIcon";
import DeleteIcon from "@/app/icons/DeleteIcon";
import MinusIcon from "@/app/icons/MinusIcon";
import PlusIcon from "@/app/icons/PlusIcon";
import { cn } from "@/app/utils/cn";
import {
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react";

const CartList = () => {
  const {
    cart,
    removeFromCart,
    clearCart,
    addToCart,
    decreaseFromCart,
    totalQuantity,
    totalAmount,
  } = useCart();
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  useEffect(() => {
    if (cart && cart.length === 0) {
      setTimeout(() => {
        setIsCartVisible(false);
      }, 1500);
    }
  }, [cart.length]);
  return (
    <>
      <div className="fixed bottom-4 right-10 z-10">
        <button
          onClick={cart.length > 0 ? toggleCartVisibility : undefined}
          className={cn(
            "relative shadow-lg bg-night group transition-all border-2 p-3 rounded-full flex space-x-2 items-center",
            cart && cart.length > 0
              ? "text-primary hover:bg-primary hover:text-night border-primary"
              : "text-gray-400 border-lightBorder"
          )}
        >
          <CartIcon
            size={20}
            className={cn(
              "",
              cart && cart.length > 0
                ? "fill-primary group-hover:fill-night"
                : "fill-gray-400"
            )}
          />
          <span>{isCartVisible ? "Close" : "Open"}</span>
          {cart.length > 0 && (
            <span className="absolute right-0 -top-2.5 bg-red-600 text-white rounded-full px-2 py-[2px] z-[11] text-sm">
              {/* {cart.length} */}
              {totalQuantity}
            </span>
          )}
        </button>
      </div>

      <div
        className={cn(
          "w-[95%] md:w-1/2 p-6 bg-night border border-white/20 z-10 text-white rounded-lg",
          "fixed left-1/2 transition-all duration-300 -translate-y-1/2 -translate-x-1/2",
          isCartVisible ? "top-1/2 opacity-100" : "-top-full  opacity-0"
        )}
      >
        <h2 className="text-xl font-bold mb-4">Order</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <div className="w-full flex justify-between pb-2 mb-3 border-b border-lightBorder">
              <span>Item</span>
              <div className="flex space-x-2 md:pr-[46px]">
                <div className="w-[46px] text-lg">Qty</div>
                <div className="w-[46px] text-lg">Price</div>
              </div>
            </div>
            <ul>
              {cart.map((item) => (
                <li
                  key={item.title}
                  className="mb-2 flex justify-between items-center"
                >
                  <div className="text-lg">
                    {item.title}
                    <span className="ml-1.5 text-xs text-gray-300">
                      ({item.price} $)
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1 items-center relative">
                      <div className=" flex flex-col space-y-[4px]">
                        <div
                          onClick={() => addToCart(item)}
                          className="bg-lightNight p-[3px] rounded h-fit border  border-lightBorder"
                        >
                          <PlusIcon size={14} className={"fill-white"} />
                        </div>
                        <div
                          onClick={() => decreaseFromCart(item)}
                          className="bg-lightNight p-[3px] rounded h-fit border  border-lightBorder"
                        >
                          <MinusIcon size={14} className={"fill-white"} />
                        </div>
                      </div>
                      <div className="select-none w-[45px] md:w-[50px] h-[50px] flex items-center justify-center bg-lightNight border border-lightBorder rounded text-sm">
                        x{item.quantity}
                      </div>
                    </div>
                    <div className="select-none w-[50px] h-[50px] flex items-center justify-center bg-lightNight border border-lightBorder rounded text-sm">
                      {item.price * item.quantity} $
                    </div>

                    <button
                      onClick={() => removeFromCart(item.title)}
                      className="bg-night border border-red-500 max-md:hidden p-3 rounded group hover:bg-red-500"
                    >
                      <DeleteIcon
                        className={"fill-red-500 group-hover:fill-white"}
                      />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="w-full flex justify-between py-3 my-3 border-t border-b border-lightBorder">
              <span className="text-xl select-none">Total</span>
              <span className="text-xl select-none">{totalAmount} $</span>
            </div>
            {cart.length > 0 && (
              <div className="w-full flex items-start justify-end">
                <button
                  onClick={clearCart}
                  className="select-none bg-red-500 text-white mt-4 px-10 py-2 rounded hover:bg-red-500/85"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default CartList;
