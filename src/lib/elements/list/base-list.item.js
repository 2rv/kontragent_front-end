import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';
import { IndentLayout } from '../layout';
import { PrimaryBox } from '../box';

export function BaseListItem(props) {
  const { children, data } = props;
  return (
    <Container>
      <Layout type="STANDART">{children(data)}</Layout>
    </Container>
  );
}
const Container = styled(PrimaryBox)`
  border: 1px solid transparent;
  :hover {
    border: 1px solid ${THEME_COLOR.COLOR.LIGHT_GREY};
  }
  transition: border ${THEME_SIZE.TRANSACTION.DEFAULT} ease;
`;
const Layout = styled(IndentLayout)`
  height: 80px;
  display: grid;
  align-items: center;
`;
