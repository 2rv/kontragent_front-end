import { httpRequest } from '../../main/http';

import {
  AUTH_VERIFICATION_EMAIL_API,
  AUTH_VERIFICATION_EMAIL_ACTION_TYPE,
} from './auth-verification-email.constant';

import { authUpdateUserData } from '../../lib/common/auth/auth.action';
import { redirect } from '../../main/navigation/navigation.core';

import { AUTH_VERIFICATION_PHONE_ROUTE_PATH } from '../auth-verification-phone';

export function verificationEmailFormFetchData(data, code) {
  return async (dispatch) => {
    dispatch({
      type: AUTH_VERIFICATION_EMAIL_ACTION_TYPE.FORM_PENDING,
    });

    try {
      await httpRequest({
        method: AUTH_VERIFICATION_EMAIL_API.AUTH_VERIFICATION_EMAIL.TYPE,
        url: AUTH_VERIFICATION_EMAIL_API.AUTH_VERIFICATION_EMAIL.ENDPOINT(code),
        data,
      });

      await authUpdateUserData()(dispatch);

      await redirect(AUTH_VERIFICATION_PHONE_ROUTE_PATH).then(() => {
        dispatch({
          type: AUTH_VERIFICATION_EMAIL_ACTION_TYPE.FORM_SUCCESS,
        });
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: AUTH_VERIFICATION_EMAIL_ACTION_TYPE.FORM_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}

export function verificationEmailFormGetCode() {
  return async (dispatch) => {
    dispatch({
      type: AUTH_VERIFICATION_EMAIL_ACTION_TYPE.FORM_PENDING,
    });

    try {
      await httpRequest({
        method:
          AUTH_VERIFICATION_EMAIL_API.AUTH_VERIFICATION_EMAIL_GET_CODE.TYPE,
        url: AUTH_VERIFICATION_EMAIL_API.AUTH_VERIFICATION_EMAIL_GET_CODE
          .ENDPOINT,
      });

      dispatch({
        type: AUTH_VERIFICATION_EMAIL_ACTION_TYPE.FORM_SUCCESS,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: AUTH_VERIFICATION_EMAIL_ACTION_TYPE.FORM_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}

export function cleanupStore() {
  return {
    type: AUTH_VERIFICATION_EMAIL_ACTION_TYPE.FORM_CLEANUP,
  };
}
