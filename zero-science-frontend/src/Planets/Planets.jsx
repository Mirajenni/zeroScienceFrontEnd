import React, { Component } from "react";
import { Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import Earth from "../Assets/earth2.svg";
import Mars from "../Assets/mars.svg";
import Jupiter from "../Assets/jupiter.svg";
import Nave from "../Assets/nave.svg";
import Fuel from "../Assets/fuel.svg";
import Cadeado from "../Assets/cadeado.svg";

import "./Planets.scss";
import { Link } from "react-router-dom";

export default class Planets extends Component {
  constructor() {
    super();

    this.state = {
      teste: false,
    };
  }

  componentDidMount() {
    document.body.style.background = "#031627";
  }

  renderTooltip(props) {
    return (
      <Tooltip className="texts-fonts" id="button-tooltip" {...props}>
        MARTE <br />
        VOCÊ PRECISA DE <img src={Fuel} /> 3 <br />
        <Button disabled={true}>
          <img className="text-fonts-margin" src={Cadeado} />
          BLOQUEADO
        </Button>
      </Tooltip>
    );
  }

  render() {
    return (
      <div className="planets-principal">
        <h2>
          Explore os satélites para encontrar ingredientes escondidos e
          desbloquear os planetas
        </h2>
        <div className="planets-lines">
          <div id="wrapper">
            <img className="circle" src={Earth} alt="#" />
            <div class="line-top"></div>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={this.renderTooltip}
            >
              <img className="circle" src={Mars} alt="#" />
            </OverlayTrigger>
            <div class="line-bottom"></div>
            <img className="circle" src={Jupiter} alt="#" />
          </div>
        </div>
        <Link to="/home">
          <Button className="imagem-nave-btn">
            <img className="imagem-nave" src={Nave} alt="Nave" />
            VOLTAR
          </Button>
        </Link>
      </div>
    );
  }
}
