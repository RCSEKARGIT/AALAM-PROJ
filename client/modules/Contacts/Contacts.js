import React, { Component } from 'react';
import ContactUs from './components/ContactUs';
import bg from './components/bkgrnd02.jpeg';
import styles from './components/Contacts.css';

class Contacts extends Component {

  render() {
    return (
      <div style={{ background: `#FF3 url(${bg}) no-repeat`, backgroundSize: '100%' }} className={styles.contact}>
        < ContactUs />
      </div>
    );
  }
}

export default Contacts;
