import { httpRequest } from '../../main/http';

import { DIALOG_LAWYER_ACTION_TYPE } from './dialog-lawyer.type';
import { DIALOG_LAWYER_API } from './dialog-lawyer.constant';

export function dialogLawyerDataLoad() {
  return async (dispatch) => {
    dispatch({
      type: DIALOG_LAWYER_ACTION_TYPE.DIALOG_LAWYER_LOAD_REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method: DIALOG_LAWYER_API.DIALOG_LAWYER_LOAD_DATA.TYPE,
        url: DIALOG_LAWYER_API.DIALOG_LAWYER_LOAD_DATA.ENDPOINT,
      });

      dispatch({
        type: DIALOG_LAWYER_ACTION_TYPE.DIALOG_LAWYER_LOAD_REQUEST_SUCCESS,
        action: { data: res.data },
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: DIALOG_LAWYER_ACTION_TYPE.DIALOG_LAWYER_LOAD_REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
