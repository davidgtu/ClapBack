import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { TextareaStyles } from './styles';
import { disabledGray, borderGray } from '../styles';

export const Output = ({ text }) => {
  const outputTextarea = useRef(null);
  useEffect(() => { outputTextarea.current.scrollTop = outputTextarea.current.scrollHeight })

  return (
    <TextareaContainer>
      <Textarea
        ref={outputTextarea}
        value={text}
        placeholder="We'll provide the applause"
        readOnly
      />
    </TextareaContainer>
  );
};

const Textarea = styled.textarea`
  ${TextareaStyles}
  background-color: ${disabledGray};
`;

const TextareaContainer = styled.div`
  box-shadow: inset 1px 1px 3px 0 ${borderGray};
  border: solid 1px ${borderGray};
  background-color: ${disabledGray};
  padding: 16px 20px;
`;