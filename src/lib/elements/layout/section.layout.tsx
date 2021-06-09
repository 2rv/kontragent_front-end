import styled from 'styled-components';

import { SectionLayoutPropsType } from './layout.type';

import { THEME_SIZE } from '../../theme';

export function SectionLayout(props: SectionLayoutPropsType) {
  return <Layout type={props.type}>{props.children}</Layout>;
}

const Layout = styled.div`
  display: grid;
  gap: ${(p: SectionLayoutPropsType) =>
    p.type ? THEME_SIZE.SECTION[p.type] : THEME_SIZE.SECTION.DEFAULT};
`;
