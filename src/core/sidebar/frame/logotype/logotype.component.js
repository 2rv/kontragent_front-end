import styled from 'styled-components';
import { THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../../../lib/theme';

import { TextButton } from '../../../../lib/elements/button';

export function LogotypeComponent() {
  return (
    <LogotypeComponentContainer>
      <LogotypeComponentButton pathname="">Контраген</LogotypeComponentButton>
    </LogotypeComponentContainer>
  );
}

const LogotypeComponentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const LogotypeComponentButton = styled(TextButton)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.BOLD};
  font-size: ${THEME_SIZE.FONT.LARGE};
  color: ${THEME_COLOR.TEXT.ACCENT};
`;
