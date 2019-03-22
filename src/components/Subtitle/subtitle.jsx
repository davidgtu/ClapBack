import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Subtitle = () => (
  <Container>
    <h2>Got something to say?</h2>
    <Link to="/clap">
      I got somethin' to say
    </Link>
  </Container>
);

const Container = styled.div`
  text-align: center;
`;
