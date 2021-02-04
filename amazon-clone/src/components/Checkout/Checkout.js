import React from "react";
import { Subtotal } from "../index";
import "./checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkoutLeft">
        <img
          className="checkoutAd"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkoutTitle">Shopping Cart</h2>
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
        </div>
      </div>
      <div className="checkoutRight">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
