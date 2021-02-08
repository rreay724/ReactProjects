import "./App.css";
import { Header, Home, Checkout, Login } from "./components/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// When using switch, make sure default route is at bottom or it won't get listened to
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
