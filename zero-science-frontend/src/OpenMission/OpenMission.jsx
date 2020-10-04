import React, { Component } from "react";
import "./OpenMission.scss"
import earth from "../Assets/earth.svg"

export default class OpenMission extends Component {
  render() {
    return (
        <div className="openmission-page-content">
            <div className="earth">
              <img src={earth} alt=""/>
            </div>
        </div>
      
    );
  }
}
