import { httpRequest } from '../../main/http';
import {
  COMPANY_ADMIN_UNREGISTERED_LIST_API as API,
  COMPANY_ADMIN_UNREGISTERED_LIST_ACTION_TYPE as ACTION_TYPE,
} from './company-admin-unregistered-list.constant';
import { convertCompanyAdminUnregisteredList } from './company-admin-unregistered-list.convert';

export function getCompanyAdminUnregisteredListAction(data) {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPE.REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method: API.GET_LIST.TYPE,
        url: API.GET_LIST.ENDPOINT,
        params: {
          registered: false,
          take: data.take,
          skip: data.skip,
          type: data.type,
        },
      });

      dispatch({
        type: ACTION_TYPE.REQUEST_SUCCESS,
        data: convertCompanyAdminUnregisteredList(res.data),
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
