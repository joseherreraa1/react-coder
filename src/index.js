import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBkUd9yGCEs5UQLCEUsCI1TEFnOFg_xwZw",
  authDomain: "proyecto-react-7202d.firebaseapp.com",
  projectId: "proyecto-react-7202d",
  storageBucket: "proyecto-react-7202d.appspot.com",
  messagingSenderId: "1083587518740",
  appId: "1:1083587518740:web:9bc4058f63ce626994a201"
};

// Initialize Firebase
initializeApp(firebaseConfig);

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
