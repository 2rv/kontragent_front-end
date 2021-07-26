import { httpRequest } from '../../../../main/http';

import { VERIFICATIONS_ACTION_TYPE } from './verifications.type';
import { VERIFICATIONS_API } from './verifications.constant';

export function verificationsLoad() {
  return async (dispatch) => {
    dispatch({
      type: VERIFICATIONS_ACTION_TYPE.VERIFICATIONS_LOAD_REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method: VERIFICATIONS_API.VERIFICATIONS_LOAD_DATA.TYPE,
        url: VERIFICATIONS_API.VERIFICATIONS_LOAD_DATA.ENDPOINT,
      });

      dispatch({
        type: VERIFICATIONS_ACTION_TYPE.VERIFICATIONS_LOAD_REQUEST_SUCCESS,
        action: { data: res.data },
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: VERIFICATIONS_ACTION_TYPE.VERIFICATIONS_LOAD_REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
