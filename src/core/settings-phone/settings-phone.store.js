import {
  initRequestState,
  setRequestSuccess,
  setRequestPending,
  setRequestError,
} from '../../main/store/store.service';

import { SETTINGS_PHONE_ACTION_TYPE } from './settings-phone.type';

const initialState = {
  settingsChangePhone: initRequestState(),
  settingsPhone: initRequestState(),
};

export function settingsPhoneStore(state = initialState, action) {
  switch (action.type) {
    case SETTINGS_PHONE_ACTION_TYPE.SETTINGS_PHONE_GET_PHONE_SUCCESS:
      return {
        ...state,
        settingsPhone: setRequestSuccess(state.settingsPhone, action.data),
      };

    case SETTINGS_PHONE_ACTION_TYPE.SETTINGS_PHONE_GET_PHONE_PENDING:
      return {
        ...state,
        settingsPhone: setRequestPending(state.settingsPhone),
      };

    case SETTINGS_PHONE_ACTION_TYPE.SETTINGS_PHONE_GET_PHONE_ERROR:
      return {
        ...state,
        settingsPhone: setRequestError(
          state.settingsPhone,
          action.errorMessage,
        ),
      };

    case SETTINGS_PHONE_ACTION_TYPE.SETTINGS_FORM_CHANGE_PHONE_UPLOAD_SUCCESS:
      return {
        ...state,
        settingsChangePhone: setRequestSuccess(state.settingsChangePhone),
      };

    case SETTINGS_PHONE_ACTION_TYPE.SETTINGS_FORM_CHANGE_PHONE_UPLOAD_PENDING:
      return {
        ...state,
        settingsChangePhone: setRequestPending(state.settingsChangePhone),
      };

    case SETTINGS_PHONE_ACTION_TYPE.SETTINGS_FORM_CHANGE_PHONE_UPLOAD_ERROR:
      return {
        ...state,
        settingsChangePhone: setRequestError(
          state.settingsChangePhone,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
