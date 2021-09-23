import { httpRequest } from '../../main/http';

import {
  AUTH_SIGNUP_API,
  AUTH_SIGNUP_ACTION_TYPE,
} from './auth-signup.constant';

import { authSetData } from '../../lib/common/auth/auth.action';
import { redirect } from '../../main/navigation/navigation.core';

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

      await redirect('/auth/verification/email');

      dispatch({
        type: AUTH_SIGNUP_ACTION_TYPE.FORM_SUCCESS,
      });
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
