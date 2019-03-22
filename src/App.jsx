import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Title from './components/Title';
import Subtitle from './components/Subtitle';


const App = () => (
  <>
    <GlobalStyle />
    <Container>
      <Title />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Subtitle}/>
        </Switch>
      </BrowserRouter>
    </Container>
  </>
);

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
