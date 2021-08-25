import { httpRequest } from '../../../../main/http';

import { ARBITRATION_CASES_ACTION_TYPE } from './arbitration-cases.type';
import { ARBITRATION_CASES_API } from './arbitration-cases.constant';

export function arbitrationCasesLoad() {
  return async (dispatch) => {
    dispatch({
      type: ARBITRATION_CASES_ACTION_TYPE.ARBITRATION_CASES_LOAD_REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method: ARBITRATION_CASES_API.ARBITRATION_CASES_LOAD_DATA.TYPE,
        url: ARBITRATION_CASES_API.ARBITRATION_CASES_LOAD_DATA.ENDPOINT,
      });

      dispatch({
        type: ARBITRATION_CASES_ACTION_TYPE.ARBITRATION_CASES_LOAD_REQUEST_SUCCESS,
        action: { data: res.data },
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: ARBITRATION_CASES_ACTION_TYPE.ARBITRATION_CASES_LOAD_REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
