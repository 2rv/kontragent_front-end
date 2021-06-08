import styled from 'styled-components';
import { THEME_COLOR } from '../../theme';

import { PrimaryButton } from './primary.button';

export const BasicButton: typeof PrimaryButton = styled(PrimaryButton)`
  color: ${THEME_COLOR.TEXT.PRIMARY};
  background-color: ${THEME_COLOR.COLOR.SECONDARY};
`;
