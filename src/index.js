
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { theme } from "./theme/theme";
import { GlobalStyle } from './theme/GlobalStyle';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Ignore ResizeObserver errors
const ignoreResizeObserverError = (error) => {
  if (error.message && error.message.includes('ResizeObserver loop completed')) {
    return true; // Ignore this error
  }
  return false; // Allow other errors
};

window.addEventListener('error', (event) => {
  if (ignoreResizeObserverError(event.error)) {
    event.preventDefault();
  }
});

window.addEventListener('unhandledrejection', (event) => {
  if (ignoreResizeObserverError(event.reason)) {
    event.preventDefault();
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
