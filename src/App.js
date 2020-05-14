// Modules
import React, { Component } from 'react';

// Styling
import './App.css';

// Services
import CryptoDataServices from './services/CryptoDataServices';

// Components 
import Header from './components/Header'

export default class App extends Component {
  constructor() {
    super();
    this.cryptoDataServices = new CryptoDataServices();
    this.state ={ 
    }
  }
  // fetch everything
  // App as global state
  // pass 5 to header and 5 table
  // filter global state by id or w/e
  // change handler in child changes


  // global state
  // arr for table and dropdown
  // ie. remove from table to data

  render() {
    return (
      <div>
        <Header/>

      </div>
    );
  }
}
