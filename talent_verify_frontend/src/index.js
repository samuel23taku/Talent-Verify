import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Modal from 'react-modal';

// Set appElement for react-modal
Modal.setAppElement('#root'); // Ensure this matches your root element ID
// Create root and render your application
const root = createRoot(document.getElementById('root'));
root.render(
    <App />
);

// Measure performance if needed
reportWebVitals();
