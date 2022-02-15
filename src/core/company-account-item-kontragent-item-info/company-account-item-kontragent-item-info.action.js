import { httpRequest } from '../../main/http';
import {
  COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_API as API,
  COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_ACTION_TYPE as ACTION_TYPE,
} from './company-account-item-kontragent-item-info.constant';
import { covertCompanyAccountItemKontragentItemInfoData } from './company-account-item-kontragent-item-info.convert';

export function getCompanyAccountItemKontragentItemInfo(data) {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPE.REQUEST_PENDING,
    });
    try {
      const res = await httpRequest({
        method: API.FETCH_KONTRAGENT.TYPE,
        url: API.FETCH_KONTRAGENT.ENDPOINT(data.companyId, data.kontragentId),
      });

      dispatch({
        type: ACTION_TYPE.REQUEST_SUCCESS,
        data: covertCompanyAccountItemKontragentItemInfoData(res.data),
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
