import { httpRequest } from '../../../../main/http';

import { RED_ZONE_INFORMATION_ACTION_TYPE } from './red-zone-information.type';
import { RED_ZONE_INFORMATION_API } from './red-zone-information.constant';

export function redZoneInformationLoad() {
  return async (dispatch) => {
    dispatch({
      type: RED_ZONE_INFORMATION_ACTION_TYPE.RED_ZONE_INFORMATION_LOAD_REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method: RED_ZONE_INFORMATION_API.RED_ZONE_INFORMATION_LOAD_DATA.TYPE,
        url: RED_ZONE_INFORMATION_API.RED_ZONE_INFORMATION_LOAD_DATA.ENDPOINT,
      });

      dispatch({
        type: RED_ZONE_INFORMATION_ACTION_TYPE.RED_ZONE_INFORMATION_LOAD_REQUEST_SUCCESS,
        action: { data: res.data },
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: RED_ZONE_INFORMATION_ACTION_TYPE.RED_ZONE_INFORMATION_LOAD_REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
