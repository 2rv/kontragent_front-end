import styled from 'styled-components';

import { text } from '../../common/text';

import { THEME_SIZE, THEME_COLOR } from '../../theme';
import { TextPropsType } from './type.text';

export function SecondaryText(props: TextPropsType) {
  return (
    <Text className={props.className}>{text(props.tid)}</Text>
  );
}

const Text = styled.span`
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT_SECONDARY};
  font-weight: 400;
`;
