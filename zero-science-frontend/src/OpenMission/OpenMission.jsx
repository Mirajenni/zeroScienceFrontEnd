import React, { Component } from "react";
import "./OpenMission.scss"
import earth from "../Assets/earth.svg"
import satelite from "../Assets/🛰.png"
import foguete from "../Assets/🚀.png"

export default class OpenMission extends Component {
  render() {
    return (
        <div className="openmission-page-content">
            <div className="earth">
              <a href=""><img id="satelite" src={satelite} alt=""/></a>
              <img id="earth-rotating" src={earth} alt=""/>
            </div>
            <a className="btn-back" href=""><img id="foguete" src={foguete} alt=""/> Voltar</a>
        </div>
    );
  }
}
