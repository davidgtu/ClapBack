import React from 'react';
import styled from 'styled-components';

export const Title = () => (
  <TitleContainer>
    <span role="img" aria-label="clap">👏</span>
    <span role="img" aria-label="back">🔙</span>
  </TitleContainer>
);

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 48px;
`;