import { httpRequest } from '../../main/http';

import { DASHBOARD_ADMIN_ACTION_TYPE } from './dashboard-admin.type';
import { DASHBOARD_ADMIN_API } from './dashboard-admin.constant';

export function dashboardAdminLoad() {
  return async (dispatch) => {
    dispatch({
      type: DASHBOARD_ADMIN_ACTION_TYPE.DASHBOARD_ADMIN_LOAD_REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method: DASHBOARD_ADMIN_API.DASHBOARD_ADMIN_LOAD_DATA.TYPE,
        url: DASHBOARD_ADMIN_API.DASHBOARD_ADMIN_LOAD_DATA.ENDPOINT,
      });

      dispatch({
        type: DASHBOARD_ADMIN_ACTION_TYPE.DASHBOARD_ADMIN_LOAD_REQUEST_SUCCESS,
        action: { data: res.data },
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: DASHBOARD_ADMIN_ACTION_TYPE.DASHBOARD_ADMIN_LOAD_REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
