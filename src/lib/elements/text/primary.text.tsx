import styled from 'styled-components';

import { TextPropsType } from './type.text';

import { THEME_SIZE, THEME_COLOR, THEME_VALUE } from '../../theme';

import { text } from '../../common/text';

export function PrimaryText(props: TextPropsType) {
  return (
    <Text className={props.className}>{text(props.tid, props.tvalue)}</Text>
  );
}

const Text = styled.span`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  color: ${THEME_COLOR.TEXT.PRIMARY};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.REGULAR};
`;
