import { httpRequest } from '../../main/http';
import {
  COMPANY_ADMIN_LIST_API as API,
  COMPANY_ADMIN_LIST_ACTION_TYPE as ACTION_TYPE,
} from './company-admin-list.constant';
import { convertCompanyAdminList } from './company-admin-list.convert';

export function getCompanyAdminListAction(data) {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPE.REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method: API.GET_LIST.TYPE,
        url: API.GET_LIST.ENDPOINT,
        params: {
          take: data.take,
          skip: data.skip,
          type: data.type,
        },
      });

      dispatch({
        type: ACTION_TYPE.REQUEST_SUCCESS,
        data: convertCompanyAdminList(res.data),
      });
    } catch (error) {
      if (error) {
        console.log(error);
      }
      if (error.response) {
        dispatch({
          type: ACTION_TYPE.REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
