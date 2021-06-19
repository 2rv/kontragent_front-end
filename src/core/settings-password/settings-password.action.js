import { httpRequest } from '../../main/http';

import { SETTINGS_PASSWORD_ACTION_TYPE } from './settings-password.type';
import { SETTINGS_PASSWORD_API } from './settings-password.constant';

export function settingsFormChangePasswordUploadForm(data) {
  return async (dispatch) => {
    dispatch({
      type: SETTINGS_PASSWORD_ACTION_TYPE.SETTINGS_FORM_CHANGE_PASSWORD_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: SETTINGS_PASSWORD_API.TYPE,
        url: SETTINGS_PASSWORD_API.ENDPOINT,
        data,
      });

      dispatch({
        type: SETTINGS_PASSWORD_ACTION_TYPE.SETTINGS_FORM_CHANGE_PASSWORD_UPLOAD_SUCCESS,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: SETTINGS_PASSWORD_ACTION_TYPE.SETTINGS_FORM_CHANGE_PASSWORD_UPLOAD_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
