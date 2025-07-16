<<<<<<< HEAD

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Buffer } from 'buffer';

// Polyfill for wallet-adapter and other Solana libraries
// This is required for some Solana libraries that expect Buffer to be a global.
declare global {
  interface Window {
    Buffer: typeof Buffer;
  }
}
window.Buffer = Buffer;
>>>>>>> 2159ef1c79b15ebe65f713f30fc425982661d7c2

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);