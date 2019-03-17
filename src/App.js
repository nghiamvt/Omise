import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ModalManager } from 'src/components/modal';
import Search from 'src/pages/search';
import Detail from 'src/pages/search/detail';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fontFamily};
  }
`;

function App() {
  return (
    <ThemeProvider theme={{ fontFamily: 'Open Sans' }}>
      <React.Fragment>
        <Router>
          <Route path="/" exact component={Search} />
          <Route path="/detail" component={Detail} />
        </Router>
        <Normalize />
        <GlobalStyle />
        <ModalManager />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default hot(module)(App);
