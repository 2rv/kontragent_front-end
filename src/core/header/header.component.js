import React from 'react';
import styled from 'styled-components';
import { THEME_COLOR, spacing, THEME_SIZE, THEME_VALUE } from '../../lib/theme';
import {
  SecondaryText,
  PrimaryText,
  PrimaryTitleText,
} from '../../lib/elements/text';
import {
  BasicButton,
  IconButton,
  SecondaryButton,
} from '../../lib/elements/button';
import { ReactComponent as ExitIcon } from '../../asset/svg/exit.svg';
import { ReactComponent as FindIcon } from '../../asset/svg/find.svg';
import { PrimaryLink } from 'src/lib/elements/link';
import { LOGIN_ROUTE_PATH } from '../login';
import { Notification } from './frame';

export function HeaderComponent(props) {
  const {
    toggleSidebar,
    toggleSidebarHandler,
    isAuth,
    isMainPage,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    notificationListData,
  } = props;
  return (
    <Container>
      {isAuth ? (
        <Content>
          <Case>
            {!isMainPage && (
              <MenuButton onClick={toggleSidebarHandler}>
                <Stick1 close={toggleSidebar} />
                <Stick2 close={toggleSidebar} />
                <Stick3 close={toggleSidebar} />
              </MenuButton>
            )}
            <LogoText tid="Контрагент" />
          </Case>
          <Case>
            {/* <PrimaryLink tid="Выход" pathname={'/logout'}>
              <ExitIcon />
            </PrimaryLink> */}
            <Notification notificationListData={notificationListData} />
            <Find />
            <Avatar src="/static/img/headerAvatar.svg" />
          </Case>
        </Content>
      ) : (
        <Content>
          <Case>
            <LogoText tid="Контрагент" />
            <HeaderLink tid="Возможности" />
            <HeaderLink tid="Цены" />
            <HeaderLink tid="Зачем сверяться" />
          </Case>
          <Case>
            <HeaderLink tid="Войти" pathname={LOGIN_ROUTE_PATH} />
            <RequestButton tid="Отправить заявку" />
          </Case>
        </Content>
      )}
    </Container>
  );
}

const RequestButton = styled(BasicButton)`
  color: ${THEME_COLOR.COLOR.ACCENT};
  border-radius: 100px;
  width: max-content;
  border: 3px solid ${THEME_COLOR.COLOR.ACCENT};
`;
const HeaderLink = styled(PrimaryLink)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  width: max-content;
`;

const Find = styled(FindIcon)`
  height: 23px;
  width: 23px;
  fill: ${THEME_COLOR.TEXT.PRIMARY};
`;

const Avatar = styled.img`
  min-width: 30px;
  width: 30px;
  height: 30px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const LogoText = styled(PrimaryTitleText)`
  color: ${THEME_COLOR.TEXT.ACCENT};
`;

const MenuButton = styled.button`
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

const Case = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(8)};
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(8)};
  justify-content: space-between;
  overflow: auto;
`;
const Container = styled.div`
  padding: ${spacing(8)};
  height: 100px;
  width: 100%;
  background-color: ${THEME_COLOR.COLOR.BASE};
`;
