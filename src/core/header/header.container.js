import { HeaderComponent } from './header.component';
import { AUTH_STORE_NAME } from '../../lib/common/auth';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useRouter } from 'next/router';

export function HeaderContainer({ toggleSidebar, toggleSidebarHandler }) {
  const { pathname } = useRouter();
  const { isAuth, state } = useSelector((state) => ({
    isAuth: state[AUTH_STORE_NAME].logged,
    state: state[AUTH_STORE_NAME],
  }));
  return (
    <HeaderComponent
      toggleSidebar={toggleSidebar}
      toggleSidebarHandler={toggleSidebarHandler}
      isAuth={isAuth}
      isMainPage={pathname === '/'}
    />
  );
}
