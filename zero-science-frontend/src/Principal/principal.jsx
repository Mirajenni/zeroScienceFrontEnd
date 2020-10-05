import React, { Component , useState} from 'react'
import ReactGlobe from 'react-globe';
//import defaultmarkers from "./markers.js"

function markerTooltipRenderer(marker) {
  return `Nome do Satelite: ${marker.city} (Sua Altitude: ${marker.value})`;
}

const options = {
  markerTooltipRenderer
};

let defaultmarkers = [];

function App() {
  const [markers, setMarkers] = useState([]);
  const [event, setEvent] = useState(null);
  const [details, setDetails] = useState(null);
  function onClickMarker(marker, markerObject, event) {
    setEvent({
      type: "CLICK",
      marker,
      markerObjectID: markerObject.uuid,
      pointerEventPosition: { x: event.clientX, y: event.clientY }
    });
    setDetails(markerTooltipRenderer(marker));
  }
  function onDefocus(previousFocus) {
    setEvent({
      type: "DEFOCUS",
      previousFocus
    });
    setDetails(null);
  }

  return (
    <div>
      {details && (
        <div
          style={{
            background: "white",
            position: "absolute",
            fontSize: 20,
            bottom: 0,
            right: 0,
            padding: 12
          }}
        >
          <p>{details}</p>
          <p>
            EVENT: type={event.type}, position=
            {JSON.stringify(event.pointerEventPosition)})
          </p>
        </div>
      )}
      <ReactGlobe
        height="100vh"
        markers = {defaultmarkers}
        options={options}
        width="100vw"
        onClickMarker={onClickMarker}
        onDefocus={onDefocus}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");


export default class principal extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://zeroscapp.herokuapp.com/getSatellitesNear")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          console.log(defaultmarkers)
         for (let index = 0; index < Object.keys(result).length; index++) {
                var sat_name = result[index]['info']['satname']
                var sat_id = result[index]['info']['satid']
                var sat_lat =  result[index]['positions']['0']['satlatitude']
                var sat_lon =  result[index]['positions']['0']['satlongitude']
                defaultmarkers.push({id: sat_id, city: sat_name, color: 'blue' ,coordinates: [sat_lat, sat_lon], value: 70})
                console.log(defaultmarkers)
            }
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
            error
          });
        }
      )
    }

  render() {
    const loaded = this.state.isLoaded
    let app;
    if(loaded){
      app = <App/>
    }
    else{
      app = ""
    }
    return app;
  }
}
