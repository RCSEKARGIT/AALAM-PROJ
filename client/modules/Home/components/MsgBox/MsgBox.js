import React from 'react';
// Import Style
import styles from '../../../App/App.css';
const logo = require('./aalam-tree2.jpg');

export function MsgBox() {
  return (
        <div id="main-container" >
         <div className="index-content ">
            <div className="container">
               <div className="row">
    {/*              <div id="home-content" className="column col-md-12 col-md-push-1 col-md-pull-1 col-xs-12 col-sm-12">
                     <h1>AALAM - Reconnect- Engage- Develop </h1> */}
                     <div id="home-content" className="column col-lg-11 col-md-12 col-xs-12 col-sm-12">
                     <h1>AALAM - Reconnect- Engage- Develop</h1>
                        <img src={logo} alt="" className="img-responsive" />
                     
                    </div>
               </div>
            </div>
         </div>
      </div>
    );
}

export default MsgBox;