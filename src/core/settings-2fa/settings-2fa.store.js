import { SETTINGS_2FA_ACTION_TYPE } from './settings-2fa.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  settings2FA: initRequestState(),
};

export function settings2FAStore(state = initialState, action) {
  switch (action.type) {
    case SETTINGS_2FA_ACTION_TYPE.SETTINGS_2FA_FORM_UPLOAD_PENDING:
      return {
        ...state,
        settings2FA: setRequestPending(state.settings2FA),
      };

    case SETTINGS_2FA_ACTION_TYPE.SETTINGS_2FA_FORM_UPLOAD_SUCCESS:
      return {
        ...state,
        settings2FA: setRequestSuccess(state.settings2FA),
      };

    case SETTINGS_2FA_ACTION_TYPE.SETTINGS_2FA_FORM_UPLOAD_ERROR:
      return {
        ...state,
        settings2FA: setRequestError(state.settings2FA, action.errorMessage),
      };

    default:
      return state;
  }
}
