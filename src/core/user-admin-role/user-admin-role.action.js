import { httpRequest } from '../../main/http';
import { USER_ADMIN_ROLE_ACTION_TYPE } from './user-admin-role.constant';
import { getQuery } from '../../main/navigation/navigation.core';

export function changeUserAdminRole(data) {
  return async (dispatch) => {
    dispatch({
      type: USER_ADMIN_ROLE_ACTION_TYPE.FORM_PENDING,
    });

    try {
      await httpRequest({
        method: 'PATCH',
        url: `user/admin/${getQuery('userId')}/role`,
        data,
      });

      dispatch({
        type: USER_ADMIN_ROLE_ACTION_TYPE.FORM_SUCCESS,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: USER_ADMIN_ROLE_ACTION_TYPE.FORM_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
