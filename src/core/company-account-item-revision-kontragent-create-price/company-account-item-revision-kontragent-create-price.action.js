import { httpRequest } from '../../main/http';
import { convertCompanyAccountItemRevisionKontragentCreatePrice } from './company-account-item-revision-kontragent-create-price.convert';
import {
  COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_PRICE_API as API,
  COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_PRICE_ACTION_TYPE as ACTION_TYPE,
} from './company-account-item-revision-kontragent-create-price.constant';

export function getCompanyAccountItemRevisionKontragentCreatePriceAction(data) {
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
        data: convertCompanyAccountItemRevisionKontragentCreatePrice(
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
