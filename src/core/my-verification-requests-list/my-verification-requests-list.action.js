import { httpRequest } from '../../main/http';

import { MY_VERIFICATION_REQUESTS_LIST_ACTION_TYPE } from './my-verification-requests-list.type';
import { MY_VERIFICATION_REQUESTS_LIST_API } from './my-verification-requests-list.constant';

export function myVerificationRequestsListUploadData() {
  return async (dispatch) => {
    dispatch({
      type: MY_VERIFICATION_REQUESTS_LIST_ACTION_TYPE.MY_VERIFICATION_REQUESTS_LIST_REQUEST_UPLOAD_DATA_PENDING,
    });

    try {
      const res = await httpRequest({
        method:
          MY_VERIFICATION_REQUESTS_LIST_API
            .MY_VERIFICATION_REQUESTS_LIST_UPLOAD_DATA.TYPE,
        url: MY_VERIFICATION_REQUESTS_LIST_API
          .MY_VERIFICATION_REQUESTS_LIST_UPLOAD_DATA.ENDPOINT,
      });

      dispatch({
        type: MY_VERIFICATION_REQUESTS_LIST_ACTION_TYPE.MY_VERIFICATION_REQUESTS_LIST_REQUEST_UPLOAD_DATA_SUCCESS,
        action: res.data,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: MY_VERIFICATION_REQUESTS_LIST_ACTION_TYPE.MY_VERIFICATION_REQUESTS_LIST_REQUEST_UPLOAD_DATA_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
