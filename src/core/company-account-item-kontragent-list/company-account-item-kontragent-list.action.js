import { httpRequest } from '../../main/http';
import {
  COMPANY_ACCOUNT_ITEM_KONTRAGENT_LIST_API,
  COMPANY_ACCOUNT_ITEM_KONTRAGENT_LIST_ACTION_TYPE,
} from './company-account-item-kontragent-list.constant';
import { convertCompanyAccountItemKontragentList } from './company-account-item-kontragent-list.convert';

export function getCompanyAccountItemKontragentList(companyId) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_KONTRAGENT_LIST_ACTION_TYPE.REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method:
          COMPANY_ACCOUNT_ITEM_KONTRAGENT_LIST_API
            .FETCH_COMPANY_ACCOUNT_KONTRAGENTS.TYPE,
        url: COMPANY_ACCOUNT_ITEM_KONTRAGENT_LIST_API.FETCH_COMPANY_ACCOUNT_KONTRAGENTS.ENDPOINT(
          companyId,
        ),
      });

      dispatch({
        type: COMPANY_ACCOUNT_ITEM_KONTRAGENT_LIST_ACTION_TYPE.REQUEST_SUCCESS,
        data: { list: convertCompanyAccountItemKontragentList(res.data) },
      });
    } catch (error) {
      if (error) {
        console.log(error);
      }
      if (error.response) {
        dispatch({
          type: COMPANY_ACCOUNT_ITEM_KONTRAGENT_LIST_ACTION_TYPE.REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}

export function reloadCompanyAccountItemKontragentList(companyId) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_KONTRAGENT_LIST_ACTION_TYPE.REQUEST_UPDATE_PENDING,
    });

    try {
      const res = await httpRequest({
        method:
          COMPANY_ACCOUNT_ITEM_KONTRAGENT_LIST_API
            .FETCH_COMPANY_ACCOUNT_KONTRAGENTS.TYPE,
        url: COMPANY_ACCOUNT_ITEM_KONTRAGENT_LIST_API.FETCH_COMPANY_ACCOUNT_KONTRAGENTS.ENDPOINT(
          companyId,
        ),
      });

      dispatch({
        type: COMPANY_ACCOUNT_ITEM_KONTRAGENT_LIST_ACTION_TYPE.REQUEST_UPDATE_SUCCESS,
        data: { list: convertCompanyAccountItemKontragentList(res.data) },
      });
    } catch (error) {
      if (error) {
        console.log(error);
      }
      if (error.response) {
        dispatch({
          type: COMPANY_ACCOUNT_ITEM_KONTRAGENT_LIST_ACTION_TYPE.REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
