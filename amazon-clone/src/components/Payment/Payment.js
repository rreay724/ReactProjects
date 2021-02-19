import React from "react";
import { useStateValue } from "../../contexts/StateProvider";
import { Link } from "react-router-dom";
import { CartItem } from "../index";
import "./payment.css";

function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="paymentContainer">
        <h1>
          Checkout (<Link to="/checkout">{cart?.length} items</Link>)
        </h1>
        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Shipping Address</h3>
          </div>
          <div className="paymentAddress">
            <p>{user?.email}</p>
            <p>19889 Ridgecrest Sq.</p>
            <p>Ashburn, VA 20147</p>
          </div>
        </div>
        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Review items and delivery</h3>
          </div>
          <div className="paymentItems">
            {console.log("CART CONTENTS ===> ", cart)}
            {cart.length !== 0 ? (
              cart.map((item) => (
                <CartItem
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))
            ) : (
              <h4>No items in cart</h4>
            )}
          </div>
        </div>
        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Payment Method</h3>
          </div>
          <div className="paymentDetails"></div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
