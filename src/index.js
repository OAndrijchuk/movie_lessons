import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
  </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
