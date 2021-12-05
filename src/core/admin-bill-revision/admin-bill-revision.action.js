import { httpRequest } from '../../main/http';
import { getQuery } from '../../main/navigation/navigation.core';
import { ADMIN_BILL_REVISION_ACTION_TYPE } from './admin-bill-revision.constant';
import { reloadAdminBillInfoData } from '../admin-bill-info/admin-bill-info.action';
import { USER_ADMIN_LIST_ROUTE_PATH } from '../user-admin-list';
import { redirect } from '../../main/navigation/navigation.core';

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

export function closeAdminBillRevision() {
  return async (dispatch) => {
    dispatch({
      type: ADMIN_BILL_REVISION_ACTION_TYPE.CLOSE_FORM_PENDING,
    });

    try {
      const res = await httpRequest({
        method: 'PATCH',
        url: `bill/fulfill/${getQuery('billId')}`,
      });

      dispatch({
        type: ADMIN_BILL_REVISION_ACTION_TYPE.CLOSE_FORM_SUCCESS,
      });
      await dispatch(reloadAdminBillInfoData());
    } catch (error) {
      if (error) {
        dispatch({
          type: ADMIN_BILL_REVISION_ACTION_TYPE.CLOSE_FORM_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}

export function deleteAdminBillRevision() {
  return async (dispatch) => {
    dispatch({
      type: ADMIN_BILL_REVISION_ACTION_TYPE.DELETE_FORM_PENDING,
    });

    try {
      const res = await httpRequest({
        method: 'DELETE',
        url: `bill/delete/bill/${getQuery('billId')}`,
      });

      await redirect(USER_ADMIN_LIST_ROUTE_PATH).then(() => {
        dispatch({
          type: ADMIN_BILL_REVISION_ACTION_TYPE.DELETE_FORM_SUCCESS,
        });
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: ADMIN_BILL_REVISION_ACTION_TYPE.DELETE_FORM_ERROR,
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
    dispatch({
      type: ADMIN_BILL_REVISION_ACTION_TYPE.CLOSE_FORM_RESET,
    });
  };
}
