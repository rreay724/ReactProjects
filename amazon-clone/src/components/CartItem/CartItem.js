import React from "react";
import "./cartItem.css";
import { useStateValue } from "../../contexts/StateProvider";
import FlipMove from "react-flip-move";

function CartItem({ id, title, image, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className="cartItem">
      <img className="cartItemImage" src={image} />
      <div className="cartItemInfo">
        <p className="cartItemTitle">{title}</p>
        <p className="cartItemPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="cartItemRating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromCart}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CartItem;
