import { keyframes } from 'styled-components';

export { THEME_COLOR } from './theme.color';
export { THEME_SIZE } from './theme.size';

export const spacing = (num) => `${4 * Number(num)}px`;

export const fade = keyframes`
  from {
    opacity: 0;
  }
`;
