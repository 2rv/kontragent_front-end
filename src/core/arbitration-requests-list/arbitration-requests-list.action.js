import { httpRequest } from '../../main/http';

import { ARBITRATION_REQUESTS_LIST_ACTION_TYPE } from './arbitration-requests-list.type';
import { ARBITRATION_REQUESTS_LIST_API } from './arbitration-requests-list.constant';

export function arbitrationRequestsListUploadData() {
  return async (dispatch) => {
    dispatch({
      type: ARBITRATION_REQUESTS_LIST_ACTION_TYPE.ARBITRATION_REQUESTS_LIST_REQUEST_UPLOAD_DATA_PENDING,
    });

    try {
      const res = await httpRequest({
        method:
          ARBITRATION_REQUESTS_LIST_API.ARBITRATION_REQUESTS_LIST_UPLOAD_DATA
            .TYPE,
        url: ARBITRATION_REQUESTS_LIST_API.ARBITRATION_REQUESTS_LIST_UPLOAD_DATA
          .ENDPOINT,
      });

      dispatch({
        type: ARBITRATION_REQUESTS_LIST_ACTION_TYPE.ARBITRATION_REQUESTS_LIST_REQUEST_UPLOAD_DATA_SUCCESS,
        action: res.data,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: ARBITRATION_REQUESTS_LIST_ACTION_TYPE.ARBITRATION_REQUESTS_LIST_REQUEST_UPLOAD_DATA_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
