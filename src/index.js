// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


// Styling
import './index.css';

// Components 
import App from './App';


// ServiceWorker
import * as serviceWorker from './serviceWorker';


// Redux Configuration
import configuration from './redux/configureStore'

ReactDOM.render(
  <Provider store={configuration()}>
    <App />
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
