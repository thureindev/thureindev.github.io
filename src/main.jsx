import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './main.css';
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Because GH Pages doen not work well with BrowserRouter */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
