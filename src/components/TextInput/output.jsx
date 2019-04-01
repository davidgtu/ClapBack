import React from 'react';
import styled from 'styled-components';
import { TextareaStyles } from './styles';

export const Output = ({ text }) => (
  <Textarea value={text} readOnly>{text}</Textarea>
)

const Textarea = styled.textarea`
  ${TextareaStyles}
`;