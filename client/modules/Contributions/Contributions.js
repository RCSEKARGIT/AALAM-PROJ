import React, { Component } from 'react';
import logo from './components/DonatePgm/bkgrnd01.jpeg';
import DonatePgm from './components/DonatePgm/DonatePgm';
import styles from './components/DonatePgm/DonatePgm.css';

class Contributions extends Component {

  render() {
    return (
      <div style={{ background: `#FF3 url(${logo}) no-repeat`, backgroundSize: '100%' }} className={styles.DonatePgm} >
        < DonatePgm />
      </div>
        );
  }
}

export default Contributions;
