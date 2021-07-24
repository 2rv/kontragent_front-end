import styled from 'styled-components';
import { THEME_COLOR } from '../../theme';
import { BasicButton } from './basic.button';

export const PrimaryButton: typeof BasicButton = styled(BasicButton)`
  background-color: ${THEME_COLOR.COLOR.PRIMARY};
`;
