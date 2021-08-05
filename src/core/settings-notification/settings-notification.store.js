import { SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_ACTION_TYPE } from './settings-notification.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  settingsNotification: initRequestState(),
  settingsEmail: initRequestState(),
};

export function settingsChangeEmailNotification(state = initialState, action) {
  switch (action.type) {
    case SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_ACTION_TYPE.SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_UPLOAD_PENDING:
      return {
        ...state,
        settingsNotification: setRequestPending(state.settingsNotification),
      };
    case SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_ACTION_TYPE.SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_UPLOAD_SUCCESS:
      return {
        ...state,
        settingsNotification: setRequestSuccess(state.settingsNotification),
      };
    case SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_ACTION_TYPE.SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_UPLOAD_ERROR:
      return {
        ...state,
        settingsNotification: setRequestError(
          state.settingsNotification,
          action.errorMessage,
        ),
      };

    case SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_ACTION_TYPE.SETTINGS_EMAIL_GET_EMAIL_SUCCESS:
      return {
        ...state,
        settingsEmail: setRequestSuccess(state.settingsEmail, action.data),
      };
    case SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_ACTION_TYPE.SETTINGS_EMAIL_GET_EMAIL_PENDING:
      return {
        ...state,
        settingsEmail: setRequestPending(state.settingsEmail),
      };
    case SETTINGS_FORM_CHANGE_EMAIL_NOTIFICATION_ACTION_TYPE.SETTINGS_EMAIL_GET_EMAIL_ERROR:
      return {
        ...state,
        settingsEmail: setRequestError(
          state.settingsEmail,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
