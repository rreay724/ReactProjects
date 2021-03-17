import React, { useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useStateValue } from "../../contexts/StateProvider";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { auth } from "../../firebase";

function Header() {
  const [{ cart, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="headerLogo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      {user ? (
        <div className="headerDeliverTo">
          <LocationOnOutlinedIcon className="headerLocationIcon" />
          <div>
            <p className="headerDeliverUser">
              Deliver to {user?.email.split("@")[0]}
            </p>
            <h3 className="headerLocation">Ashburn 20147</h3>
          </div>
        </div>
      ) : null}

      <div className="headerSearch">
        <input className="headerSearchInput" type="text" />
        <SearchIcon className="headerSearchIcon" />
      </div>
      <div className="headerNav">
        {/* if no user, then go to login page */}
        <Link to={!user && "/login"} style={{ textDecoration: "none" }}>
          <div onClick={handleAuthentication} className="headerOption">
            <span className="headerOptionLineOne">
              Hello, {user ? user?.email.split("@")[0] : "Guest"}
            </span>
            <span className="headerOptionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders" style={{ textDecoration: "none" }}>
          <div className="headerOption">
            <span className="headerOptionLineOne">Returns</span>
            <span className="headerOptionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="headerOption">
          <span className="headerOptionLineOne">Your</span>
          <span className="headerOptionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="headerOptionCart">
            <ShoppingCartOutlinedIcon />
            <span className="headerOptionLineTwo headerCartCount">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
