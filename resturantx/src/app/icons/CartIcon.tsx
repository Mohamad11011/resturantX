import * as React from "react";
const CartIcon = ({ size = 20, className }: any) => (
    <svg
    width={size}
    height={size}
    viewBox="0 0 0.9 0.9"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    
  >
    <path
      d="m.825.272-.075.3A.04.04 0 0 1 .717.6L.305.637H.3A.04.04 0 0 1 .263.605L.211.268.193.15H.112a.037.037 0 0 1 0-.075h.08a.075.075 0 0 1 .075.063l.014.087h.506a.04.04 0 0 1 .03.014.04.04 0 0 1 .008.032M.619.713a.056.056 0 1 0 .056.056.056.056 0 0 0-.056-.056m-.225 0A.056.056 0 1 0 .45.769.056.056 0 0 0 .394.713"
      style={{
        fill: "#231f20",
      }}
    />
  </svg>
);
export default CartIcon;
