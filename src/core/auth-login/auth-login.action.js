import { httpRequest } from '../../main/http';

import { AUTH_LOGIN_API, AUTH_LOGIN_ACTION_TYPE } from './auth-login.constant';

import { authSetData } from '../../lib/common/auth/auth.action';
import { redirect } from '../../main/navigation/navigation.core';

export function uploadAuthLoginForm(data) {
  return async (dispatch) => {
    dispatch({
      type: AUTH_LOGIN_ACTION_TYPE.FORM_PENDING,
    });

    try {
      const res = await httpRequest({
        method: AUTH_LOGIN_API.AUTH_LOGIN.TYPE,
        url: AUTH_LOGIN_API.AUTH_LOGIN.ENDPOINT,
        data,
      });
      dispatch(authSetData(res.data.accessToken));

      redirect('/').then(() => {
        dispatch({
          type: AUTH_LOGIN_ACTION_TYPE.FORM_SUCCESS,
        });
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: AUTH_LOGIN_ACTION_TYPE.FORM_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}

export function cleanupStore() {
  return {
    type: AUTH_LOGIN_ACTION_TYPE.FORM_CLEANUP,
  };
}
