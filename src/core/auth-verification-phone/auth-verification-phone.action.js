import { httpRequest } from '../../main/http';
import { redirect } from '../../main/navigation/navigation.core';

import { AUTH_VERIFICATION_PHONE_ACTION_TYPE } from './auth-verification-phone.type';

import { AUTH_VERIFICATION_PHONE_REDIRECT_ON_UPLOAD_PATH } from './auth-verification-phone.constant';

import {
  AUTH_VERIFICATION_PHONE_API,
  AUTH_VERIFICATION_PHONE_CONFIRM_API,
} from './auth-verification-phone.constant';

export function authFormVerificationPhoneSendCode() {
  return async (dispatch) => {
    dispatch({
      type: AUTH_VERIFICATION_PHONE_ACTION_TYPE.AUTH_FORM_VERIFICATION_PHONE_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: AUTH_VERIFICATION_PHONE_API.TYPE,
        url: AUTH_VERIFICATION_PHONE_API.ENDPOINT,
      });

      dispatch({
        type: AUTH_VERIFICATION_PHONE_ACTION_TYPE.AUTH_FORM_VERIFICATION_PHONE_UPLOAD_SUCCESS,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: AUTH_VERIFICATION_PHONE_ACTION_TYPE.AUTH_FORM_VERIFICATION_PHONE_UPLOAD_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}

export function authFormVerificationPhoneConfirmCode(data) {
  return async (dispatch) => {
    dispatch({
      type: AUTH_VERIFICATION_PHONE_ACTION_TYPE.AUTH_FORM_VERIFICATION_PHONE_CONFIRM_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: AUTH_VERIFICATION_PHONE_CONFIRM_API.TYPE,
        url: AUTH_VERIFICATION_PHONE_CONFIRM_API.ENDPOINT,
        data,
      });

      dispatch({
        type: AUTH_VERIFICATION_PHONE_ACTION_TYPE.AUTH_FORM_VERIFICATION_PHONE_CONFIRM_UPLOAD_SUCCESS,
      });

      redirect(AUTH_VERIFICATION_PHONE_REDIRECT_ON_UPLOAD_PATH);
    } catch (error) {
      if (error) {
        dispatch({
          type: AUTH_VERIFICATION_PHONE_ACTION_TYPE.AUTH_FORM_VERIFICATION_PHONE_CONFIRM_UPLOAD_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
