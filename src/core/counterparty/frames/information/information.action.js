import { httpRequest } from '../../../../main/http';

import { INFORMATION_ACTION_TYPE } from './information.type';
import { INFORMATION_API } from './information.constant';

export function informationLoad() {
  return async (dispatch) => {
    dispatch({
      type: INFORMATION_ACTION_TYPE.INFORMATION_LOAD_REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method: INFORMATION_API.INFORMATION_LOAD_DATA.TYPE,
        url: INFORMATION_API.INFORMATION_LOAD_DATA.ENDPOINT,
      });

      dispatch({
        type: INFORMATION_ACTION_TYPE.INFORMATION_LOAD_REQUEST_SUCCESS,
        action: { data: res.data },
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: INFORMATION_ACTION_TYPE.INFORMATION_LOAD_REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
