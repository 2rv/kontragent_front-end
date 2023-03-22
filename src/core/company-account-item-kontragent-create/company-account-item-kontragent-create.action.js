import { httpRequest } from '../../main/http';
import {
  COMPANY_ACCOUNT_ITEM_KONTRAGENT_CREATE_API,
  COMPANY_ACCOUNT_ITEM_KONTRAGENT_CREATE_ACTION_TYPE,
} from './company-account-item-kontragent-create.constant';
import { convertCompanyAccountItemKontragentCreateFormData } from './company-account-item-kontragent-create.convert';

export function uploadCompanyAccountItemKontragentCreateForm(
  values,
  companyId,
) {
  return async (dispatch, reloadList) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_KONTRAGENT_CREATE_ACTION_TYPE.FORM_PENDING,
    });
    try {
      await httpRequest({
        method:
          COMPANY_ACCOUNT_ITEM_KONTRAGENT_CREATE_API
            .CREATE_COMPANY_ACCOUNT_KONTRAGENT.TYPE,
        url: COMPANY_ACCOUNT_ITEM_KONTRAGENT_CREATE_API.CREATE_COMPANY_ACCOUNT_KONTRAGENT.ENDPOINT(
          companyId,
        ),
        data: convertCompanyAccountItemKontragentCreateFormData(values),
      });

      if (reloadList) {
        await reloadList();
      }

      dispatch({
        type: COMPANY_ACCOUNT_ITEM_KONTRAGENT_CREATE_ACTION_TYPE.FORM_SUCCESS,
      });
    } catch (error) {
      if (error) {
        console.log(error);
      }
      if (error.response) {
        dispatch({
          type: COMPANY_ACCOUNT_ITEM_KONTRAGENT_CREATE_ACTION_TYPE.FORM_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}

export function resetCompanyAccountItemKontragentCreateFormState() {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_KONTRAGENT_CREATE_ACTION_TYPE.FORM_RESET,
    });
  };
}
