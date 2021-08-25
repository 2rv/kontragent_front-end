import { httpRequest } from '../../main/http';
import { SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_ACTION_TYPE } from './settings-notification.type';
import { SETTINGS_CHANGE_EMAIL_NOTIFICATION_API } from './settings-notification.constant';
import { performSettingsNotification } from './settings-notification.convert';

export function settingsNotificationChangeEmail(data) {
  return async (dispatch) => {
    dispatch({
      type: SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_ACTION_TYPE.SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_UPLOAD_PENDING,
    });

    try {
      const res = await httpRequest({
        method: SETTINGS_CHANGE_EMAIL_NOTIFICATION_API.CHANGE_EMAIL.TYPE,
        url: SETTINGS_CHANGE_EMAIL_NOTIFICATION_API.CHANGE_EMAIL.ENDPOINT,
        data,
      });

      dispatch({
        type: SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_ACTION_TYPE.SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_UPLOAD_SUCCESS,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_ACTION_TYPE.SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_UPLOAD_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}

export function settingsNotificationGetEmail() {
  return async (dispatch) => {
    dispatch({
      type: SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_ACTION_TYPE.SETTINGS_EMAIL_GET_EMAIL_PENDING,
    });

    try {
      const res = await httpRequest({
        method: SETTINGS_CHANGE_EMAIL_NOTIFICATION_API.GET_EMAIL.TYPE,
        url: SETTINGS_CHANGE_EMAIL_NOTIFICATION_API.GET_EMAIL.ENDPOINT,
      });

      const data = performSettingsNotification(res.data);
      dispatch({
        type: SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_ACTION_TYPE.SETTINGS_EMAIL_GET_EMAIL_SUCCESS,
        data: data,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_ACTION_TYPE.SETTINGS_EMAIL_GET_EMAIL_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
