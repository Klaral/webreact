import React, { Component } from 'react';
import './kontakt.css';


class Kontakt extends Component {
  render() {    
     
      
    return (
    
    <div className="container-fluid">
     <div className="kontaktinfo">
        
        <ul className="adress">
         <li>Chalmersgatan 25</li>
         <li>411 35 Göteborg</li>
         <li>Tel: 0761 609561 (vänligen skicka sms då vi sitter upptagna med kund).</li>
         <li>Mail: info@mail.se</li><br />
        </ul>
         
          <img src="assets/karta.png" alt="adress" className="kartabild1" />
        
        </div>
      </div> 
        
    
    );     
    
  }
}


export default Kontakt;