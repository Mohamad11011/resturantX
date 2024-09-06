import { useCart } from "@/app/context/cart/CartContext";
import CartIcon from "@/app/icons/CartIcon";
import { cn } from "@/app/utils/cn";
import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, useState } from "react";

const CartList = () => {
  const { cart, removeFromCart, clearCart,totalQuantity } = useCart();
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };
  return (
    <>
      <div className="fixed bottom-3 right-10 z-10">
        <button
          onClick={toggleCartVisibility}
          className="relative shadow-lg bg-night group hover:bg-primary transition-all border-2 text-primary hover:text-night border-primary p-3 rounded-full  flex space-x-2 items-center"
        >
          <CartIcon
            size={20}
            className={"fill-primary group-hover:fill-night"}
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
      {/* {isCartVisible && (  )} */}
      <div
        className={cn(
          "w-1/2 p-6 bg-night border border-white/20 z-10 text-white rounded-lg",
          "fixed left-1/2 transition-all duration-300 -translate-y-1/2 -translate-x-1/2",
          isCartVisible ? "top-1/2 opacity-100" : "-top-full  opacity-0"
        )}
      >
        <h2 className="text-xl font-bold mb-4">Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item: any) => (
              <li
                key={item.title}
                className="mb-2 flex justify-between items-center"
              >
                <span>
                  {item.title} x {item.quantity} - ${item.price * item.quantity}
                </span>
                <button
                  onClick={() => removeFromCart(item.title)}
                  className="bg-red-500 px-2 py-1 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <button
            onClick={clearCart}
            className="bg-red-600 mt-4 px-4 py-2 rounded"
          >
            Clear Cart
          </button>
        )}
      </div>
    </>
  );
};

export default CartList;
