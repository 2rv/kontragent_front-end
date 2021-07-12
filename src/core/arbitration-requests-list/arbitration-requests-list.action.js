import { httpRequest } from '../../main/http';
import { ARBITRATION_REQUESTS_LIST_ACTION_TYPE } from './arbitration-requests-list.type';
import { ARBITRATION_REQUESTS_LIST_API } from './arbitration-requests-list.constant';

export function arbitrationRequestsListLoadData() {
  return async (dispatch) => {
    dispatch({
      type: ARBITRATION_REQUESTS_LIST_ACTION_TYPE.ARBITRATION_REQUESTS_LIST_LOAD_REQUEST_PENDING,
    });

    try {
      dispatch({
        type: ARBITRATION_REQUESTS_LIST_ACTION_TYPE.ARBITRATION_REQUESTS_LIST_LOAD_REQUEST_SUCCESS,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: ARBITRATION_REQUESTS_LIST_ACTION_TYPE.ARBITRATION_REQUESTS_LIST_LOAD_REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
