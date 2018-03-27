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
import './App.css';

import { BrowserRouter, Route, Link } from 'react-router-dom';

import Header from './components/headerComponent/header';
import Homepage from './components/pages/homePage';
import Bokatid from './components/pages/bokatid';
import Pris from './components/pages/pris';
import Footer from './components/footerComponent/footer';



class App extends Component {
  render() {
    return (
        <BrowserRouter>
      <div className="App">
        
        
    
        <Header />
        
          <Route exact path='/Homepage' component={Homepage} />
          <Route exact path='/Bokatid' component={Bokatid} />
          <Route exact path='/Pris' component={Pris} />
        
        <Footer />
        
        
     </div>
        </BrowserRouter>
    );
  }
}

export default App;













