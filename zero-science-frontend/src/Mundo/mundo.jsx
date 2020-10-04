import React, { Component } from "react";
import Globe from "worldwind-react-globe";
export default class mundo extends Component {
  render() {
    const layers = [
      "coordinates",
      "view-controls",
      "stars",
      "bing-aerial-labels",
    ];
    return (
      <div className="fullscreen">
        <Globe
          ref={this.globeRef}
          layers={layers}
          latitude={34.2}
          longitude={-119.2}
          altitude={10e6}
        />
      </div>
    );
  }
}
