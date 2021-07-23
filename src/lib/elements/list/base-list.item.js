import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';
import { IndentLayout } from '../layout';
import { PrimaryBox } from '../box';

export function BaseListItem(props) {
  const { children, data, itemBackground } = props;
  return (
    <Container itemBackground={itemBackground}>
      <Layout type="STANDART">{children(data)}</Layout>
    </Container>
  );
}
const Container = styled(PrimaryBox)`
  border: 1px solid transparent;
  transition: border ${THEME_SIZE.TRANSACTION.DEFAULT} ease;
  :hover {
    border-color: ${THEME_COLOR.COLOR.LIGHT_GREY};
  }
  ${({ itemBackground }) =>
    itemBackground && `background-color: ${itemBackground};`}
`;
const Layout = styled(IndentLayout)`
  display: flex;
  align-items: center;
  min-width: fit-content;
`;
