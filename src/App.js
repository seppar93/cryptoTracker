// Modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import * as actions from './redux/actions/action'


// Styling
import './App.css';

// Services
import CryptoDataServices from './services/CryptoDataServices';

// Components 
import Header from './components/Header'

 class App extends Component {
  constructor() {
    super();
    this.cryptoDataServices = new CryptoDataServices();
    this.state ={ 
    }
  }
  // TODO: fetch price from second call
  componentDidMount() {
    // this.props.actions.fetchCryptoDataPending();
    // this.cryptoDataServices.getData().then((res) => {
    //   this.props.actions.fetchCryptoDataSuccess(res.data)
    // }).catch((error) => {
    //   this.props.actions.fetchCryptoDataError(error);
    // })

    this.cryptoDataServices.getData()

  }
 

  render() {
    return (
      <div>
        <Header/>

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
