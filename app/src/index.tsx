import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.sass';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getAuth } from 'firebase/auth'
import firebase, { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database';
import { store } from './stores';
import * as constants from './constants';
import { Provider } from 'react-redux';
import { getStorage } from 'firebase/storage';

const app = initializeApp({
  apiKey: constants.REACT_APP_FIREBASE_API_KEY,
  authDomain: constants.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: constants.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: constants.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: constants.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: constants.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: constants.REACT_APP_FIREBASE_APP_ID
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
export const db = getDatabase(app);
export const storage = getStorage(app)
export const auth = getAuth();
