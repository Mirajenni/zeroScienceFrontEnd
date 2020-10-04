
import React, { Component } from 'react'
import ReactGlobe from 'react-globe';
import markers from './markers'
import markerRenderer from './markerRenders'
export default class mundo extends Component {
    
    render() {
        const options = {
            markerRenderer
          };
        return ( <ReactGlobe
            height="100vh"
            markers={markers}
            width="100vw"
            options={options} 
            />)
    }
}
