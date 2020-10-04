import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login/Login";
import MainPage from "./MainPage/MainPage";
import mundo from "./Mundo/mundo";
import Planets from "./Planets/Planets";
import Trial from "./Trial/Trial";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Trial} />
      <Route path="/login" component={Login} />
      <Route path="/trial" component={Trial} />
      <Route path="/home" component={MainPage} />
      <Route path="/mundo" component={mundo} />
      <Route path="/planets" component={Planets} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
