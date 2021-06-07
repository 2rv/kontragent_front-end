import styled from 'styled-components';
import { THEME_COLOR } from '../../theme';

import { SecondaryText } from './secondary.text';

export const TertiaryText: typeof SecondaryText = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.TERTIARY};
`;
