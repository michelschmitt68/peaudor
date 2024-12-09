
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { theme } from "./theme/theme";
import { GlobalStyle } from './theme/GlobalStyle';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
