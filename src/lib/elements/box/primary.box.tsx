import styled from 'styled-components';

import { PrimaryBoxPropsType } from './type.box';

import { THEME_SIZE, THEME_COLOR } from '../../theme';

import { spacing } from '../../theme';

export function PrimaryBox(props: PrimaryBoxPropsType) {
  return <Box>{props.children}</Box>;
}

const Box = styled.div`
  border-radius: ${THEME_SIZE.RADIUS.PRIMARY_BOX};
  background-color: ${THEME_COLOR.BOX.PRIMARY.BACKGROUND_COLOR};
  padding: ${spacing(8)};
  margin: 0 auto;
`;
