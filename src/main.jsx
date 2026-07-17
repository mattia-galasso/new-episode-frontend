import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";

// APP
import App from './App.jsx'

// GENERAL CSS
import './assets/css/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
