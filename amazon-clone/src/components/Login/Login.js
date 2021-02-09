import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./login.css";
import { db, auth } from "../../firebase";

function Login() {
  const logoUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png";
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    // prevents page from refreshing
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
        console.log(auth.user.email);
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="loginLogo" src={logoUrl} />
      </Link>
      <div className="loginContainer">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="loginSigninButton" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By signing in you agree to Amazon's Fake Clone Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice,
          Interest-Based Ads Notice, and our This Isn't The Real Amazon Notice.
        </p>
        <button className="loginRegisterButton" onClick={register}>
          Create your amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;