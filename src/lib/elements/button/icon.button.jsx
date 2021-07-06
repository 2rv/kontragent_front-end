import styled from 'styled-components';

import { THEME_COLOR, THEME_SIZE, THEME_VALUE, spacing } from '../../theme';
import { text } from '../../common/text';

export function IconButton(props) {
  const { tid, disabled, type = 'button', className, icon: Icon } = props;

  return (
    <Button type={type} className={className} disabled={disabled}>
      {text(tid)}
      <Icon />
    </Button>
  );
}

const Button = styled.button`
  fill: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${THEME_COLOR.TEXT.BASE};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  ${(props) =>
    props.disabled
      ? `opacity:${THEME_VALUE.OPACITY.DISABLE}`
      : `&:hover {
          opacity: ${THEME_VALUE.OPACITY.HOVER};
        }`};
`;
