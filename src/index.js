import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/css/style.css";
import "./assets/css/slick.css";
import "./assets/css/responsive.css";
import './assets/css/font-awesome.css';
import './assets/css/animate.css';
import './assets/css/owl.carousel.css'
import App from './pages/App';

// redux
import {Provider} from 'react-redux'
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
