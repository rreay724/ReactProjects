import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  const logoUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png";

  return (
    <div className="login">
      <Link to="/">
        <img className="loginLogo" src={logoUrl} />
      </Link>
    </div>
  );
}

export default Login;
