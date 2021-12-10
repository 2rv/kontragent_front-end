import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { authLogout } from '../../lib/common/auth/auth.action';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { AuthLogoutComponent } from './auth-logout.component';

export function AuthLogoutContainer() {
  const dispatch = useDispatch();
  const { pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const setAuthLogout = () => {
    dispatch(authLogout());
  };

  return <AuthLogoutComponent onSubmitForm={setAuthLogout} pageLoading={pageLoading} />;
}
