import React, { Component } from 'react';
import './omoss.css';
/*import './App.css';*/

class Omoss extends Component {
  render() {
    return (
        
      <div className="container-fluid">
        <div className="omossinfo">
        <h1>
        S t u d i o 8.
        </h1>
        
        <p className="oss">
        Välkommen till Studio 8, en liten salong i centrala Göteborg. Salongen ligger på Chalmersgatan 25 som är en parallellgata till Avenyn.</p> 
        <p className="oss">
        Salongen drivs av Michaela som är utbildad ögonfransstylist. Hon utför behandlingar och utbildningar inom ögonfransförlängning. Salongen är ständigt under utveckling för att kunna erbjuda det mesta inom skönhet. Hos oss är alla välkomna!
        </p>
        
        
        <img src="assets/ossbild.jpg" alt="vi" className="ossbild1" />
        
        
        </div>
      </div> 
        
    );
  }
}

export default Omoss;
