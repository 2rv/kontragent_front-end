import styled from 'styled-components';
import { THEME_COLOR } from 'src/lib/theme';

export function CicleDivider() {
  return <Divider />;
}

const Divider = styled.span`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
