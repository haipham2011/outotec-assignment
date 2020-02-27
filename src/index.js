import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import * as firebase from 'firebase';
import {firebaseConfig} from './config';
import 'bootstrap/dist/css/bootstrap.min.css';

firebase.initializeApp(firebaseConfig);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));