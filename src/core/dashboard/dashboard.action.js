import { httpRequest } from '../../main/http';

import { DASHBOARD_ACTION_TYPE } from './dashboard.type';
import { DASHBOARD_API } from './dashboard.constant';

export function dashboardLoad() {
  return async (dispatch) => {
    dispatch({
      type: DASHBOARD_ACTION_TYPE.DASHBOARD_LOAD_REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method: DASHBOARD_API.DASHBOARD_LOAD_DATA.TYPE,
        url: DASHBOARD_API.DASHBOARD_LOAD_DATA.ENDPOINT,
      });

      dispatch({
        type: DASHBOARD_ACTION_TYPE.DASHBOARD_LOAD_REQUEST_SUCCESS,
        action: { data: res.data },
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: DASHBOARD_ACTION_TYPE.DASHBOARD_LOAD_REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
