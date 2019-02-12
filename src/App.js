import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { hot } from 'react-hot-loader';
import Home from 'src/pages/home';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fontFamily};
  }
`;

function App() {
  return (
    <ThemeProvider theme={{ fontFamily: 'Open Sans' }}>
      <React.Fragment>
        <Home />
        <Normalize />
        <GlobalStyle />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default hot(module)(App);
