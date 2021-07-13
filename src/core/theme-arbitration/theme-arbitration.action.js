import { httpRequest } from '../../main/http';

import { THEME_ARBITRATION_ACTION_TYPE } from './theme-arbitration.type';
import { THEME_ARBITRATION_API } from './theme-arbitration.constant';

export function themeArbitrationListLoad() {
  return async (dispatch) => {
    dispatch({
      type: THEME_ARBITRATION_ACTION_TYPE.THEME_ARBITRATION_LOAD_REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method: THEME_ARBITRATION_API.THEME_ARBITRATION_LOAD_DATA.TYPE,
        url: THEME_ARBITRATION_API.THEME_ARBITRATION_LOAD_DATA.ENDPOINT,
      });

      dispatch({
        type: THEME_ARBITRATION_ACTION_TYPE.THEME_ARBITRATION_LOAD_REQUEST_SUCCESS,
        action: { data: res.data },
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: THEME_ARBITRATION_ACTION_TYPE.THEME_ARBITRATION_LOAD_REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
