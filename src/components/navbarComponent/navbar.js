import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';


/*import './App.css';*/






class Navbar extends Component {
  render() {
    return (
        
        
        <header className="menybox">
        
        <nav className="navbar navbar-dark bg-dark">
            <button className="navbar-toggle" data-toggle="collapse" data-target = ".navHeaderCollapse">
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>     
            </button>
        
        
        <div className = "collapse navbar-collapse navHeaderCollapse">
        
        
        
         <ul className = "nav navbar-nav navbar-left">
          <li><NavLink to="/Hem" activeStyle={{ color: '#BFD3C3' }}>HEM</NavLink></li>
          <li><NavLink to="/Bokatid" activeStyle={{ color: '#BFD3C3' }}>BOKA TID</NavLink></li>
          <li><NavLink to="/Pris" activeStyle={{ color: '#BFD3C3' }}>PRIS</NavLink></li>
          <li><NavLink to="/Galleri" activeStyle={{ color: '#BFD3C3' }}>GALLERI</NavLink></li>
          <li><NavLink to="/Utbildning" activeStyle={{ color: '#BFD3C3' }}>UTBILDNING</NavLink></li>
          <li><NavLink to="/Omoss" activeStyle={{ color: '#BFD3C3' }}>OM OSS</NavLink></li>
          <li><NavLink to="/Kontakt" activeStyle={{ color: '#BFD3C3' }}>KONTAKT</NavLink></li>
         </ul>
        
        </div>
        </nav>
        
        
        
      </header> 
        
        
        
    );
  }
}


export default Navbar;
