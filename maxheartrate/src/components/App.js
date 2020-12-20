import React from "react";
import "../public/styles/App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import HeartRate from "./HeartRate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/heartrate" component={HeartRate} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
