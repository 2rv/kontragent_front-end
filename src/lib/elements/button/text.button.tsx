import styled from 'styled-components';

import { TextButtonPropType } from './type.button';

import { THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';

import { text } from '../../common/text';

export function TextButton(props: TextButtonPropType) {
  const { tid, disabled, className } = props;

  return (
    <Button className={className} disabled={disabled}>
      {text(tid)}
    </Button>
  );
}

const Button = styled.button`
  background-color: none;
  color: ${THEME_COLOR.TEXT.PRIMARY};
  font-size: ${THEME_SIZE.FONT.SMALL};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  ${(props) =>
    props.disabled
      ? `opacity:${THEME_VALUE.OPACITY.DISABLE}`
      : `&:hover {
          opacity: ${THEME_VALUE.OPACITY.HOVER};
        }`};
`;
