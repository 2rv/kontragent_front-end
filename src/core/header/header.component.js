import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { THEME_COLOR, spacing, THEME_SIZE, THEME_VALUE } from '../../lib/theme';
import { SecondaryText, PrimaryText } from '../../lib/elements/text';
import { SecondaryButton } from '../../lib/elements/button';
import { ReactComponent as NotificationIcon } from '../../asset/svg/notification.svg';
import { ReactComponent as ExitIcon } from '../../asset/svg/exit.svg';
import { ReactComponent as FindIcon } from '../../asset/svg/find.svg';
import { PrimaryLink } from 'src/lib/elements/link';
import { LOGIN_ROUTE_PATH } from '../login';

export function HeaderComponent(props) {
  const { toggleSidebar, toggleSidebarHandler, isAuth, isMainPage } = props;
  if (isAuth) {
    return (
      <Container>
        <Content>
          {!isMainPage && (
            <Button onClick={toggleSidebarHandler}>
              <Stick1 close={toggleSidebar} />
              <Stick2 close={toggleSidebar} />
              <Stick3 close={toggleSidebar} />
            </Button>
          )}
          <KontragentText tid="Контрагент" />
        </Content>
        <Content>
          <LoginLinkText tid="Выход" pathname={'/logout'}>
            <ExitIcon />
          </LoginLinkText>
          <Find />
          <NotificationIcon />
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
      <KontragentText tid="Контрагент" />
      <Content>
        <LoginLinkText tid="Возможности" />
        <LoginLinkText tid="Цены" />
        <LoginLinkText tid="Зачем сверяться" />
      </Content>
      <Content>
        <LoginLinkText tid="Войти" pathname={LOGIN_ROUTE_PATH} />
        <SendRequestButton tid="Отправить заявку" />
      </Content>
    </Container>
  );
}
const Find = styled(FindIcon)`
  height: 23px;
  width: 23px;
  fill: ${THEME_COLOR.TEXT.PRIMARY};
`;
const Button = styled.button`
  display: flex;
  flex-flow: column;
  width: 30px;
  height: 30px;
  justify-content: space-between;
`;
const Stick1 = styled.div`
  width: 30px;
  min-height: 5px;
  max-height: 5px;
  background-color: ${THEME_COLOR.COLOR.PRIMARY};
  transition: 0.4s;
  ${(p) => p.close && 'transform: rotate(-45deg) translate(-9px, 9px);'}
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const Stick2 = styled(Stick1)`
  ${(p) => p.close && 'opacity: 0;'}
`;
const Stick3 = styled(Stick1)`
  ${(p) => p.close && 'transform: rotate(45deg) translate(-8px, -9px);'}
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
const LoginLinkText = styled(PrimaryLink)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;
