import { httpRequest } from '../../main/http';
import { getQuery } from '../../main/navigation/navigation.core';
import { ADMIN_BILL_REVISION_ACTION_TYPE } from './admin-bill-revision.constant';
import { reloadAdminBillInfoData } from '../admin-bill-info/admin-bill-info.action';
import { redirect } from '../../main/navigation/navigation.core';
import { BILL_ADMIN_LIST_ROUTE_PATH } from '../bill-admin-list';

export function changeAdminBillRevision(data, resetForm) {
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
      resetForm();
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

      dispatch({
        type: ADMIN_BILL_REVISION_ACTION_TYPE.DELETE_FORM_SUCCESS,
      });

      redirect(BILL_ADMIN_LIST_ROUTE_PATH);
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

export function cleanupStore() {
  return {
    type: ADMIN_BILL_REVISION_ACTION_TYPE.CLEANUP,
  };
}
