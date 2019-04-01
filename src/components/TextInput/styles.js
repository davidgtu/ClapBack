import { css } from 'styled-components';
import { white, borderGray } from '../styles';

export const TextareaStyles = css`
  width: 365px;
  height: 224px;
  border-radius: 3px;
  box-shadow: inset 1px 1px 3px 0 ${borderGray};
  border: solid 1px ${borderGray};
  background-color: ${white};
  font-size: 22px;
  padding: 16px 20px;
`;