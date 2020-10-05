import React, { Component, useState } from "react";
import ReactGlobe from "react-globe";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import Fuel from "../Assets/fuel.svg";
import { Link } from "react-router-dom";
import Nave from "../Assets/nave.svg";
import "./mundo.scss";
import * as THREE from "three";
//import defaultmarkers from "./markers.js"

let sat = {
  name: "",
  altitude: "",
};

function markerRenderer(marker) {

  let size = (marker.value - 0) / (100 - 0);
  if (size === 0) size = 1;
  if (size >= 1000000) size = size/1000
  const boxgeometry = new THREE.BoxGeometry(5, 5, size); //Aqui utiliza width, height, depth. Modificar o segundo parâmetro para altura.

  const material = new THREE.MeshBasicMaterial({
    color: "purple", //poderia randomizar cor se tivesse tempo.
  });

  //eometry.rotateX(2.4);
  const mesh = new THREE.Mesh(boxgeometry, material);
  mesh.children = [];

  return mesh;
}

function markerTooltipRenderer(marker) {
  sat.name = marker.city;
  sat.altitude = marker.value;
  return `Nome do satélite: ${marker.city}. (Sua Altitude: ${marker.value})`;
}

const options = {
  markerRenderer,
};

let defaultmarkers = [];
function App() {
  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);
  const [markers, setMarkers] = useState([]);
  const [event, setEvent] = useState(null);
  const [details, setDetails] = useState(null);
  function onClickMarker(marker, markerObject, event) {
    setShow(true);
    setEvent({
      type: "CLICK",
      marker,
      markerObjectID: markerObject.uuid,
      pointerEventPosition: { x: event.clientX, y: event.clientY },
    });
    setDetails(markerTooltipRenderer(marker));
  }
  function onDefocus(previousFocus) {
    setEvent({
      type: "DEFOCUS",
      previousFocus,
    });
    setDetails(null);
  }

  return (
    <div>
      {details && (
        <div className="display-none-force">
          <p>
            EVENT: type={event.type}, position=
            {JSON.stringify(event.pointerEventPosition)})
          </p>
        </div>
      )}

      <ReactGlobe
        height="100vh"
        markers={defaultmarkers}
        options={options}
        width="100vw"
        onClickMarker={onClickMarker}
        onDefocus={onDefocus}
      />

      <Modal className="fonts-adjust" show={show} onHide={handleClose}>
        <Modal.Title>{defaultmarkers.city}</Modal.Title>
        <text>VISITOU O SATÉLITE: {sat.name}</text> <br />
        <text>SUA ALTITUDE ATUAL É: {sat.altitude}</text> <br />
        <text>VOCÊ GANHOU</text>
        <img src={Fuel} alt="Gasolina" /> <text>3</text>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
      </Modal>

      <Link to="/home">
        <Button className="imagem-nave-btn">
          <img className="imagem-nave" src={Nave} alt="Nave" />
          VOLTAR
        </Button>
      </Link>
    </div>
  );
}

export default class mundo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://02a1c813c089.ngrok.io//getSatellitesNear")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(defaultmarkers);
          for (let index = 0; index < Object.keys(result).length; index++) {
            var array = result[index]["above"];
            console.log("Conjunto de SAT: ", array);
            for (let jndex = 0; jndex < array.length; jndex++) {
              var sat_point = array[jndex];
              console.log(array[jndex]);
              defaultmarkers.push({
                id: sat_point["satid"],
                city: sat_point["satname"],
                color: "blue",
                coordinates: [sat_point["satlat"], sat_point["satlng"]],
                value: sat_point["satalt"],
              });
            }
          }
          console.log(defaultmarkers);
          this.setState({
            isLoaded: true,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const loaded = this.state.isLoaded;
    let app;
    if (loaded) {
      app = <App />;
    } else {
      app = "";
    }
    return app;
  }
}
