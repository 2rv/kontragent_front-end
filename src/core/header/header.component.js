import { HeaderNotificationContainer } from './frame/header-notification';
import { HeaderProfileContainer } from './frame/header-profile';

import styled from 'styled-components';
import { THEME_COLOR, spacing } from '../../lib/theme';

export function HeaderComponent() {
  return (
    <HeaderContainer>
      <HeaderContentLayout>
        <HeaderNotificationContainer />
        <HeaderProfileContainer imageURL="/static/img/headerAvatar.svg" />
      </HeaderContentLayout>
    </HeaderContainer>
  );
}

const HeaderContentLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${spacing(6)};
  padding-right: ${spacing(10)};
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 95px;
  background-color: ${THEME_COLOR.COLOR.BASE};
`;
