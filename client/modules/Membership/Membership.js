import React, { Component } from 'react';
// import MemberRef from './components/MemberRef/MemberRef';
import bg from './components/MemberRef/Bkgrnd01.jpeg';
import styles from './components/MemberRef/MemberRef.css';

class Membership extends Component {

  submitFormHandler = event => {
    event.preventDefault();
    
    console.dir(this.refs.name.value); //will give us the name value
  }

  render() {
    return (
      <div style={{ background: `url(${bg}) no-repeat`, backgroundSize: '100%' }} className={styles.MemberRef}>
        <form onSubmit={this.submitFormHandler}>     
          <label>
          Member No   :
            <input type="text" name="name" ref="name" />
            </label>
     
         <label>
          Member Name :
            <input type="text" name="name" ref="name" />
            </label>
            <br />
            <label>
          Father Name :
            <input type="text" name="name" ref="name" />
            </label>

          <label>
          Member Batch :
            <input type="text" name="name" ref="name" />
            </label>
            <br />
          <label>
          Member Year  :
            <input type="text" name="name" ref="name" />
            </label>

          <label>
          Member DOB  :
            <input type="text" name="name" ref="name" />
            </label>
            <br />
          <label>
          Martial Status :
            <input type="text" name="name" ref="name" />
            </label>

            <label>
          Member Type  :
            <input type="text" name="name" ref="name" />
            </label>
            <br />
          <label>
          Member Address  :
            <input type="text" name="name" ref="name" />
            </label>

          <label>
          Member Email  :
            <input type="text" name="name" ref="name" />
            </label>
            <br />
          <label>
          Member Phone  :
            <input type="text" name="name" ref="name" />
            </label>

          <label>
          Member Mobile  :
            <input type="text" name="name" ref="name" />
            </label>
            <br />
          <label>
          Member Identification :
            <input type="text" name="name" ref="name" />
            </label>

        </form>
      </div>
        );
  }
}

export default Membership;
