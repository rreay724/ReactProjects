import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerBackToTop">Back to top</div>
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
          <h3>Get to Know Us</h3>
          <p>Careers</p>
          <p>Blog</p>
          <p>About Amazon</p>
          <p>Press Center</p>
          <p>Investor Relations</p>
          <p>Amazon Devices</p>
          <p>See More Make Money with Us</p>
        </div>
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
            <p className="footerItem">English</p>
            <p className="footerItem">United States</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
