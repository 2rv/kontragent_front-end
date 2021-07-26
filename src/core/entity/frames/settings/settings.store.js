import { SETTINGS_ACTION_TYPE } from './settings.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../../../main/store/store.service';

const initialState = {
  settings: initRequestState(),
};

export function entitySettingsStore(state = initialState, action) {
  switch (action.type) {
    case SETTINGS_ACTION_TYPE.SETTINGS_LOAD_REQUEST_PENDING:
      return {
        ...state,
        settings: setRequestPending(state.settings),
      };

    case SETTINGS_ACTION_TYPE.SETTINGS_LOAD_REQUEST_SUCCESS:
      return {
        ...state,
        settings: setRequestSuccess(state.settings, action.data),
      };

    case SETTINGS_ACTION_TYPE.SETTINGS_LOAD_REQUEST_ERROR:
      return {
        ...state,
        settings: setRequestError(
          state.settings,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
