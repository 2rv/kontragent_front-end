import styled from 'styled-components';
import { THEME_COLOR, THEME_SIZE } from 'src/lib/theme';

export function CircleDivider() {
  return <Divider />;
}

const Divider = styled.span`
  min-width: 4px;
  min-height: 4px;
  max-width: 4px;
  max-height: 4px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
  background-color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
