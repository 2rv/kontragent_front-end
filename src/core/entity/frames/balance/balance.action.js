import { httpRequest } from '../../../../main/http';

import { BALANCE_ACTION_TYPE } from './balance.type';
import { BALANCE_API } from './balance.constant';

export function balanceLoad() {
  return async (dispatch) => {
    dispatch({
      type: BALANCE_ACTION_TYPE.BALANCE_LOAD_REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method: BALANCE_API.BALANCE_LOAD_DATA.TYPE,
        url: BALANCE_API.BALANCE_LOAD_DATA.ENDPOINT,
      });

      dispatch({
        type: BALANCE_ACTION_TYPE.BALANCE_LOAD_REQUEST_SUCCESS,
        action: { data: res.data },
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: BALANCE_ACTION_TYPE.BALANCE_LOAD_REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
