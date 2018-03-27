import React, { Component } from 'react';
import { Link } from 'react-router-dom';
/*import './App.css';*/

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="logo">
        LOGO
        </div>
        
        <nav classNmane="nav">
         <ul>
          <li className="firs">
            <Link to="/Homepage">HEM</Link>
          </li>
        <li>
            <Link to="/Bokatid">BOKA TID</Link>
          </li>
        <li className="last">
        <Link to="/Pris">PRIS</Link>
            
          </li>
         </ul>
        </nav>
        
        
      </header>
    );
  }
}

export default Header;
