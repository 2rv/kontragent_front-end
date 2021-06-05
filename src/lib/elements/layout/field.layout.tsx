import styled from 'styled-components';
import { spacing } from '../../theme';

import { FieldLayoutPropsType } from './layout.type';

export function FieldLayout(props: FieldLayoutPropsType) {
  const { type, children } = props;
  return <Layout type={type}>{children}</Layout>;
}

const Layout = styled.div`
  display: grid;
  grid-template-columns: ${(props: FieldLayoutPropsType) =>
    props.type === 'double' ? '1fr 1fr' : ''};
  justify-content: end;
  gap: ${spacing(2)};
`;
