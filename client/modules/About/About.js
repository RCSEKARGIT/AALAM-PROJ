import React, { Component } from 'react';
import AboutUs from './components/AboutUs';
import bg from './components/bkgrnd-about.jpeg';

class About extends Component {

  render() {
    return (
      <div style= {{ background: `#FF3 url(${bg}) center`}}>
        < AboutUs />
      </div>
    );
  }
}

export default About;
