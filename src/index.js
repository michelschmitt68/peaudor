
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { theme } from "./theme/theme";
import { GlobalStyle } from './theme/GlobalStyle';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const ignoreResizeObserverError = (error) => {
  // Vérifie si l'erreur existe et contient un message
  if (error && error.message && error.message.includes('ResizeObserver loop completed')) {
    return true; // Ignore this error
  }
  return false; // Allow other errors
};

// Gère les erreurs globales
window.addEventListener('error', (event) => {
  if (event.error && ignoreResizeObserverError(event.error)) {
    event.preventDefault(); // Empêche le comportement par défaut pour cette erreur
  }
});

// Gère les promesses rejetées non attrapées
window.addEventListener('unhandledrejection', (event) => {
  if (event.reason && ignoreResizeObserverError(event.reason)) {
    event.preventDefault(); // Empêche le comportement par défaut pour ce rejet
  }
});


root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
