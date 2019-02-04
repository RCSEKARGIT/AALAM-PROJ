import React, { Component } from 'react';
import { MsgBox } from './components/MsgBox/MsgBox';
import bg from './components/MsgBox/Bkgrnd03.jpg';
import styles from './components/MsgBox/MsgBox.css';

class Home extends Component {

  render() {
    return (
      <div style={{ background: `url(${bg}) no-repeat`, backgroundSize: '100%' }} className={styles.MsgBox}>
        <MsgBox />
      </div>
    );
  }
}

export default Home;
