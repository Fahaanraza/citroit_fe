import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { CookiesProvider } from 'react-cookie';
import axios from 'axios';
axios.defaults.withCredentials = true; // even for get requests if
                                    // demand session authentication
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'x-csrftoken'

// import config from './config/config';
// import LogoutService from '../src/services/Logout';
// const { ODIN_SERVICE } = config;
let isFirstCall = true;
axios.defaults.withCredentials = true;
// axios.defaults.baseURL = ODIN_SERVICE;


// axios.interceptors.response.use((response) => response, (async (error) => {
//  if (error.response.status === 440) {
//    if (isFirstCall) {
//      isFirstCall = false;
//      await LogoutService.logout();
//      localStorage.removeItem('fdstate');
//      window.location.reload();
//    }
//  } else {
//    return Promise.reject(error);
//  }
// }));
ReactDOM.render(
 <CookiesProvider>
   <App />
 </CookiesProvider>,
 document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
