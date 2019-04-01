import React, { useState } from 'react';
import styled from 'styled-components';
import { Output } from './output';
import { TextareaStyles } from './styles';
// import { DEFAULT_TEXT } from './static';

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
  margin: 45px auto 0;
  display: flex;
  justify-content: center;
`;

const TextareaInput = styled.textarea`
  ${TextareaStyles}
  margin-right: 9px;
`;