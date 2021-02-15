import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <footer className="footer">
      <div onClick={scrollToTop} className="footerBackToTop">
        <p>Back to top</p>
      </div>
      <div className="footerColumnGroup">
        <div className="footerColumn">
          <h3>Get to Know Us</h3>
          <p>Careers</p>
          <p>Blog</p>
          <p>About Amazon</p>
          <p>Press Center</p>
          <p>Investor Relations</p>
          <p>Amazon Devices</p>
          <p>Amazon Tours</p>
        </div>
        <div className="footerColumn">
          <h3>Make Money with Us</h3>
          <p>Sell products on Amazon</p>
          <p>Sell apps on Amazon</p>
          <p>Become an Affiliate</p>
          <p>Advertise Your Products</p>
          <p>Self-Publish with Us</p>
          <p>Host an Amazon Hub</p>
          <p>›See More Make Money with Us</p>
        </div>
        <div className="footerColumn">
          <h3>Amazon Payment Products</h3>
          <p>Amazon Rewards Visa Signature Cards</p>
          <p>Amazon.com Store Card</p>
          <p>Amazon Business Card</p>
          <p>Amazon Business Line of Credit</p>
          <p>Shop with Points</p>
          <p>Credit Card Marketplace</p>
          <p>Reload Your Balance</p>
          <p>Amazon Currency Converter</p>
        </div>
        <div className="footerColumn">
          <h3>Let Us Help You</h3>
          <p>Amazon and COVID-19</p>
          <p>Your Account</p>
          <p>Your Orders</p>
          <p>Shipping Rates & Policies</p>
          <p>Amazon Prime</p>
          <p>Returns & Replacements</p>
          <p>Manage Your Content and Devices</p>
          <p>Amazon Assistant</p>
          <p>Help</p>
        </div>
      </div>
      <div className="footerBottom">
        <div className="footerBottomGroup">
          <Link to="/">
            <img
              className="footerLogo"
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
          </Link>
          <div className="footerItems">
            <p className="footerItem">🌐 &nbsp;&nbsp;English</p>
            <p className="footerItem">🇺🇸 &nbsp;United States</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
