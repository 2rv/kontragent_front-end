import { MY_VERIFICATION_REQUESTS_LIST_ACTION_TYPE } from './my-verification-requests-list.type';

export function myVerificationRequestsListLoad() {
  return async (dispatch) => {
    dispatch({
      type: MY_VERIFICATION_REQUESTS_LIST_ACTION_TYPE.MY_VERIFICATION_REQUESTS_LIST_LOAD_REQUEST_PENDING,
    });

    try {
      dispatch({
        type: MY_VERIFICATION_REQUESTS_LIST_ACTION_TYPE.MY_VERIFICATION_REQUESTS_LIST_LOAD_REQUEST_SUCCESS,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: MY_VERIFICATION_REQUESTS_LIST_ACTION_TYPE.MY_VERIFICATION_REQUESTS_LIST_LOAD_REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
