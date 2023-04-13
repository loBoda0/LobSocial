import React from 'react';
/* import ReactDOM from 'react-dom' */
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './App'
import './index.css'

/* ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')) */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
    <Router>
      <App />
    </Router>
  </GoogleOAuthProvider>
);
