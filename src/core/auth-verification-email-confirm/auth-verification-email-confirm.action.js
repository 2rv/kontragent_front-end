import { httpRequest } from '../../main/http';

import { AUTH_VERIFICATION_EMAIL_CONFIRM_ACTION_TYPE } from './auth-verification-email-confirm.type';
import {
  AUTH_VERIFICATION_EMAIL_CONFIRM_ON_UPLOAD_PATH,
  AUTH_VERIFICATION_EMAIL_CONFIRM_API,
} from './auth-verification-email-confirm.constant';

import { redirect } from '../../main/navigation/navigation.core';

export function authVerificationEmailConfirmUploadData(
  verificationCode,
  token,
) {
  return async (dispatch) => {
    dispatch({
      type: AUTH_VERIFICATION_EMAIL_CONFIRM_ACTION_TYPE.AUTH_VERIFICATION_EMAIL_CONFIRM_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        headers: {
          Authorization: `bearer ${token}`,
        },
        method: AUTH_VERIFICATION_EMAIL_CONFIRM_API.TYPE,
        url: AUTH_VERIFICATION_EMAIL_CONFIRM_API.ENDPOINT.concat(
          verificationCode,
        ),
      });

      dispatch({
        type: AUTH_VERIFICATION_EMAIL_CONFIRM_ACTION_TYPE.AUTH_VERIFICATION_EMAIL_CONFIRM_UPLOAD_SUCCESS,
      });

      redirect(AUTH_VERIFICATION_EMAIL_CONFIRM_ON_UPLOAD_PATH);
    } catch (error) {
      if (error) {
        dispatch({
          type: AUTH_VERIFICATION_EMAIL_CONFIRM_ACTION_TYPE.AUTH_VERIFICATION_EMAIL_CONFIRM_UPLOAD_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
