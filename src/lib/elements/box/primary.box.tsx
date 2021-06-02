import styled from 'styled-components';

import { PrimaryBoxPropsType } from './type.box';

import { THEME_SIZE, THEME_COLOR } from '../../theme';

export function PrimaryBox(props: PrimaryBoxPropsType) {
  return <Box>{props.children}</Box>;
}

const Box = styled.div`
  border-radius: ${THEME_SIZE.RADIUS.BOX};
  background-color: ${THEME_COLOR.COLOR.BASE};
`;
