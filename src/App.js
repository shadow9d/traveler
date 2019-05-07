import React, { Component } from 'react';
import './App.css';
import Map from './Components/Map'
import Footer from './Components/Footer'
import Particles from 'react-particles-js'
import {Pane } from 'evergreen-ui'

const particlesOptions = {
  "particles": {
      "number": {
          "value": 160,
          "density": {
              "enable": false
          }
      },
      "size": {
          "value": 10,
          "random": true
      },
      "move": {
          "direction": "bottom",
          "out_mode": "out"
      },
      "line_linked": {
          "enable": false
      }
  },
  "interactivity": {
      "events": {
          "onclick": {
              "enable": true,
              "mode": "remove"
          }
      },
      "modes": {
          "remove": {
              "particles_nb": 10
          }
      }
    }
}


class App extends Component {
  render() {
    return (
      <div>
        
        <Map />
        
        <Particles className='particles' params={particlesOptions} />
        <Footer />
      </div>
    );
  }
}
export default App;
