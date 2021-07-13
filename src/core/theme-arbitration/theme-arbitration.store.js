import { THEME_ARBITRATION_ACTION_TYPE } from './theme-arbitration.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  themeArbitration: initRequestState(),
};

export function themeArbitrationStore(state = initialState, action) {
  switch (action.type) {
    case THEME_ARBITRATION_ACTION_TYPE.THEME_ARBITRATION_LOAD_REQUEST_PENDING:
      return {
        ...state,
        themeArbitration: setRequestPending(state.themeArbitration),
      };

    case THEME_ARBITRATION_ACTION_TYPE.THEME_ARBITRATION_LOAD_REQUEST_SUCCESS:
      return {
        ...state,
        themeArbitration: setRequestSuccess(state.themeArbitration, action.data),
      };

    case THEME_ARBITRATION_ACTION_TYPE.THEME_ARBITRATION_LOAD_REQUEST_ERROR:
      return {
        ...state,
        themeArbitration: setRequestError(
          state.themeArbitration,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
