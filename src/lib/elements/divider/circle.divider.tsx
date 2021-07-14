import styled from 'styled-components';
import { THEME_COLOR, THEME_SIZE } from 'src/lib/theme';

export function CircleDivider() {
  return <Divider />;
}

const Divider = styled.span`
  width: 4px;
  height: 4px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
  background-color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
