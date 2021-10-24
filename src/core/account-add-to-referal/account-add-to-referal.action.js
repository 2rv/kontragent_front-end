import { httpRequest } from '../../main/http';
import {
  ACCOUNT_ADD_TO_REFERAL_API,
  ACCOUNT_ADD_TO_REFERAL_ACTION_TYPE,
} from './account-add-to-referal.constant';
import { redirect } from '../../main/navigation/navigation.core';

export function uploadAccountReferalId(id) {
  return async (dispatch) => {
    dispatch({
      type: ACCOUNT_ADD_TO_REFERAL_ACTION_TYPE.ADD_TO_REFERAL_PENDING,
    });

    try {
      await httpRequest({
        method: ACCOUNT_ADD_TO_REFERAL_API.ACCOUNT_ADD_TO_REFERAL.TYPE,
        url: ACCOUNT_ADD_TO_REFERAL_API.ACCOUNT_ADD_TO_REFERAL.ENDPOINT(id),
        data: id,
      });

      await redirect('/').then(() => {
        dispatch({
          type: ACCOUNT_ADD_TO_REFERAL_ACTION_TYPE.ADD_TO_REFERAL_SUCCESS,
        });
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: ACCOUNT_ADD_TO_REFERAL_ACTION_TYPE.ADD_TO_REFERAL_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
