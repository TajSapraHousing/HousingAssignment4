import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.hydrateRoot(document.getElementById('root'), <App />);