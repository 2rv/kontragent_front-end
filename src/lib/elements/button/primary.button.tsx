import styled from 'styled-components';

import { ButtonPropsType } from './type.button';

import { THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';

import { spacing } from '../../theme';
import { text } from '../../common/text';

export function PrimaryButton(props: ButtonPropsType) {
  const { tid, disabled, type = 'submit', className } = props;

  return (
    <Button type={type} className={className} disabled={disabled}>
      {text(tid)}
    </Button>
  );
}

const Button = styled.button`
  background-color: ${THEME_COLOR.COLOR.ACCENT};
  width: 100%;
  color: ${THEME_COLOR.TEXT.BASE};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  padding: ${spacing(4)};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  ${(props) =>
    props.disabled
      ? `opacity:${THEME_VALUE.OPACITY.DISABLE}`
      : `&:hover {
          opacity: ${THEME_VALUE.OPACITY.HOVER};
        }`};
  transition: opacity ${THEME_SIZE.TRANSACTION.DEFAULT};
`;
