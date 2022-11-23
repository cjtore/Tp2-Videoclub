import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';


const configFirebase = firebase.initializeApp({
  apiKey: "AIzaSyCL7jdKAoRRBOstZN-hQHhiXurit_nH76o",
  authDomain: "videoclub-a45a9.firebaseapp.com",
  projectId: "videoclub-a45a9",
  storageBucket: "videoclub-a45a9.appspot.com",
  messagingSenderId: "604063344910",
  appId: "1:604063344910:web:696f20752d9784e470cf5f"
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export {configFirebase}