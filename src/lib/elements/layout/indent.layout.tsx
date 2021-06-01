import styled from 'styled-components';

import { IndentLayoutPropsType } from './layout.type';

import { THEME_SIZE } from '../../theme';

export function IndentLayout(props: IndentLayoutPropsType) {
  const type = props.type?.toUpperCase();
  return <Layout type={type}>{props.children}</Layout>;
}

const Layout = styled.div`
  padding: ${(p) => THEME_SIZE.INDENT[p.type] || THEME_SIZE.INDENT.DEFAULT};
  width: 100%;
`;
