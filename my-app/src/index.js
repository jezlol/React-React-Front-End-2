import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Ensure this file exists or remove the import
import App from './Apps';  // Update to match your 'Apps.jsx' file
import reportWebVitals from './reportWebVitals';  // Remove if not needed

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you are using reportWebVitals, keep this line, otherwise remove it
reportWebVitals();
