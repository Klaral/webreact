import React, { Component } from 'react';
/*import { Link } from 'react-router-dom';*/
import './hem.css';
/*import './App.css';*/

class Hem extends Component {
  render() {
    return (
        
        
      <div className="container-fluid">
        <div className="heminfo">
        
         <img src="assets/room.png" alt="boka" className="hembild1" />
         <img src="assets/oga.png" alt="galleri" className="hembild2" />
         <img src="assets/bokatid.png" alt="kontakt" className="hembild3" />
        
        
        </div>
      </div> 
        
    );
  }
}

export default Hem;
