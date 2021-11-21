import { httpRequest } from '../../main/http';
import { USER_ADMIN_ITEM_INFO_ACTION_TYPE } from './user-admin-item-info.constant';
import { getQuery } from '../../main/navigation/navigation.core';
import { performUserAdminItemInfoData } from './user-admin-item-info.convert';

export function getUserAdminItemInfo() {
  return async (dispatch) => {
    dispatch({
      type: USER_ADMIN_ITEM_INFO_ACTION_TYPE.FORM_PENDING,
    });

    try {
      const res = await httpRequest({
        method: 'GET',
        url: `/user/admin/${getQuery('userId')}`,
      });
      const data = performUserAdminItemInfoData(res.data);
      dispatch({
        type: USER_ADMIN_ITEM_INFO_ACTION_TYPE.FORM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: USER_ADMIN_ITEM_INFO_ACTION_TYPE.FORM_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
