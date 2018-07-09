import React, { Component } from 'react';
import './galleri.css';
/*import './App.css';*/

class Galleri extends Component {
  render() {
    return (
        
      <div className="container-fluid">
        
        
        <div className="row"> 
          <div className="col-sm-12">
            <img src="assets/bilder.jpg" alt="foto" className="pic1" />
            <img src="assets/bilder.jpg"  alt="foto" className="pic2" />
            <img src="assets/bilder.jpg" alt="foto" className="pic3" />
          </div>
          <div class="col-sm-12" id="">
            <img src="assets/bilder.jpg" alt="foto" className="pic1" />
            <img src="assets/bilder.jpg" alt="foto" className="pic2" />
            <img src="assets/bilder.jpg" alt="foto" className="pic3" />
          </div> 
          <div class="col-sm-12" id="">
            <img src="assets/bilder.jpg" alt="foto" className="pic1" />
            <img src="assets/bilder.jpg" alt="foto" className="pic2" />
            <img src="webreact/assets/bilder.jpg" alt="foto" className="pic3" />
           </div> 
  
        </div>
        
      </div>
    
    );
  }
}

export default Galleri;
