// Modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import * as actions from './redux/actions/action';

// Styling
import './App.css';

// DATA
import DATA from './testing.json';

// Services
import CryptoDataServices from './services/CryptoDataServices';

// Components
import Header from './components/Header';
import Table from './components/Table';

class App extends Component {
  constructor() {
    super();
    this.cryptoDataServices = new CryptoDataServices();
    this.state = {};
    // functions for fetching crypto price
    this.fetchCryptoPrice = this.fetchCryptoPrice.bind(this);
    this.addCryptoPrice = this.addCryptoPrice.bind(this);
  }

  componentDidMount() {
    // actions for passing data to redux state
    this.props.actions.fetchCryptoDataPending();
    this.cryptoDataServices.getData().then((res) => {
      this.addCryptoPrice(res.data.data.slice(0, 10)).then((data) => {
        this.props.actions.fetchCryptoDataSuccess(data);
      });
    }).catch((error) => {
      this.props.actions.fetchCryptoDataError(error);
    });
  }

  // function passing price as promises
  addCryptoPrice(cryptos) {
    let cryptosWithPrice = cryptos.map((crypto) => {
      return this.fetchCryptoPrice(crypto.symbol).then((results) => {
        crypto.price = results;
        return crypto;
      });
    });

    return Promise.all(cryptosWithPrice).then((results) => {
      this.results = results;
      return this.results;
    });
  }
  // axios call returning price as a promise
  fetchCryptoPrice(symbol) {
    return this.cryptoDataServices.getCryptoPrice(symbol).then((response) => {
      this.response = response.data.data[symbol].quote.USD.price
      return this.response
    }).catch((error) => {
      this.props.actions.fetchCryptoPriceError(error);
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Table />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    data: state.data,
  };
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
