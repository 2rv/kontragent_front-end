import { httpRequest } from '../../main/http';
import { getQuery } from '../../main/navigation/navigation.core';
import { ADMIN_BILL_REVISION_ACTION_TYPE } from './admin-bill-revision.constant';
import { reloadAdminBillInfoData } from '../admin-bill-info/admin-bill-info.action';

export function changeAdminBillRevision(data) {
  return async (dispatch) => {
    dispatch({
      type: ADMIN_BILL_REVISION_ACTION_TYPE.FORM_PENDING,
    });

    try {
      const res = await httpRequest({
        method: 'PATCH',
        url: `bill/${getQuery('billId')}`,
        data,
      });

      dispatch({
        type: ADMIN_BILL_REVISION_ACTION_TYPE.FORM_SUCCESS,
      });
      await dispatch(reloadAdminBillInfoData());
    } catch (error) {
      if (error) {
        dispatch({
          type: ADMIN_BILL_REVISION_ACTION_TYPE.FORM_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}

export function resetAdminBillRevisionUpdateDataFromState() {
  return async (dispatch) => {
    dispatch({
      type: ADMIN_BILL_REVISION_ACTION_TYPE.FORM_RESET,
    });
  };
}
