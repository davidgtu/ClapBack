import React from 'react';
import styled from 'styled-components';

export const Subtitle = ({ proceed }) => (
  <Container>
    <SubtitleText>for shade throwing</SubtitleText>
    <button onClick={proceed}>#throwshade</button>
  </Container>
);

const Container = styled.div`
  text-align: center;
`;

const SubtitleText = styled.h2`
  font-size: 42px;
`;