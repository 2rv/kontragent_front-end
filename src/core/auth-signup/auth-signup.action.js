import { httpRequest } from '../../main/http';

import {
  AUTH_SIGNUP_API,
  AUTH_SIGNUP_ACTION_TYPE,
} from './auth-signup.constant';

import { authSetData } from '../../lib/common/auth/auth.action';
import { redirect } from '../../main/navigation/navigation.core';

import { AUTH_VERIFICATION_EMAIL_ROUTE_PATH } from '../auth-verification-email';

export function uploadAuthSignupForm(data) {
  return async (dispatch) => {
    dispatch({
      type: AUTH_SIGNUP_ACTION_TYPE.FORM_PENDING,
    });

    try {
      const res = await httpRequest({
        method: AUTH_SIGNUP_API.AUTH_SIGNUP.TYPE,
        url: AUTH_SIGNUP_API.AUTH_SIGNUP.ENDPOINT,
        data,
      });
      dispatch(authSetData(res.data.accessToken));

      dispatch({
        type: AUTH_SIGNUP_ACTION_TYPE.FORM_SUCCESS,
      });

      redirect(AUTH_VERIFICATION_EMAIL_ROUTE_PATH);
    } catch (error) {
      if (error) {
        dispatch({
          type: AUTH_SIGNUP_ACTION_TYPE.FORM_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}

export function cleanupStore() {
  return {
    type: AUTH_SIGNUP_ACTION_TYPE.FORM_CLEANUP,
  };
}
