import styled from 'styled-components';
import { THEME_SIZE, THEME_VALUE } from '../../theme';

import { PrimaryTitleText } from './primary.title.text';

export const SecondaryTitleText: typeof PrimaryTitleText = styled(
  PrimaryTitleText,
)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;
