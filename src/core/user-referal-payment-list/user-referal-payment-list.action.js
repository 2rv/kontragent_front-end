import { httpRequest } from '../../main/http';
import {
  USER_REFERAL_PAYMENT_LIST_API as API,
  USER_REFERAL_PAYMENT_LIST_ACTION_TYPE as ACTION_TYPE,
} from './user-referal-payment-list.constant';
import { convertUserReferalPaymentList } from './user-referal-payment-list.convert';

export function getUserReferalPaymentListAction() {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPE.REQUEST_PENDING,
    });
    try {
      const response = await httpRequest({
        method: API.GET_LIST.TYPE,
        url: API.GET_LIST.ENDPOINT,
      });
      dispatch({
        type: ACTION_TYPE.REQUEST_SUCCESS,
        data: convertUserReferalPaymentList(response.data),
      });
    } catch (error) {
      if (error) {
        console.log(error);
      }
      if (error.response) {
        dispatch({
          type: ACTION_TYPE.REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
