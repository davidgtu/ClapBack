import React from 'react';
import styled from 'styled-components';
import { Emoji } from './emoji';

const EMOJIS = ['👏', '🔙']

export const Title = () => (
  <TitleContainer>
    {EMOJIS.map(icon =>
      <EmojiContainer key={icon}>
        <Emoji icon={icon} />
      </EmojiContainer>
    )}
  </TitleContainer>
);

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 64px;
  margin-bottom: 24px;

  img {
    width: 100px!important;
    height: 100px!important;
  }
`;

const EmojiContainer = styled.div`
  &:first-child {
    margin-right: 25px;
  }
`;
