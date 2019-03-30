import React from 'react';
import styled from 'styled-components';
import { Emoji } from './emoji';

export const Title = () => (
  <TitleContainer>
    <Emoji icons='👏🔙' />
  </TitleContainer>
);

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 64px;

  img {
    width: 100px!important;
    height: 100px!important;
  }
`;
