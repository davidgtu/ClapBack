import React, { useState } from 'react';
import styled from 'styled-components';
import { Output } from './output';
import { TextareaStyles } from './styles';
import { borderGray } from '../styles';
import { CloseIcon } from '../icons';

const format = (text) => text.replace(/ /g, '👏')

export const Textarea = () => {
  const [text, setText] = useState('');
  const [pureText, setPureText] = useState('');
  const setTexts = (value) => {
    setText(format(value));
    setPureText(value);
  }

  const clearText = () => {
    setText('');
    setPureText('');
  }

  return (
    <Container>
      <TextareaContainer>
        {!!pureText && <StyledCloseIcon onClick={clearText} />}
        <TextareaInput value={pureText} onChange={(e) => setTexts(e.target.value)} />
      </TextareaContainer>
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
`;

const TextareaContainer = styled.div`
  box-shadow: inset 1px 1px 3px 0 ${borderGray};
  border: solid 1px ${borderGray};
  padding: 16px 30px 16px 16px;
  margin-right: 9px;
  position: relative;
`;

const StyledCloseIcon = styled(CloseIcon)`
  width: 13px;
  height: 13px;
  position: absolute;
  right: 0;
  top: 12px;
  padding: 13px;
  cursor: pointer;
`;