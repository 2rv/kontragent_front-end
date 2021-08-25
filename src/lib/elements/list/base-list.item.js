import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';
import { IndentLayout } from '../layout';
import { PrimaryBox } from '../box';
import { setLinkRedirect } from '../../../main/navigation';

export function BaseListItem(props) {
  const { children, data, itemBackground, pathname, dynamicId } = props;

  return (
    <a
      onClick={
        pathname &&
        setLinkRedirect(
          pathname,
          dynamicId && { query: { [dynamicId]: data[dynamicId] } },
        )
      }
    >
      <Container itemBackground={itemBackground} pathname={pathname}>
        <Layout type="STANDART">{children(data)}</Layout>
      </Container>
    </a>
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
  ${({ pathname }) => pathname && `cursor: pointer;`}
`;
const Layout = styled(IndentLayout)`
  display: flex;
  align-items: center;
  min-width: fit-content;
`;
