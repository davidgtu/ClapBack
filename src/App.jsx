import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import TextInput from './components/TextInput';
import { MillenialPink } from './components/Colors';

const App = () => {
  const [view, setView] = useState('initialView');

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title />
        {view === 'initialView' && (
          <Subtitle proceed={() => setView('textView')} />
        )}
        {view === 'textView' && (
          <TextInput />
        )}
      </Container>
    </>
  )
};

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background-color: ${MillenialPink};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
