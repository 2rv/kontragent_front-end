import { httpRequest } from '../../main/http';
import { redirect } from '../../main/navigation/navigation.core';

import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_ROUTE_PATH_DYNAMIC } from '../company-account-item-kontragent';
import {
  COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_DELETE_API as API,
  COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_DELETE_ACTION_TYPE as ACTION_TYPE,
} from './company-account-item-kontragent-item-delete.constant';

export function deleteCompanyAccountItemKontragentItem(data) {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPE.REQUEST_PENDING,
    });
    try {
      await httpRequest({
        method: API.REMOVE_KONTRAGENT.TYPE,
        url: API.REMOVE_KONTRAGENT.ENDPOINT(data.companyId, data.kontragentId),
      });

      await redirect(COMPANY_ACCOUNT_ITEM_KONTRAGENT_ROUTE_PATH_DYNAMIC, {
        params: {
          companyId: data.companyId,
        },
      });

      dispatch({
        type: ACTION_TYPE.REQUEST_SUCCESS,
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
