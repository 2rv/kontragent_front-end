import styled from 'styled-components';

import { text } from '../../common/text';

import { THEME_SIZE, THEME_COLOR, THEME_VALUE } from '../../theme';
import { TextPropsType } from './type.text';

export function SecondaryText(props: TextPropsType) {
  const { tid, tvalue, children, className } = props;

  return (
    <Text className={className}>{children ? children : text(tid, tvalue)}</Text>
  );
}

const Text = styled.span`
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT.SECONDARY};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.REGULAR};
`;
