import styled from 'styled-components';
import { InputErrorPropsType } from './type.error';
import { THEME_COLOR } from '../../theme';
import { THEME_SIZE } from '../../theme/theme.size';

export function ErrorMessage(props: InputErrorPropsType) {
  return <Error className={props.className}>{props.error}</Error>;
}

const Error = styled.span`
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.INPUT.ERROR_VALIDATION_MESSAGE};
`;
