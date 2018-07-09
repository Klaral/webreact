import React, { Component } from 'react';
import './pris.css';
/*import './App.css';*/

class Pris extends Component {
  render() {
    return (
        
      <div className="container-fluid">
        <div className="prisinfo">
        <h1>
        Prislista
        </h1>
        
        <ul className="pris">
         <li>Nytt set ögonfransar 1000kr</li>
         <li>Påfyllning inom 4 veckor 450kr</li>
         <li>Påfyllning inom 3 veckor 350kr</li>
         <li>Påfyllning inom 2 veckor 250kr</li>
         <li>Nytt set akrylnaglar 500kr</li>
         <li>Påfyllning 400kr</li>
         <li>Shallac behandling 250kr</li>
        </ul>
        
        </div>
      </div> 
    );
  }
}

export default Pris;
