/// <reference types="vite/client" />

/* ToolBox500 — Conçu et maintenu par AYI AYITE ARYUS OBATOBY. */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Enregistrement du Service Worker uniquement en production
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch((error) => {
      console.error('Erreur lors de l’enregistrement du Service Worker :', error)
    })
  })
}