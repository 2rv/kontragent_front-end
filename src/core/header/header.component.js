import {
  HeaderNotificationContainer,
  HeaderProfileContainer,
  LogotypeContainer,
} from './frame';
import styled from 'styled-components';
import { THEME_COLOR, spacing } from '../../lib/theme';

export function HeaderComponent() {
  return (
    <Container>
      <LogotypeContainer />
      <Content>
        <HeaderNotificationContainer />
        <HeaderProfileContainer imageURL="/static/img/headerAvatar.svg" />
      </Content>
    </Container>
  );
}

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing(6)};
`;

const Container = styled.div`
  padding: ${spacing(8)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  background-color: ${THEME_COLOR.COLOR.BASE};
`;
