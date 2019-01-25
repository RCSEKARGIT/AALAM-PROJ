import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

const logo = require('./aalam-logo3.jpg');

// Import Style
import styles from './Header.css';

export function Header() {
  return (    
    <div id="header-container">
        <div id="header-wrap" className="container">
            <div className="row">
               <Link to='/'>
               <div id="logo-wrap" className="col-md-1 col-sm-4 col-xs-6">
                  <img src={logo} alt="" className="img-responsive" />
               </div>
               </Link>
               <div id="main-menu" className="col-md-11">
                  <div id="nav_menu" className="NP collapse navbar-collapse navbar-ex1-collapse">
                     <ul className="nav navbar-nav navbar-inverse men-level-">
                        <li><Link to="/" target="_top">Home</Link></li>
                        <li><Link to="/about" target="_top">About Us</Link></li>
                        <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                         Members Program <span class="caret"></span></a>
                        <ul className="dropdown-menu">
                        <li><Link to="/member" target="_top">Member Registration</Link></li>
                        <li><Link to="/member" target="_top">Member-Referral</Link></li>
                        </ul>
                        </li>
                        <li><Link to="/member" target="_top">News/Publications</Link></li>
                        <li><Link to="/vision" target="_top">Mission/Vision</Link></li>
                        <li><Link to="/events" target="_top">Events/Programs</Link></li>
                        <li><Link to="/donate" target="_top">Contributions</Link></li>
                        <li><Link to="/contacts" target="_top">Contact Us</Link></li>
                        <li className="mLogin">
                          <a href="#" data-toggle="modal" data-target="#myModal">Member Login</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
        </div>
    </div>
  );
}

export default Header;
