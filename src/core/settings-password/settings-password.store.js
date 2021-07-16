import {
  initRequestState,
  setRequestSuccess,
  setRequestPending,
  setRequestError,
} from '../../main/store/store.service';

import { SETTINGS_PASSWORD_ACTION_TYPE } from './settings-password.type';

const initialState = {
  settingsChangePassword: initRequestState(),
};

export function settingsPasswordStore(state = initialState, action) {
  switch (action.type) {
    case SETTINGS_PASSWORD_ACTION_TYPE.SETTINGS_FORM_CHANGE_PASSWORD_UPLOAD_SUCCESS:
      return {
        ...state,
        settingsChangePassword: setRequestSuccess(state.settingsChangePassword),
      };

    case SETTINGS_PASSWORD_ACTION_TYPE.SETTINGS_FORM_CHANGE_PASSWORD_UPLOAD_PENDING:
      return {
        ...state,
        settingsChangePassword: setRequestPending(state.settingsChangePassword),
      };

    case SETTINGS_PASSWORD_ACTION_TYPE.SETTINGS_FORM_CHANGE_PASSWORD_UPLOAD_ERROR:
      return {
        ...state,
        settingsChangePassword: setRequestError(
          state.settingsChangePassword,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
