import React from "react";
import "./login.css";
import { loginUrl } from "../../utils/spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="https://yungcitizen.com/wp-content/uploads/2018/09/spotify-logo-horizontal-white.png"
        alt="logo"
      />

      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
