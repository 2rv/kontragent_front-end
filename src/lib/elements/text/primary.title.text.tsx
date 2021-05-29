import styled from 'styled-components';

import { TextPropsType } from './type.text';

import { THEME_SIZE, THEME_COLOR, THEME_VALUE } from '../../theme';

import { text } from '../../common/text';

export function PrimaryTitleText(props: TextPropsType) {
  return (
    <Title className={props.className}>{text(props.tid, props.tvalue)}</Title>
  );
}

const Title = styled.h2`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  color: ${THEME_COLOR.TEXT.PRIMARY};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.BOLD};
`;
