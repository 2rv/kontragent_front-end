import { httpRequest } from '../../main/http';

import { BALANCE_ACTIVITY_ACTION_TYPE } from './balance-activity.type';
import { BALANCE_ACTIVITY_API } from './balance-activity.constant';

export function balanceActivityLoad() {
  return async (dispatch) => {
    dispatch({
      type: BALANCE_ACTIVITY_ACTION_TYPE.BALANCE_ACTIVITY_LOAD_REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method: BALANCE_ACTIVITY_API.BALANCE_ACTIVITY_LOAD_DATA.TYPE,
        url: BALANCE_ACTIVITY_API.BALANCE_ACTIVITY_LOAD_DATA.ENDPOINT,
      });

      dispatch({
        type: BALANCE_ACTIVITY_ACTION_TYPE.BALANCE_ACTIVITY_LOAD_REQUEST_SUCCESS,
        action: { data: res.data },
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: BALANCE_ACTIVITY_ACTION_TYPE.BALANCE_ACTIVITY_LOAD_REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
