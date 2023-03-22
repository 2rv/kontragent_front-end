import { httpRequest } from '../../main/http';
import { redirect } from '../../main/navigation/navigation.core';
import { COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_ROUTE_PATH_DYNAMIC } from '../company-account-item-revision-kontragent/company-account-item-revision-kontragent.constant';
import { convertCompanyAccountItemRevisionKontragentCreateFormData } from './company-account-item-revision-kontragent-create.convert';
import { COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_ACTION_TYPE as ACTION_TYPE } from './company-account-item-revision-kontragent-create.constant';

export function uploadCompanyAccountItemRevisionKontragentCreateForm(data) {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPE.FORM_PENDING,
    });
    try {
      await httpRequest({
        method: 'POST',
        url: `revision/company/${data.companyId}`,
        data: convertCompanyAccountItemRevisionKontragentCreateFormData(
          data.values,
        ),
      });

      dispatch({
        type: ACTION_TYPE.FORM_SUCCESS,
      });

      await redirect(
        COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_ROUTE_PATH_DYNAMIC,
        {
          params: {
            companyId: data.companyId,
          },
        },
      );
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
