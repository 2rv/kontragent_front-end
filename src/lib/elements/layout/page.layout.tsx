import styled from 'styled-components';

import { PageLayoutPropsType } from './layout.type';

export function PageLayout(props: PageLayoutPropsType) {
  const align = props.align?.toLowerCase();
  return <Layout align={align}>{props.children}</Layout>;
}

const Layout = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: ${(p) => p.align || 'TOP'};
`;
