import styled from 'styled-components';
import { THEME_COLOR } from '../../theme';

import { PrimaryButton } from './primary.button';

export const SecondaryButton: typeof PrimaryButton = styled(PrimaryButton)`
  color: ${THEME_COLOR.TEXT.BASE};
  background-color: ${THEME_COLOR.COLOR.PRIMARY};
`;
