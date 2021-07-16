import { httpRequest } from '../../main/http';

import { LAWYER_REQUEST_ACTION_TYPE } from './lawyer-request.type';
import { LAWYER_REQUEST_API } from './lawyer-request.constant';

export function lawyerRequestLoad() {
  return async (dispatch) => {
    dispatch({
      type: LAWYER_REQUEST_ACTION_TYPE.LAWYER_REQUEST_LOAD_REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method: LAWYER_REQUEST_API.LAWYER_REQUEST_LOAD_DATA.TYPE,
        url: LAWYER_REQUEST_API.LAWYER_REQUEST_LOAD_DATA.ENDPOINT,
      });

      dispatch({
        type: LAWYER_REQUEST_ACTION_TYPE.LAWYER_REQUEST_LOAD_REQUEST_SUCCESS,
        action: { data: res.data },
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: LAWYER_REQUEST_ACTION_TYPE.LAWYER_REQUEST_LOAD_REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
