import { httpRequest } from '../../../../main/http';

import { PARTICIPANTS_ACTION_TYPE } from './participants.type';
import { PARTICIPANTS_API } from './participants.constant';

export function participantsLoad() {
  return async (dispatch) => {
    dispatch({
      type: PARTICIPANTS_ACTION_TYPE.PARTICIPANTS_LOAD_REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method: PARTICIPANTS_API.PARTICIPANTS_LOAD_DATA.TYPE,
        url: PARTICIPANTS_API.PARTICIPANTS_LOAD_DATA.ENDPOINT,
      });

      dispatch({
        type: PARTICIPANTS_ACTION_TYPE.PARTICIPANTS_LOAD_REQUEST_SUCCESS,
        action: { data: res.data },
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: PARTICIPANTS_ACTION_TYPE.PARTICIPANTS_LOAD_REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
