// Modules
import React, { Component } from 'react';

// Styling
import './App.css';

// Services
import CryptoDataServices from './services/CryptoDataServices';

export default class App extends Component {
  constructor() {
    super();
    this.cryptoDataServices = new CryptoDataServices();
  }


  render() {
    return <div>Testing</div>;
  }
}
