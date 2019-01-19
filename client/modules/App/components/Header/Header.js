import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Header.css';

export function Header() {
  return (
    <div id="header-container">
        <div id="header-wrap" className="container">
            <div className="row">
               <div id="logo-wrap" className="col-md-3 col-sm-6 col-xs-6">
                  <a href="http://host7.viethwebhosting.com/~bbd1/">
                  <img src="http://host7.viethwebhosting.com/~bbd1/images/main-logo.png?brk=1479496824" alt="" className="img-responsive" />
                  </a>
               </div>
               <div className="col-md-9 col-sm-6 hidden-xs">
                  <div id="search-area" className="col-md-5 col-sm-12 hidden-xs">
                     <form id="searchbox" action="http://memberleap.com/members/search/query.php?org_id=BBD1">
                        <input id="q" name="keyword" type="search" className="search-input " placeholder="Search..." />
                        <input type="hidden" name="org_id" value="BBD1" />
                        <input value="" name="sa" className="search-button" type="submit" />
                     </form>
                  </div>
               </div>
               <div id="main-menu" className="col-md-9">
                  <div id="nav_menu" className="NP collapse navbar-collapse navbar-ex1-collapse">
                     <ul className="nav navbar-nav men-level-">
                        <li><a href="#" target="_top">About</a></li>
                        <li><a href="#" target="_top">Membership</a></li>
                        <li><a href="#" target="_top">News</a></li>
                        <li><a href="#" target="_top">Events</a></li>
                        <li><a href="#" target="_top">Committees</a></li>
                        <li><a href="#" target="_top">Resources</a></li>
                        <li className="mLogin">
                           <a href="#" data-toggle="modal" data-target="#myModal">Member Login</a>
                        </li>
                     </ul>
                  </div></div>
               <div id="mobile-menu-col">
                  <div id="mobile-toggle" className="mobileMenuTrigger hidden-lg">
                     <svg
                       version="1.1"
                       id="burger"
                       x="0px"
                       y="0px"
                       viewBox="0 0 35 35"
                       enableBackground="new 0 0 35 35"
                       xmlSpace="preserve"
                     >
                        <g id="burger-path">
                           <rect x="0" y="0" fill="#0776a0" width="35" height="35" />
                           <line fill="none" stroke="#FFFFFF" strokeWidth="3.8889" strokeLinecap="round" x1="6.4" y1="9" x2="28.6" y2="9" />
                           <line fill="none" stroke="#FFFFFF" strokeWidth="3.8889" strokeLinecap="round" x1="6.4" y1="17.5" x2="28.6" y2="17.5" />
                           <line fill="none" stroke="#FFFFFF" strokeWidth="3.8889" strokeLinecapp="round" x1="6.4" y1="26" x2="28.6" y2="26" />
                        </g>
                    </svg>
                  </div>
               </div>
            </div>
         </div>
      </div>
  );
}

export default Header;
