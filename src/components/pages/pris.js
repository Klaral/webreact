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
         <li>Lorem ipsum 250kr</li><br />
         <li>Curabitur cursus 300kr</li><br />
         <li>Duis quis orci suscipit 650kr</li><br />
         <li>Duis quis suscipit 650kr</li><br />
         <li>Lorem ipsum 700kr</li><br />
         <li>Duis quis orci suscipit 1350kr</li><br />
         <li>Duis orci suscipit 1500kr</li><br />
         <li>Curabitur cursus 1600kr</li><br />
         <li>Duis quis orci suscipit 1900kr</li>
        </ul>
        
        </div>
      </div> 
    );
  }
}

export default Pris;
