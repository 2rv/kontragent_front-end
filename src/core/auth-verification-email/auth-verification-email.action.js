import { httpRequest } from '../../main/http';

import { AUTH_VERIFICATION_EMAIL_ACTION_TYPE } from './auth-verification-email.type';
import { AUTH_VERIFICATION_EMAIL_API } from './auth-verification-email.constant';

export function authFormVerificationEmailSendCode(token) {
  return async (dispatch) => {
    dispatch({
      type: AUTH_VERIFICATION_EMAIL_ACTION_TYPE.AUTH_FORM_VERIFICATION_EMAIL_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        headers: {
          Authorization: `bearer ${token}`,
        },
        method: AUTH_VERIFICATION_EMAIL_API.TYPE,
        url: AUTH_VERIFICATION_EMAIL_API.ENDPOINT,
      });

      dispatch({
        type: AUTH_VERIFICATION_EMAIL_ACTION_TYPE.AUTH_FORM_VERIFICATION_EMAIL_UPLOAD_SUCCESS,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: AUTH_VERIFICATION_EMAIL_ACTION_TYPE.AUTH_FORM_VERIFICATION_EMAIL_UPLOAD_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
