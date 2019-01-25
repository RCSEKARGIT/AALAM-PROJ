import React, { Component } from 'react';
import { ChpPgm } from './components/ChnPgm/ChpPgm';
import bg from './components/ChnPgm/bkgrnd-event01.jpeg';
import styles from './components/ChnPgm/ChpPgm.css';

class Events extends Component {

  render() {
    return (
      <div style={{ background: `url(${bg}) no-repeat`, backgroundSize: "100%" }} className={styles.ChpPgm}>
        < ChpPgm />
      </div>
    );
  }
}

export default Events;