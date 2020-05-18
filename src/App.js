// Modules
import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Styling
import './App.css';

// Services
import CryptoDataServices from './services/CryptoDataServices';

// Actions
import * as actions from './redux/actions/action';

// Components
import Header from './components/Header';
import Table from './components/Table';

function App(props) {
  const cryptoDataServices = useRef(new CryptoDataServices());
  useEffect(() => {
    const addCryptoPrice = (cryptos) => {
      let cryptosWithPrice = cryptos.map((crypto) => {
        return fetchCryptoPrice(crypto.symbol).then((results) => {
          crypto.price = results;
          return crypto;
        });
      });

      return Promise.all(cryptosWithPrice);
    };

    // axios call returning price as a promise
    const fetchCryptoPrice = (symbol) => {
      return cryptoDataServices.current
        .getCryptoPrice(symbol)
        .then((response) => {
          return response.data.data[symbol].quote.USD.price;
        })
        .catch((error) => {
          props.actions.fetchCryptoPriceError(error);
        });
    };

    // Fetching data
    props.actions.fetchCryptoDataPending();
    cryptoDataServices.current
      .getData()
      .then((res) => {
        addCryptoPrice(res.data.data.slice(0, 10)).then((data) => {
          props.actions.fetchCryptoDataSuccess(data);
        });
      })
      .catch((error) => {
        props.actions.fetchCryptoDataError(error);
      });
  });

  return (
    <div>
      <Header />
      <Table />
    </div>
  );
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
