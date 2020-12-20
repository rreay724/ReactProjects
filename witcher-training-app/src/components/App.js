import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import HeartRate from "../pages/heartRate";

import MainPage from "../pages/index";
import NavigationBar from "../pages/Layout/navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact={true} path="/heartrate" component={HeartRate} />
          <Route exact={true} path="/nav" component={NavigationBar} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
