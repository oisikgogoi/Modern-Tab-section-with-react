import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {RecoilRoot} from 'recoil'
import '../src/css/index.css'
ReactDOM.render(
  
    <React.StrictMode>
      <RecoilRoot>
      <BrowserRouter>
      <App />    
      </BrowserRouter>
      </RecoilRoot>
    </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
