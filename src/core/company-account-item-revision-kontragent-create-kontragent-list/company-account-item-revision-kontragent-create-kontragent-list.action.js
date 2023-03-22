import { httpRequest } from '../../main/http';
import {
  COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_KONTRAGENT_LIST_API,
  COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_KONTRAGENT_LIST_ACTION_TYPE,
} from './company-account-item-revision-kontragent-create-kontragent-list.constant';
import { convertCompanyAccountItemRevisionKontragentCreateKontragentList } from './company-account-item-revision-kontragent-create-kontragent-list.convert';

export function getCompanyAccountItemRevisionKontragentCreateKontragentList(
  companyId,
) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_KONTRAGENT_LIST_ACTION_TYPE.REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method:
          COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_KONTRAGENT_LIST_API
            .FETCH_COMPANY_ACCOUNT_KONTRAGENTS.TYPE,
        url: COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_KONTRAGENT_LIST_API.FETCH_COMPANY_ACCOUNT_KONTRAGENTS.ENDPOINT(
          companyId,
        ),
      });

      dispatch({
        type: COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_KONTRAGENT_LIST_ACTION_TYPE.REQUEST_SUCCESS,
        data: {
          list: convertCompanyAccountItemRevisionKontragentCreateKontragentList(
            res.data,
          ),
        },
      });
    } catch (error) {
      if (error) {
        console.log(error);
      }
      if (error.response) {
        dispatch({
          type: COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_KONTRAGENT_LIST_ACTION_TYPE.REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
