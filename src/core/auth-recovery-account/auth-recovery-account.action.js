import { httpRequest } from '../../main/http';

import { AUTH_RECOVERY_ACCOUNT_ACTION_TYPE } from './auth-recovery-account.type';
import {
  AUTH_RECOVERY_ACCOUNT_API,
  AUTH_RECOVERY_ACCOUNT_REDIRECT_ON_UPLOAD_PATH,
} from './auth-recovery-account.constant';

import { redirect } from '../../main/navigation/navigation.core';

export function authFormRecoveryAccountUploadData(data) {
  return async (dispatch) => {
    dispatch({
      type: AUTH_RECOVERY_ACCOUNT_ACTION_TYPE.AUTH_FORM_RECOVERY_ACCOUNT_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method:
          AUTH_RECOVERY_ACCOUNT_API.AUTH_FORM_RECOVERY_ACCOUNT_UPLOAD.TYPE,
        url: AUTH_RECOVERY_ACCOUNT_API.AUTH_FORM_RECOVERY_ACCOUNT_UPLOAD
          .ENDPOINT,
        data,
      });

      dispatch({
        type: AUTH_RECOVERY_ACCOUNT_ACTION_TYPE.AUTH_FORM_RECOVERY_ACCOUNT_UPLOAD_SUCCESS,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: AUTH_RECOVERY_ACCOUNT_ACTION_TYPE.AUTH_FORM_RECOVERY_ACCOUNT_UPLOAD_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
