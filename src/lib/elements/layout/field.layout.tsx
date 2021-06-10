import styled from 'styled-components';
import { spacing } from '../../theme';

import { GridLayoutPropsType } from './layout.type';

export function FieldLayout(props: GridLayoutPropsType) {
  const { type, children } = props;
  return <Layout type={type}>{children}</Layout>;
}

const Layout = styled.div`
  display: grid;
  grid-row-gap: ${spacing(2)};
  ${(props: GridLayoutPropsType) =>
    props.type === 'double'
      ? ` grid-column-gap: ${spacing(3)};
          grid-template-columns: 1fr 1fr `
      : ''}
`;
