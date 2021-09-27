import React from 'react';

import { useDispatch } from 'react-redux';
import { authLogout } from '../../lib/common/auth/auth.action';
import { AuthLogoutComponent } from './auth-logout.component';

export function AuthLogoutContainer() {
  const dispatch = useDispatch();

  const setAuthLogout = () => {
    dispatch(authLogout());
  };

  return <AuthLogoutComponent onSubmitForm={setAuthLogout} />;
}
