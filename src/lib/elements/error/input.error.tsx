import styled from 'styled-components';
import { InputErrorPropsType } from './type.error';
import { THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';

export function ErrorMessage(props: InputErrorPropsType) {
  return <Error className={props.className}>{props.error}</Error>;
}

const Error = styled.span`
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT.VALIDATION};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.REGULAR};
`;
