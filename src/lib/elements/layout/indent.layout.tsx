import styled from 'styled-components';

import { IndentLayoutPropsType } from './layout.type';

import { THEME_SIZE } from '../../theme';

export function IndentLayout(props: IndentLayoutPropsType) {
  return (
    <Layout className={props.className} type={props.type}>
      {props.children}
    </Layout>
  );
}

const Layout = styled.div`
  padding: ${(p: IndentLayoutPropsType) =>
    p.type ? THEME_SIZE.INDENT[p.type] : THEME_SIZE.INDENT.DEFAULT};
  width: 100%;
`;
