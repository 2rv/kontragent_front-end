import { httpRequest } from '../../main/http';

import {
  AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_API,
  AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_ACTION_TYPE,
} from './auth-recovery-account-update-password.constant';

import { redirect } from '../../main/navigation/navigation.core';

import { COMPANY_ACCOUNT_LIST_ROUTE_PATH } from '../company-account-list';

export function updatePasswordSendFormData(data) {
  return async (dispatch) => {
    dispatch({
      type: AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_ACTION_TYPE.FORM_PENDING,
    });

    try {
      await httpRequest({
        method:
          AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_API
            .AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD.TYPE,
        url: AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_API
          .AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD.ENDPOINT,
        data,
      });

      await redirect(COMPANY_ACCOUNT_LIST_ROUTE_PATH).then(() => {
        dispatch({
          type: AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_ACTION_TYPE.FORM_SUCCESS,
        });
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_ACTION_TYPE.FORM_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
