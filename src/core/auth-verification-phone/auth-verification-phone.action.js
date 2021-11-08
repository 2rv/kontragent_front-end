import { httpRequest } from '../../main/http';

import {
  AUTH_VERIFICATION_PHONE_API,
  AUTH_VERIFICATION_PHONE_ACTION_TYPE,
} from './auth-verification-phone.constant';

import { authUpdateUserData } from '../../lib/common/auth/auth.action';
import { redirect } from '../../main/navigation/navigation.core';

export function verificationPhoneFormFetchData(data, code, referalIdData) {
  return async (dispatch) => {
    dispatch({
      type: AUTH_VERIFICATION_PHONE_ACTION_TYPE.FORM_PENDING,
    });

    try {
      referalIdData
        ? await httpRequest({
            method:
              AUTH_VERIFICATION_PHONE_API.AUTH_VERIFICATION_PHONE_REFERAL.TYPE,
            url: AUTH_VERIFICATION_PHONE_API.AUTH_VERIFICATION_PHONE_REFERAL.ENDPOINT(
              code,
              referalIdData,
            ),
          })
        : await httpRequest({
            method: AUTH_VERIFICATION_PHONE_API.AUTH_VERIFICATION_PHONE.TYPE,
            url: AUTH_VERIFICATION_PHONE_API.AUTH_VERIFICATION_PHONE.ENDPOINT(
              code,
            ),
            data,
          });

      await authUpdateUserData()(dispatch);

      await redirect('/').then(() => {
        dispatch({
          type: AUTH_VERIFICATION_PHONE_ACTION_TYPE.FORM_SUCCESS,
        });
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: AUTH_VERIFICATION_PHONE_ACTION_TYPE.FORM_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}

export function verificationPhoneFormGetCode() {
  return async (dispatch) => {
    dispatch({
      type: AUTH_VERIFICATION_PHONE_ACTION_TYPE.FORM_PENDING,
    });

    try {
      await httpRequest({
        method:
          AUTH_VERIFICATION_PHONE_API.AUTH_VERIFICATION_PHONE_GET_CODE.TYPE,
        url: AUTH_VERIFICATION_PHONE_API.AUTH_VERIFICATION_PHONE_GET_CODE
          .ENDPOINT,
      });

      dispatch({
        type: AUTH_VERIFICATION_PHONE_ACTION_TYPE.FORM_SUCCESS,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: AUTH_VERIFICATION_PHONE_ACTION_TYPE.FORM_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
