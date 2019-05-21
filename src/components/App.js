import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "./home/HomePage";
import Header from "./common/Header";
import HomePage from "./home/HomePage";
import Reservation from "./reservation/Reservation";
import Tours from "./tours/Tours";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/reservation" component={Reservation} />
        <Route
          path="/tours2019"
          render={() => <Tours dataType={"tours2019"} />}
        />
        <Route path="/bachelor-party" component={Tours} />
        <Route path="/filip-wedding" component={Tours} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
