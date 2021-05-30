import styled from 'styled-components';

import { ButtonPrimaryPropsType } from './type.button';

import { THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';

import { spacing } from '../../theme';
import { text } from '../../common/text';

export function PrimaryButton(props: ButtonPrimaryPropsType) {
  const { tid, disabled, type = 'submit', className } = props;

  return (
    <Button type={type} className={className} disabled={disabled}>
      {text(tid)}
    </Button>
  );
}

const Button = styled.button`
  background-color: ${THEME_COLOR.COLOR.ACCENT};
  color: ${THEME_COLOR.TEXT.BASE};
  border-radius: ${THEME_SIZE.RADIUS.BUTTON};
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  padding: ${spacing(4)};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  ${(props) => props.disabled && `opacity:${THEME_VALUE.OPACITY.DISABLE}`};
`;
