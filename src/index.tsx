import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// *** Provider wrapper for the entire app with store as prop
import { Provider } from 'react-redux';
import { store } from './app/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
