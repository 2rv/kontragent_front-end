import { httpRequest } from '../../../../main/http';

import { SETTINGS_ACTION_TYPE } from './settings.type';
import { SETTINGS_API } from './settings.constant';

export function settingsLoad() {
  return async (dispatch) => {
    dispatch({
      type: SETTINGS_ACTION_TYPE.SETTINGS_LOAD_REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method: SETTINGS_API.SETTINGS_LOAD_DATA.TYPE,
        url: SETTINGS_API.SETTINGS_LOAD_DATA.ENDPOINT,
      });

      dispatch({
        type: SETTINGS_ACTION_TYPE.SETTINGS_LOAD_REQUEST_SUCCESS,
        action: { data: res.data },
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: SETTINGS_ACTION_TYPE.SETTINGS_LOAD_REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
