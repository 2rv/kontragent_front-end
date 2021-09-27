import { Dispatch } from 'redux';
import { AuthStoreAction } from './auth.type';

import { authDecode, setAutorization } from '../../../main/auth';
import { parseUserAuthData } from './auth.convert';
import { getCookie } from 'src/main/cookie';
import { AUTH_COOKIE } from 'src/main/auth/auth.constant';
import { AUTH_ACTION_TYPE } from '.';
import { redirect } from '../../../main/navigation/navigation.core';
import { httpRequest } from '../../../main/http';

export function authSetData(token: string | null = null) {
  const user = token ? parseUserAuthData(authDecode(token)) : null;

  setAutorization(token);

  const data: AuthStoreAction = {
    type: AUTH_ACTION_TYPE.SET_DATA,
    token,
    logged: !!token,
    user,
  };

  return (dispatch: Dispatch) => dispatch(data);
}

export function authGetCookieToken(ctx: any) {
  return getCookie(AUTH_COOKIE, ctx);
}

export function authLogout() {
  setAutorization(null);

  const data: AuthStoreAction = {
    type: AUTH_ACTION_TYPE.SET_DATA,
    token: null,
    logged: false,
    user: null,
  };

  return (dispatch: Dispatch) => {
    dispatch(data);
    return redirect('/');
  };
}

export function authUpdateUserData() {
  return async (dispatch) => {
    try {
      const res = await httpRequest({
        method: 'GET',
        url: '/auth/token',
      });

      dispatch(authSetData(res.data.accessToken));
    } catch (error) {
      console.log(error);
      if (error.response) {
        redirect('/error');
      }
    }
  };
}
