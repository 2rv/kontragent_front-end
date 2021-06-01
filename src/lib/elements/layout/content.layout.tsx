import styled from 'styled-components';

import { ContentLayoutPropsType } from './layout.type';

import { THEME_SIZE } from '../../theme';

export function ContentLayout(props: ContentLayoutPropsType) {
  return <Layout type={props.type}>{props.children}</Layout>;
}

const Layout = styled.div`
  width: ${(p: ContentLayoutPropsType) =>
    p.type ? THEME_SIZE.LAYOUT[p.type] : THEME_SIZE.LAYOUT.DEFAULT};
  margin: 0 auto;
`;
