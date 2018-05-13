import React, { Component } from 'react';
import './kontakt.css';


class Kontakt extends Component {
  render() {    
     
      
    return (
    
    <div className="container-fluid">
     <div className="kontaktinfo">
        
        <ul className="adress">
         <li>Suspendissegatan 7A</li>
         <li>375 11 Quisque</li>
         <li>010-0000000</li><br />
         <li>info@mail.se</li>
        </ul>
         
          <img src="assets/karta.png" className="kartabild1" />
        
        </div>
      </div> 
        
    
    );     
    
  }
}


export default Kontakt;