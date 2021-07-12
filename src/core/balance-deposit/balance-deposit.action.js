import { httpRequest } from '../../main/http';
import { BALANCE_DEPOSIT_ACTION_TYPE } from './balance-deposit.type';
import { BALANCE_FORM_DEPOSIT_REDIRECT_ON_UPLOAD_PATH } from './balance-deposit.constant';
import { redirect } from '../../main/navigation/navigation.core';

export function balanceDepositFormUploadData(data) {
  return async (dispatch) => {
    dispatch({
      type: BALANCE_DEPOSIT_ACTION_TYPE.BALANCE_FORM_DEPOSIT_UPLOAD_PENDING,
    });

    try {
      dispatch({
        type: BALANCE_DEPOSIT_ACTION_TYPE.BALANCE_FORM_DEPOSIT_UPLOAD_SUCCESS,
      });

      // redirect(BALANCE_FORM_DEPOSIT_REDIRECT_ON_UPLOAD_PATH);
    } catch (error) {
      if (error) {
        dispatch({
          type: BALANCE_DEPOSIT_ACTION_TYPE.BALANCE_FORM_DEPOSIT_UPLOAD_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
