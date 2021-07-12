import { httpRequest } from '../../main/http';
import { MY_REQUESTS_JURISTS_LIST_ACTION_TYPE } from './my-requests-jurists-list.type';
import { MY_REQUESTS_JURISTS_LIST_API } from './my-requests-jurists-list.constant';

export function myRequestsJuristsListLoadData() {
  return async (dispatch) => {
    dispatch({
      type: MY_REQUESTS_JURISTS_LIST_ACTION_TYPE.MY_REQUESTS_JURISTS_LIST_LOAD_REQUEST_PENDING,
    });

    try {
      dispatch({
        type: MY_REQUESTS_JURISTS_LIST_ACTION_TYPE.MY_REQUESTS_JURISTS_LIST_LOAD_REQUEST_SUCCESS,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: MY_REQUESTS_JURISTS_LIST_ACTION_TYPE.MY_REQUESTS_JURISTS_LIST_LOAD_REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
