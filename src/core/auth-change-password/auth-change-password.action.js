import { httpRequest } from '../../main/http';

import { AUTH_CHANGE_PASSWORD_ACTION_TYPE } from './auth-change-password.type';
import {
  AUTH_CHANGE_PASSWORD_API,
  AUTH_CHANGE_PASSWORD_REDIRECT_ON_UPLOAD_PATH,
} from './auth-change-password.constant';

import { redirect } from '../../main/navigation/navigation.core';

export function authChangePasswordFormUploadData(data) {
  return async (dispatch) => {
    dispatch({
      type: AUTH_CHANGE_PASSWORD_ACTION_TYPE.AUTH_CHANGE_PASSWORD_FORM_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: AUTH_CHANGE_PASSWORD_API.AUTH_CHANGE_PASSWORD_FORM_UPLOAD.TYPE,
        url: AUTH_CHANGE_PASSWORD_API.AUTH_CHANGE_PASSWORD_FORM_UPLOAD.ENDPOINT,
        data,
      });

      dispatch({
        type: AUTH_CHANGE_PASSWORD_ACTION_TYPE.AUTH_CHANGE_PASSWORD_FORM_UPLOAD_SUCCESS,
      });

      redirect(AUTH_CHANGE_PASSWORD_REDIRECT_ON_UPLOAD_PATH);
    } catch (error) {
      if (error) {
        dispatch({
          type: AUTH_CHANGE_PASSWORD_ACTION_TYPE.AUTH_CHANGE_PASSWORD_FORM_UPLOAD_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
