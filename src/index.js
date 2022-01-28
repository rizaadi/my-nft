import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import '../';
import './assets/svg/logo-ds.svg';
import './assets/css/main.css';
import './assets/css/fonts.css';
import './assets/css/normalize.css';
import './assets/css/nice-select2.css';
import './assets/css/swiper-bundle.css';

import App from './components/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
