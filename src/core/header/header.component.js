import Image from 'next/image';
import styled from 'styled-components';
import { THEME_COLOR, spacing, THEME_SIZE, THEME_VALUE } from '../../lib/theme';
import { SecondaryText } from '../../lib/elements/text';

import { ReactComponent as NotificatiobBellIcon } from '../../asset/svg/notificationBell.svg';
import { ReactComponent as SidebarLogo } from '../../asset/svg/sidebarLogo.svg';

export function HeaderComponent({ toggleSidebar, toggleSibearHandler }) {
  return (
    <Container>
      <Content>
        <Button onClick={toggleSibearHandler}>
          <Stick1 close={toggleSidebar} />
          <Stick2 close={toggleSidebar} />
          <Stick3 close={toggleSidebar} />
        </Button>
        <KontragentText tid="Контрагент" />
      </Content>
      <Content>
        <NotificatiobBellIcon />
        <ImageContainer>
          <Image
            layout="fill"
            src="/static/img/headerAvatar.svg"
            priority={true}
          />
        </ImageContainer>
      </Content>
    </Container>
  );
}
const Button = styled.button`
  display: flex;
  flex-flow: column;
  width: 30px;
  height: 30px;
  gap: 5px;
`;
const Stick1 = styled.div`
  width: 30px;
  height: 5px;
  background-color: ${THEME_COLOR.COLOR.PRIMARY};
  transition: 0.4s;
  ${(p) => p.close && 'transform: rotate(-45deg) translate(-9px, 9px);'}
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const Stick2 = styled(Stick1)`
  ${(p) => p.close && 'opacity: 0;'}
`;
const Stick3 = styled(Stick1)`
  ${(p) => p.close && 'transform: rotate(45deg) translate(-5px, -6px);'}
`;
const Content = styled.div`
  display: flex;
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
