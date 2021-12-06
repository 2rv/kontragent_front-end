import { httpRequest } from '../../main/http';
import { getQuery } from '../../main/navigation/navigation.core';
import { COMPANY_ACCOUNT_ITEM_CREATE_BILL_ACTION_TYPE } from './company-account-item-create-bill.constant';

export function changeCompanyAccountItemCreateBill(data, resetForm) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_CREATE_BILL_ACTION_TYPE.FORM_PENDING,
    });

    try {
      const res = await httpRequest({
        method: 'POST',
        url: `/bill/company/${getQuery('companyId')}`,
        data,
      });

      dispatch({
        type: COMPANY_ACCOUNT_ITEM_CREATE_BILL_ACTION_TYPE.FORM_SUCCESS,
      });

      resetForm();
    } catch (error) {
      if (error) {
        dispatch({
          type: COMPANY_ACCOUNT_ITEM_CREATE_BILL_ACTION_TYPE.FORM_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}

export function resetCompanyAccountItemCreateBillDataFromState() {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_CREATE_BILL_ACTION_TYPE.FORM_RESET,
    });
  };
}

export function cleanupStore() {
  return {
    type: COMPANY_ACCOUNT_ITEM_CREATE_BILL_ACTION_TYPE.CLEANUP,
  };
}
