import React from "react";
import { Subtotal, CartItem } from "../index";
import "./checkout.css";
import { useStateValue } from "../../contexts/StateProvider";

function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkoutLeft">
        <img
          className="checkoutAd"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          {user ? (
            <h3 className="checkoutName">Hello, {user?.email.split("@")[0]}</h3>
          ) : (
            <h3></h3>
          )}
          <h2 className="checkoutTitle">Shopping Cart</h2>
          {cart.map((item) => (
            <CartItem
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkoutRight">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
