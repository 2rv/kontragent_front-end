import { httpRequest } from '../../main/http';
import { redirect } from '../../main/navigation/navigation.core';

import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_ROUTE_PATH_DYNAMIC } from '../company-account-item-kontragent-item/company-account-item-kontragent-item.constant';
import {
  COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_UPDATE_DATA_API as API,
  COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_UPDATE_DATA_ACTION_TYPE as ACTION_TYPE,
} from './company-account-item-kontragent-item-update-data.constant';

export function uploadCompanyAccountItemKontragentItemUpdateData(data) {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPE.FORM_PENDING,
    });
    try {
      await httpRequest({
        method: API.UPDATE_KONTRAGENT.TYPE,
        url: API.UPDATE_KONTRAGENT.ENDPOINT(data.companyId, data.kontragentId),
        data: data.values,
      });

      dispatch({
        type: ACTION_TYPE.FORM_SUCCESS,
      });

      await redirect(COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_ROUTE_PATH_DYNAMIC, {
        params: {
          companyId: data.companyId,
          kontragentId: data.kontragentId,
        },
      });
    } catch (error) {
      if (error) {
        console.log(error);
      }
      if (error.response) {
        dispatch({
          type: ACTION_TYPE.FORM_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
