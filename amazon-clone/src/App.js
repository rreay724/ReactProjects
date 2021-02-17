import "./App.css";
import { useEffect } from "react";
import {
  Header,
  Home,
  Checkout,
  Login,
  Footer,
  Payment,
} from "./components/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./contexts/StateProvider";

// When using switch, make sure default route is at bottom or it won't get listened to
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //empty brackets means it will only run once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("User: ", authUser);
      if (authUser) {
        // the user just loggin or user was logged in. will log you back in if you refresh page
        dispatch({ type: "SET_USER", user: authUser });
        console.log("USERNAME: ", authUser);
      } else {
        // user is logged out
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, []);
  return (
    <>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/checkout">
              <Header />
              <Checkout />
              <Footer />
            </Route>
            <Route path="/payment">
              <Header />
              <Payment />
              <Footer />
            </Route>
            <Route path="/">
              <Header />
              <Home />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
