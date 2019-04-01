import React from 'react';
import styled from 'styled-components';

export const Subtitle = () => (
  <Container>
    <SubtitleText>go ahead, #throwshade</SubtitleText>
  </Container>
);

const Container = styled.div`
  text-align: center;
`;

const SubtitleText = styled.h2`
  font-size: 42px;
  font-weight: 200;
  margin-top: 24px;
`;