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
`;
