import styled from 'styled-components';
import { THEME_COLOR } from '../../theme';
import { BasicButton } from './basic.button';

export const SecondaryButton: typeof BasicButton = styled(BasicButton)`
  background-color: ${THEME_COLOR.COLOR.ACCENT};
`;
