import { httpRequest } from '../../main/http';

import { MY_REQUESTS_JURISTS_LIST_ACTION_TYPE } from './my-requests-jurists-list.type';
import { MY_REQUESTS_JURISTS_LIST_API } from './my-requests-jurists-list.constant';

export function myRequestsJuristsListGetData() {
  return async (dispatch) => {
    dispatch({
      type: MY_REQUESTS_JURISTS_LIST_ACTION_TYPE.MY_REQUESTS_JURISTS_LIST_REQUEST_GET_DATA_PENDING,
    });

    try {
      const res = await httpRequest({
        method:
          MY_REQUESTS_JURISTS_LIST_API.MY_REQUESTS_JURISTS_LIST_REQUEST_GET_DATA
            .TYPE,
        url: MY_REQUESTS_JURISTS_LIST_API
          .MY_REQUESTS_JURISTS_LIST_REQUEST_GET_DATA.ENDPOINT,
      });

      dispatch({
        type: MY_REQUESTS_JURISTS_LIST_ACTION_TYPE.MY_REQUESTS_JURISTS_LIST_REQUEST_GET_DATA_SUCCESS,
        action: res.data,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: MY_REQUESTS_JURISTS_LIST_ACTION_TYPE.MY_REQUESTS_JURISTS_LIST_REQUEST_GET_DATA_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
