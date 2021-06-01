import styled from 'styled-components';

import { PageLayoutPropsType } from './layout.type';

export function PageLayout(props: PageLayoutPropsType) {
  return <Layout align={props.align}>{props.children}</Layout>;
}

const Layout = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: ${(p: PageLayoutPropsType) =>
    p.align ? p.align.toLowerCase() : 'top'};
`;
