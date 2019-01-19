import React from 'react';

export function Footer() {
  return (
    
    <div id="footer-container" className="row">
    <div id="footer-wrap" className="container">
       <div id="credits" className="col-md-6 col-sm-6 col-xs-12">
          <p>
             &copy; 2019 BBD. Website powered by <a href="https://www.memberleap.com" target="_blank">MemberLeap.</a><br />
          </p>
          <p>Sample Address Rd, Sampleton ZD 23400<br />
             <a href="mailto:sample@info.org">sample@info.org</a>
          </p>
       </div>
       <div id="footer-social" className="col-md-6 col-sm-6 col-xs-12">
          <a href="#"><img src="http://host7.viethwebhosting.com/~bbd1/images/linked.png" /></a>
          <a href="#"><img src="http://host7.viethwebhosting.com/~bbd1/images/google+.png" /></a>
          <a href="#"><img src="http://host7.viethwebhosting.com/~bbd1/images/twitter.png" /></a>
          <a href="#"><img src="http://host7.viethwebhosting.com/~bbd1/images/facebook.png" /></a>
       </div>
    </div>
 </div>
  );
}

export default Footer;
