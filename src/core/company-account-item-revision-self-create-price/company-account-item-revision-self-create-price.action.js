import { httpRequest } from '../../main/http';
import { convertCompanyAccountItemRevisionSelfCreatePrice } from './company-account-item-revision-self-create-price.convert';
import {
  COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_PRICE_API as API,
  COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_PRICE_ACTION_TYPE as ACTION_TYPE,
} from './company-account-item-revision-self-create-price.constant';

export function getCompanyAccountItemRevisionSelfCreatePriceAction(data) {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPE.REQUEST_PENDING,
    });
    try {
      const comRes = await httpRequest({
        method: API.GET_COMPANY_BALANCE.TYPE,
        url: API.GET_COMPANY_BALANCE.ENDPOINT(data.companyId),
      });

      const refRes = await httpRequest({
        method: API.GET_REFERAL_BALANCE.TYPE,
        url: API.GET_REFERAL_BALANCE.ENDPOINT,
      });
      dispatch({
        type: ACTION_TYPE.REQUEST_SUCCESS,
        data: convertCompanyAccountItemRevisionSelfCreatePrice(
          comRes.data,
          refRes.data,
        ),
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
