import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { THEME_COLOR, spacing, THEME_SIZE, THEME_VALUE } from '../../lib/theme';
import { SecondaryText, PrimaryText } from '../../lib/elements/text';
import { SecondaryButton } from '../../lib/elements/button';

import { ReactComponent as NotificatiobBellIcon } from '../../asset/svg/notificationBell.svg';
import { ReactComponent as SidebarLogo } from '../../asset/svg/sidebarLogo.svg';

export function HeaderComponent({ toggleSidebar, toggleSidebarHandler }) {
  const { pathname } = useRouter();
  const [ isAuthenticated, setIsAuthenticated ] = React.useState(false);

  React.useEffect(() => {
    const userToken = localStorage.getItem('token');
    setIsAuthenticated(!!userToken);
  }, []);

  if (isAuthenticated) {
    return (
      <Container>
        <Content>
          {pathname !== '/' && (
            <Button onClick={toggleSidebarHandler}>
              <Stick1 close={toggleSidebar} />
              <Stick2 close={toggleSidebar} />
              <Stick3 close={toggleSidebar} />
            </Button>
          )}
          <KontragentText tid="Контрагент" />
        </Content>
        <Content>
          <div onClick={() => setIsAuthenticated(false)}>
            <HeaderText tid="Выйти" />
          </div>
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

  return (
    <Container>
      <Content>
        <HeaderText tid="Возможности" />
        <HeaderText tid="Цены" />
        <HeaderText tid="Зачем сверяться" />
      </Content>
      <Content>
        <div onClick={() => setIsAuthenticated(true)}>
          <HeaderText tid="Войти" />
        </div>
        <SendRequestButton tid="Отправить заявку" />
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
  align-items: center;
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

const SendRequestButton = styled(SecondaryButton)`
  color: ${THEME_COLOR.COLOR.ACCENT};
  background-color: transparent;
  border-radius: 100px;
  border: 3px solid ${THEME_COLOR.COLOR.ACCENT};
`;

const HeaderText = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  cursor: pointer;
`;
