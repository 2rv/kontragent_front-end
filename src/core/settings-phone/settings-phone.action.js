import { httpRequest } from '../../main/http';

import { SETTINGS_PHONE_ACTION_TYPE } from './settings-phone.type';
import {
  SETTINGS_PHONE_API,
  SETTINGS_FORM_CHANGE_PHONE_API,
} from './settings-phone.constant';
import { performSettingsPhone } from './settings-phone.convert';

export function settingsPhoneGetPhone() {
  return async (dispatch) => {
    dispatch({
      type: SETTINGS_PHONE_ACTION_TYPE.SETTINGS_PHONE_GET_PHONE_PENDING,
    });

    try {
      const res = await httpRequest({
        method: SETTINGS_PHONE_API.TYPE,
        url: SETTINGS_PHONE_API.ENDPOINT,
      });

      const data = performSettingsPhone(res.data);
      dispatch({
        type: SETTINGS_PHONE_ACTION_TYPE.SETTINGS_PHONE_GET_PHONE_SUCCESS,
        data: data,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: SETTINGS_PHONE_ACTION_TYPE.SETTINGS_PHONE_GET_PHONE_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}

export function settingsFormChangePhoneUploadForm(data, resetForm) {
  return async (dispatch) => {
    dispatch({
      type: SETTINGS_PHONE_ACTION_TYPE.SETTINGS_FORM_CHANGE_PHONE_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: SETTINGS_FORM_CHANGE_PHONE_API.TYPE,
        url: SETTINGS_FORM_CHANGE_PHONE_API.ENDPOINT,
        data,
      });

      dispatch({
        type: SETTINGS_PHONE_ACTION_TYPE.SETTINGS_FORM_CHANGE_PHONE_UPLOAD_SUCCESS,
      });

      resetForm();
    } catch (error) {
      if (error) {
        dispatch({
          type: SETTINGS_PHONE_ACTION_TYPE.SETTINGS_FORM_CHANGE_PHONE_UPLOAD_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
