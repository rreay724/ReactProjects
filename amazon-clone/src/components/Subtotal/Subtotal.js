import React from "react";
import { useHistory } from "react-router-dom";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../contexts/StateProvider";
import { getCartTotal } from "../../contexts/reducer";

function Subtotal() {
  const history = useHistory();
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items):<strong>{value}</strong>
            </p>
            <small className="subtotalGift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        // value={cart
        //   .map((cart) => cart.price)
        //   .reduce((prev, curr) => prev + curr, 0)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
