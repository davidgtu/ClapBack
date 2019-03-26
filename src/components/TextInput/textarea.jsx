import React, { useState } from 'react';
import { Output } from './output';
import styled from 'styled-components';

const format = (text) => text.replace(/ /g, '👏')

export const Textarea = () => {
  const [text, setText] = useState('');
  const [pureText, setPureText] = useState('');
  const setTexts = (value) => {
    setText(format(value));
    setPureText(value);
  }

  return (
    <Container>
      <TextareaInput value={pureText} onChange={(e) => setTexts(e.target.value)} />
      <Output text={text} />
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
  max-width: 420px;
  margin: 0 auto;
`;

const TextareaInput = styled.textarea`

`;