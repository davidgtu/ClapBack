import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import TextInput from './components/TextInput';
import { white } from './components/styles';

const App = () => (
  <>
    <GlobalStyle />
    <BodyContainer>
      <Container>
        <Title />
        <Subtitle />
        <TextInput />
      </Container>
    </BodyContainer>
  </>
);

export default App;

const BodyContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  background: ${white};
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;
  padding: 90px 0;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
`;
