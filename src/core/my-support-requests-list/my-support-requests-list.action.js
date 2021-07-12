import { MY_SUPPORT_REQUESTS_LIST_ACTION_TYPE } from './my-support-requests-list.type';

export function mySupportRequestsListLoad() {
  return async (dispatch) => {
    dispatch({
      type: MY_SUPPORT_REQUESTS_LIST_ACTION_TYPE.MY_SUPPORT_REQUESTS_LIST_LOAD_REQUEST_PENDING,
    });

    try {
      dispatch({
        type: MY_SUPPORT_REQUESTS_LIST_ACTION_TYPE.MY_SUPPORT_REQUESTS_LIST_LOAD_REQUEST_SUCCESS,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: MY_SUPPORT_REQUESTS_LIST_ACTION_TYPE.MY_SUPPORT_REQUESTS_LIST_LOAD_REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
