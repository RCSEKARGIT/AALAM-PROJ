import React from 'react';
// Import Style
// import styles from '../../App/App.css';
const logo = require('./agp-chn-chp-1.jpg');

export function ChpPgm() {
  return (
        <div id="main-container" >
         <div className="index-content ">
            <div className="container">
               <div className="row">
    {/*              <div id="home-content" className="column col-md-10 col-md-push-1 col-md-pull-1 col-xs-12 col-sm-12">
                     <h1>AALAM - Reconnect- Engage- Develop </h1> */}
                     <div id="home-content" className="column col-lg-12 col-md-12 col-xs-12 col-sm-12">
                        <img src={logo} alt="Chapter Programs" style={{height:'50%', width:'100%'}} className="img-responsive" />
                     <h1>AALAM - Chapter Events</h1>
                    </div>
               </div>
            </div>
         </div>
      </div>
    );
}

export default ChpPgm;