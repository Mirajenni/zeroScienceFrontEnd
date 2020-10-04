import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import Trial from "./Trial/Trial";
import OpenMission from "./OpenMission/OpenMission";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/login" component={Login} />
      <Route path="/trial" component={Trial} />
      <Route path="/open-mission" component={OpenMission} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
