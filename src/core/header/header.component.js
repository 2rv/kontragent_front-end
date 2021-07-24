import Image from 'next/image';
import styled from 'styled-components';
import { THEME_COLOR, spacing, THEME_SIZE, THEME_VALUE } from '../../lib/theme';
import { SecondaryText } from '../../lib/elements/text';

import { ReactComponent as Menu } from '../../asset/svg/menu.svg';
import { ReactComponent as Close } from '../../asset/svg/close.svg';
import { ReactComponent as NotificatiobBellIcon } from '../../asset/svg/notificationBell.svg';
import { ReactComponent as SidebarLogo } from '../../asset/svg/sidebarLogo.svg';

export function HeaderComponent({ toggleSidebar, toggleSibearHandler }) {
  return (
    <Container>
      <Content girdColumns="1fr 5fr">
        <div onClick={toggleSibearHandler}>
          {toggleSidebar ? <CloseIcon /> : <MenuIcon />}
        </div>
        <KontragentText tid="Контрагент" />
      </Content>
      <Content>
        <NotificatiobBellIcon />
        <ImageContainer>
          <Image layout="fill" src="/static/img/headerAvatar.svg" priority={true} />
        </ImageContainer>
      </Content>
    </Container>
  );
}

const Content = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.girdColumns ?? '1fr 1fr'};
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

const KontragentText = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.BOLD};
  color: ${THEME_COLOR.TEXT.ACCENT};
`;

const ImageContainer = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
`;

const MenuIcon = styled(Menu)`
  cursor: pointer;
`;

const CloseIcon = styled(Close)`
  cursor: pointer;
`;
