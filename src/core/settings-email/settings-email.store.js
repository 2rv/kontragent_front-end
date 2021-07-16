import {
  initRequestState,
  setRequestSuccess,
  setRequestPending,
  setRequestError,
} from '../../main/store/store.service';

import { SETTINGS_EMAIL_ACTION_TYPE } from './settings-email.type';

const initialState = {
  settingsChangeEmail: initRequestState(),
  settingsEmail: initRequestState(),
};

export function settingsEmailStore(state = initialState, action) {
  switch (action.type) {
    case SETTINGS_EMAIL_ACTION_TYPE.SETTINGS_EMAIL_GET_EMAIL_SUCCESS:
      return {
        ...state,
        settingsEmail: setRequestSuccess(state.settingsEmail, action.data),
      };

    case SETTINGS_EMAIL_ACTION_TYPE.SETTINGS_EMAIL_GET_EMAIL_PENDING:
      return {
        ...state,
        settingsEmail: setRequestPending(state.settingsEmail),
      };

    case SETTINGS_EMAIL_ACTION_TYPE.SETTINGS_EMAIL_GET_EMAIL_ERROR:
      return {
        ...state,
        settingsEmail: setRequestError(
          state.settingsEmail,
          action.errorMessage,
        ),
      };

    case SETTINGS_EMAIL_ACTION_TYPE.SETTINGS_FORM_CHANGE_EMAIL_UPLOAD_SUCCESS:
      return {
        ...state,
        settingsChangeEmail: setRequestSuccess(state.settingsChangeEmail),
      };

    case SETTINGS_EMAIL_ACTION_TYPE.SETTINGS_FORM_CHANGE_EMAIL_UPLOAD_PENDING:
      return {
        ...state,
        settingsChangeEmail: setRequestPending(state.settingsChangeEmail),
      };

    case SETTINGS_EMAIL_ACTION_TYPE.SETTINGS_FORM_CHANGE_EMAIL_UPLOAD_ERROR:
      return {
        ...state,
        settingsChangeEmail: setRequestError(
          state.settingsChangeEmail,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
