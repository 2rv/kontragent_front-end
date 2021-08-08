import { HEADER_ACTION_TYPE } from './header.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  notification: initRequestState(),
};

export function headerStore(state = initialState, action) {
  switch (action.type) {
    case HEADER_ACTION_TYPE.HEADER_NOTIFICATION_LOAD_REQUEST_PENDING:
      return {
        ...state,
        notification: setRequestPending(state.notification),
      };
    case HEADER_ACTION_TYPE.HEADER_NOTIFICATION_LOAD_REQUEST_SUCCESS:
      return {
        ...state,
        notification: setRequestSuccess(state.notification, action.data),
      };
    case HEADER_ACTION_TYPE.HEADER_NOTIFICATION_LOAD_REQUEST_ERROR:
      return {
        ...state,
        notification: setRequestError(state.notification, action.errorMessage),
      };
    default:
      return state;
  }
}
