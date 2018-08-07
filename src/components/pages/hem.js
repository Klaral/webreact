import React, { Component } from 'react';
/*import { Link } from 'react-router-dom';*/
import './hem.css';
/*import './App.css';*/

class Hem extends Component {
  render() {
    return (
        
        
      <div className="container-fluid">
        <div className="heminfo">
        
        <h1>S T U D I O 8...</h1>
        
        <div className="hembild">
         <img src="assets/room.png" alt="boka" className="hembild1" /> 
         <img src="assets/oga.png" alt="galleri" className="hembild2" />
         <img src="assets/bokatid.png" alt="kontakt" className="hembild3" /> 
        </div>
        
        <h3>Ögonfransförlängning & Naglar</h3>
        
        <p className="text">Välkommen till Studio 8. en liten salong i centrala Göteborg.</p><br />
        <p className="text">Om ögonfransar</p>
        <p>Vi jobbar med "singlelash metoden" som är den mest skonsamma för ens egna ögonfransar. Man sätter varje lösfrans en och en på ens naturliga frans, detta för att man sedan ska tappa fransarna en och en som ens naturliga fransar tappas. Man kan få allt från en "naturlig look" till den dramatiska "Hollywood looken". Man kan välja olika längder, tjocklekar och olika böj på lösögonfransarna. Vi går igenom önskemål tillsammans innan behandlingen påbörjar för att få det resultat du vill ha som kund.</p><br />
        
        <p className="text">Om naglar</p>
        <p>Naglar görs i akryl. Vi bygger på naturlig nagel eller med tippar. Vi går igenom med kund innan arbetet påbörjas för att få till det resultat som önskas med form, längd och färg. Vi har även shellac behandlingar där man gör en lackning med ett material som har bättre hållbarhet än ett vanligt lack.</p><br />
        
        
        
        
        </div>
      </div> 
        
    );
  }
}

export default Hem;
