import { httpRequest } from '../../main/http';

import { SETTINGS_EMAIL_ACTION_TYPE } from './settings-email.type';
import {
  SETTINGS_EMAIL_API,
  SETTINGS_FORM_CHANGE_EMAIL_API,
} from './settings-email.constant';
import { SETTINGS_EMAIL_DATA_NAME } from './settings-email.constant';

export function settingsEmailGetEmail() {
  return async (dispatch) => {
    dispatch({
      type: SETTINGS_EMAIL_ACTION_TYPE.SETTINGS_EMAIL_GET_EMAIL_PENDING,
    });

    try {
      const res = await httpRequest({
        method: SETTINGS_EMAIL_API.TYPE,
        url: SETTINGS_EMAIL_API.ENDPOINT,
      });

      const email = res.data[SETTINGS_EMAIL_DATA_NAME.EMAIL];
      dispatch({
        type: SETTINGS_EMAIL_ACTION_TYPE.SETTINGS_EMAIL_GET_EMAIL_SUCCESS,
        email: email,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: SETTINGS_EMAIL_ACTION_TYPE.SETTINGS_EMAIL_GET_EMAIL_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}

export function settingsFormChangeEmailUploadForm(data) {
  return async (dispatch) => {
    dispatch({
      type: SETTINGS_EMAIL_ACTION_TYPE.SETTINGS_FORM_CHANGE_EMAIL_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: SETTINGS_FORM_CHANGE_EMAIL_API.TYPE,
        url: SETTINGS_FORM_CHANGE_EMAIL_API.ENDPOINT,
        data,
      });

      dispatch({
        type: SETTINGS_EMAIL_ACTION_TYPE.SETTINGS_FORM_CHANGE_EMAIL_UPLOAD_SUCCESS,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: SETTINGS_EMAIL_ACTION_TYPE.SETTINGS_FORM_CHANGE_EMAIL_UPLOAD_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
