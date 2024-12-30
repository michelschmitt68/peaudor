import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: ${props => props.theme.colors.primary};
    --secondary-color: ${props => props.theme.colors.secondary};
    --background-color: ${props => props.theme.colors.dark};
    --light-background-color: ${props => props.theme.colors.lightBackground};
    --white: ${props => props.theme.colors.white};
    --dark: ${props => props.theme.colors.dark};
    --hover: ${props => props.theme.colors.hover};
  }

  /* Styles globaux pour le body */
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    background-color: var(--background-color);
    color: var(--white);
    overflow-x: hidden;
  }

  /* Gérer les transitions de pages */
  #root {
    position: relative;
    width: 100%;
    min-height: 100vh;
  }

  /* Liens par défaut */
  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    color: var(--hover);
  }
`;
