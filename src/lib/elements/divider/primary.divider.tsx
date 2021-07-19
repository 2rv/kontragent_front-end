import styled from 'styled-components';
import { THEME_COLOR, THEME_SIZE } from '../../theme';

import { PrimaryDividerPropsType } from './type.divider';

export function PrimaryDivider(props: PrimaryDividerPropsType) {
  const { className } = props;
  return <Divider className={className} />;
}

const Divider = styled.div`
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-color: ${THEME_COLOR.COLOR.SECONDARY};
  min-height: 2px;
  height: 2px;
  display: grid;
`;
