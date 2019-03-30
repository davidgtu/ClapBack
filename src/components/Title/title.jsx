import React from 'react';
import styled from 'styled-components';
import { Emoji } from './emoji';

export const Title = () => (
  <TitleContainer>
    {/* <p>{emoji('👏🔙', { baseUrl: '//twemoji.maxcdn.com/2/svg/', ext: '.svg', size: '' })}</p> */}
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
