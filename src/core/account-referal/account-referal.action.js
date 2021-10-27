import { httpRequest } from '../../main/http';
import {
  ACCOUNT_REFERAL_API,
  ACCOUNT_REFERAL_ACTION_TYPE,
} from './account-referal.constant';
import { redirect } from '../../main/navigation/navigation.core';

export function uploadAccountReferalId(id) {
  return async (dispatch) => {
    dispatch({
      type: ACCOUNT_REFERAL_ACTION_TYPE.ACCOUNT_REFERAL_PENDING,
    });

    try {
      await httpRequest({
        method: ACCOUNT_REFERAL_API.ACCOUNT_REFERAL.TYPE,
        url: ACCOUNT_REFERAL_API.ACCOUNT_REFERAL.ENDPOINT(id),
        data: id,
      });

      await redirect('/').then(() => {
        dispatch({
          type: ACCOUNT_REFERAL_ACTION_TYPE.ACCOUNT_REFERAL_SUCCESS,
        });
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: ACCOUNT_REFERAL_ACTION_TYPE.ACCOUNT_REFERAL_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
