import { redirect } from '../../main/navigation/navigation.core';
import { httpRequest } from '../../main/http';
import { COMPANY_ACCOUNT_ITEM_REVISION_ROUTE_PATH_DYNAMIC } from '../company-account-item-revision/company-account-item-revision.constant';

export function uploadCompanyAccountItemRevisionSelfCreateForm(data) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_ACTION_TYPE.FORM_PENDING,
    });
    try {
      await httpRequest({
        method: 'POST',
        url: `revision/own-company/${data.companyId}`,
        data: data,
      });

      dispatch({
        type: COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_ACTION_TYPE.FORM_SUCCESS,
      });

      redirect(COMPANY_ACCOUNT_ITEM_REVISION_ROUTE_PATH_DYNAMIC, {
        params: {
          companyId: data.companyId,
        },
      });
    } catch (error) {
      if (error) {
        console.log(error);
      }
      if (error.response) {
        dispatch({
          type: COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_ACTION_TYPE.FORM_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
