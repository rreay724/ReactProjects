import "./App.css";
import { Header, Home, Checkout } from "./components/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// When using switch, make sure default route is at bottom or it won't get listened to
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
