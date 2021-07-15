import { httpRequest } from '../../main/http';

import { COUNTERPARTY_ACTION_TYPE } from './counterparty.type';
import { COUNTERPARTY_API } from './counterparty.constant';

export function counterpartyLoad() {
  return async (dispatch) => {
    dispatch({
      type: COUNTERPARTY_ACTION_TYPE.COUNTERPARTY_LOAD_REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method: COUNTERPARTY_API.COUNTERPARTY_LOAD_DATA.TYPE,
        url: COUNTERPARTY_API.COUNTERPARTY_LOAD_DATA.ENDPOINT,
      });

      dispatch({
        type: COUNTERPARTY_ACTION_TYPE.COUNTERPARTY_LOAD_REQUEST_SUCCESS,
        action: { data: res.data },
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: COUNTERPARTY_ACTION_TYPE.COUNTERPARTY_LOAD_REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
