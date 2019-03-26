import React from 'react';
import styled from 'styled-components';
import { Emoji } from './emoji';

const emojiData = [
  { role: 'img', ariaLabel: 'clap', icon: '👏' },
  { role: 'img', ariaLabel: 'back', icon: '🔙' },
]

export const Title = () => (
  <TitleContainer>
    {emojiData.map(({ role, ariaLabel, icon }) =>
      <Emoji role={role} aria-label={ariaLabel} icon={icon} key={ariaLabel} />
    )}
  </TitleContainer>
);

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 64px;
`;
