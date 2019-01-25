import React, { Component } from 'react';
import VisonMission from './components/VisionMission';
import bg from './components/bkgrnd-vision.jpeg';

class Vision extends Component {

  render() {
    return (
      <div style={{ background: `#FF3 url(${bg}) no-repeat`, backgroundSize: "100%" }}>
        < VisonMission />
      </div>
    );
  }
}

export default Vision;
