import React, { Component } from 'react';
import './App.css';
import Map from './Components/Map'
import Footer from './Components/Footer'
import Someextra from './Components/Someextra'
import Timepass from './Components/Timepass'


class App extends Component {
  render() {
    return (
      <div>
        
        <Map />
        <Timepass />
        <Someextra />
        <Footer />
      </div>
    );
  }
}
export default App;
