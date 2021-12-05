import { httpRequest } from '../../main/http';
import { getQuery } from '../../main/navigation/navigation.core';
import { ADMIN_BILL_INFO_ACTION_TYPE } from './admin-bill-info.constant';
import { performAdminBillInfoData } from './admin-bill-info.convert';

export function getAdminBillInfo() {
  return async (dispatch) => {
    dispatch({
      type: ADMIN_BILL_INFO_ACTION_TYPE.REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method: 'GET',
        url: `bill/${getQuery('billId')}`,
      });
      const data = performAdminBillInfoData(res.data);
      dispatch({
        type: ADMIN_BILL_INFO_ACTION_TYPE.REQUEST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: ADMIN_BILL_INFO_ACTION_TYPE.REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}

export function reloadAdminBillInfoData() {
  return async (dispatch) => {
    dispatch({
      type: ADMIN_BILL_INFO_ACTION_TYPE.REQUEST_UPDATE_PENDING,
    });

    try {
      const res = await httpRequest({
        method: 'GET',
        url: `bill/${getQuery('billId')}`,
      });
      const data = performAdminBillInfoData(res.data);

      dispatch({
        type: ADMIN_BILL_INFO_ACTION_TYPE.REQUEST_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: ADMIN_BILL_INFO_ACTION_TYPE.REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
