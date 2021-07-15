import { httpRequest } from '../../main/http';

import { ENTITY_ACTION_TYPE } from './entity.type';
import { ENTITY_API } from './entity.constant';

export function entityDataLoad() {
  return async (dispatch) => {
    dispatch({
      type: ENTITY_ACTION_TYPE.ENTITY_LOAD_REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method: ENTITY_API.ENTITY_LOAD_DATA.TYPE,
        url: ENTITY_API.ENTITY_LOAD_DATA.ENDPOINT,
      });

      dispatch({
        type: ENTITY_ACTION_TYPE.ENTITY_LOAD_REQUEST_SUCCESS,
        action: { data: res.data },
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: ENTITY_ACTION_TYPE.ENTITY_LOAD_REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
