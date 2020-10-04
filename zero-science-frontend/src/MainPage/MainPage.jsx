import React, { Component } from "react";
import { Card, ProgressBar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Fuel from "../Assets/fuel.svg";
import Pictures from "../Assets/picture.svg";
import Earth from "../Assets/earth.svg";
import Substract from "../Assets/Substract.svg";
import "./MainPage.scss";

export default class MainPage extends Component {
  constructor() {
    super();

    this.state = {
      teste: false,
    };
  }

  componentDidMount() {
    document.body.style.backgroundColor = "#ededed";
  }

  render() {
    let qtdGasolina = 50;
    let qtdMapas = 98;

    return (
      <React.Fragment>
        <div className="main-principal">
          <div className="main">
            <Card style={{ width: "20rem" }}>
              <Card.Body>
                <Card.Title>Sua Mochila</Card.Title>
                <Card.Text>
                  <img
                    className="main-minify-image"
                    src={Pictures}
                    alt="Gasolina"
                  />
                  : {qtdGasolina}
                </Card.Text>
                <ProgressBar now={qtdGasolina} label={`${qtdGasolina}%`} />
                <Card.Text>
                  <img
                    className="main-minify-image"
                    src={Fuel}
                    alt="Gasolina"
                  />
                  : {qtdMapas}
                </Card.Text>
                <ProgressBar now={qtdMapas} label={`${qtdMapas}%`} />
              </Card.Body>
            </Card>
            <Card style={{ width: "20rem", marginTop: "2em" }}>
              <Card.Body className="card-body--custom">
                <Card.Title className="define-color">Próxima Missão</Card.Title>
                <div className="card-body--flex">
                  <div>
                    <img src={Earth} alt="Planeta" />
                  </div>
                  <div className="card-body-prizes">
                    <text className="define-color">Terra</text> <br />
                    <text className="define-color">Recompensa:</text>
                    <img
                      className="main-minify-image--custom"
                      src={Pictures}
                      alt="Foto"
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Link to="/planets">
              <Button className="button-adjust-blue">Ver missões</Button>
            </Link>
          </div>
          <div className="earth-adjust">
            <img src={Substract} alt="Planeta" />
            <Link to="/mundo">
              <Button>EXPLORAR</Button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
