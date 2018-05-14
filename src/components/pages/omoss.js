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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor scelerisque felis a mattis. Mauris sed ultricies tortor. Nam nec commodo magna. Donec eget semper nisi. Donec fermentum eu justo sit amet fringilla. Maecenas ac ligula id dui feugiat efficitur.</p> 
        <p className="oss">
        Vivamus sit amet nisl pharetra, porttitor nisi et, faucibus est. Integer sed massa finibus est pellentesque ornare ut non velit. Praesent maximus iaculis felis, id auctor velit malesuada vel.
        </p>
        
        
        <img src="assets/ossbild.jpg" alt="vi" className="ossbild1" />
        
        
        </div>
      </div> 
        
    );
  }
}

export default Omoss;
