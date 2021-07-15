import { httpRequest } from '../../main/http';

import { DIALOG_PERSONAL_ACTION_TYPE } from './dialog-personal.type';
import { DIALOG_PERSONAL_API } from './dialog-personal.constant';

export function dialogPersonalDataLoad() {
  return async (dispatch) => {
    dispatch({
      type: DIALOG_PERSONAL_ACTION_TYPE.DIALOG_PERSONAL_LOAD_REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method: DIALOG_PERSONAL_API.DIALOG_PERSONAL_LOAD_DATA.TYPE,
        url: DIALOG_PERSONAL_API.DIALOG_PERSONAL_LOAD_DATA.ENDPOINT,
      });

      dispatch({
        type: DIALOG_PERSONAL_ACTION_TYPE.DIALOG_PERSONAL_LOAD_REQUEST_SUCCESS,
        action: { data: res.data },
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: DIALOG_PERSONAL_ACTION_TYPE.DIALOG_PERSONAL_LOAD_REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
