import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import MainPage from "./MainPage/MainPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import mundo from "./Mundo/mundo";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={MainPage} />
      <Route path="/mundo" component={mundo} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
