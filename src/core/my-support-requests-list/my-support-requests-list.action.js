import { httpRequest } from '../../main/http';

import { MY_SUPPORT_REQUESTS_LIST_ACTION_TYPE } from './my-support-requests-list.type';
import { MY_SUPPORT_REQUESTS_LIST_API } from './my-support-requests-list.constant';

export function mySupportRequestsListUploadData() {
  return async (dispatch) => {
    dispatch({
      type: MY_SUPPORT_REQUESTS_LIST_ACTION_TYPE.MY_SUPPORT_REQUESTS_LIST_REQUEST_UPLOAD_DATA_PENDING,
    });

    try {
      const res = await httpRequest({
        method:
          MY_SUPPORT_REQUESTS_LIST_API.MY_SUPPORT_REQUESTS_LIST_UPLOAD_DATA
            .TYPE,
        url: MY_SUPPORT_REQUESTS_LIST_API.MY_SUPPORT_REQUESTS_LIST_UPLOAD_DATA
          .ENDPOINT,
      });

      dispatch({
        type: MY_SUPPORT_REQUESTS_LIST_ACTION_TYPE.MY_SUPPORT_REQUESTS_LIST_REQUEST_UPLOAD_DATA_SUCCESS,
        action: res.data,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: MY_SUPPORT_REQUESTS_LIST_ACTION_TYPE.MY_SUPPORT_REQUESTS_LIST_REQUEST_UPLOAD_DATA_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
