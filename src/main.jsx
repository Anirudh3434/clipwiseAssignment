import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';  // Import Provider from react-redux
import App from './App.jsx';
import './index.css';
import store from './redux/store.js';  // Import the Redux store

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrap the App with the Provider and pass in the store */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
