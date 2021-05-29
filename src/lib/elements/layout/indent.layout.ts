import styled from 'styled-components';
import { THEME_SIZE } from '../../theme';

export const IndentLayout = styled.div`
  padding: ${(p) => THEME_SIZE.INDENT[p.type] || THEME_SIZE.INDENT.DEFAULT};
  width: 100%;
`;
