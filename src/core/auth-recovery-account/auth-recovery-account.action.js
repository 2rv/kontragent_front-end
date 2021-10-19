import { httpRequest } from '../../main/http';

import {
  AUTH_RECOVERY_ACCOUNT_API,
  AUTH_RECOVERY_ACCOUNT_ACTION_TYPE,
} from './auth-recovery-account.constant';

import { redirect } from '../../main/navigation/navigation.core';

import { AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_ROUTE_PATH } from '../auth-recovery-account-update-password';

export function authRecoveryAccountFormSendData(data) {
  return async (dispatch) => {
    dispatch({
      type: AUTH_RECOVERY_ACCOUNT_ACTION_TYPE.FORM_PENDING,
    });

    try {
      await httpRequest({
        method: AUTH_RECOVERY_ACCOUNT_API.AUTH_RECOVERY_ACCOUNT.TYPE,
        url: AUTH_RECOVERY_ACCOUNT_API.AUTH_RECOVERY_ACCOUNT.ENDPOINT,
        data,
      });

      await redirect(AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_ROUTE_PATH).then(
        () => {
          dispatch({
            type: AUTH_RECOVERY_ACCOUNT_ACTION_TYPE.FORM_SUCCESS,
          });
        },
      );
    } catch (error) {
      if (error) {
        dispatch({
          type: AUTH_RECOVERY_ACCOUNT_ACTION_TYPE.FORM_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
