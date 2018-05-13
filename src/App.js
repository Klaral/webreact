/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;*/

/************************************************************/

import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';


import Navbar from './components/navbarComponent/navbar';
import Hem from './components/pages/hem';
import Bokatid from './components/pages/bokatid';
import Pris from './components/pages/pris';
import Galleri from './components/pages/galleri';
import Utbildning from './components/pages/utbildning';
import Omoss from './components/pages/omoss';
import Kontakt from './components/pages/kontakt';
import Footer from './components/footerComponent/footer';



class App extends Component {
  render() {
      
    return (
        
        <BrowserRouter>
        <div className="App">
        
        <div className="App-logo">
        <img src={logo} className="logo" alt="logo" /> 
        </div>
        <Navbar />
        
          <Route exact path='/' component={Hem} />
          <Route exact path='/Hem' component={Hem} />
          <Route exact path='/Bokatid' component={Bokatid} />
          <Route exact path='/Pris' component={Pris} />
          <Route exact path='/Galleri' component={Galleri} />
          <Route exact path='/Utbildning' component={Utbildning} />
          <Route exact path='/Omoss' component={Omoss} />
          <Route exact path='/Kontakt' component={Kontakt} />
        
        
        <Footer />
        
        </div>
        </BrowserRouter>
        
    );
  }
}

export default App;













