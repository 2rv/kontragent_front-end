import { INFORMATION_ACTION_TYPE } from './information.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../../../main/store/store.service';

const initialState = {
  information: initRequestState(),
};

export function informationStore(state = initialState, action) {
  switch (action.type) {
    case INFORMATION_ACTION_TYPE.INFORMATION_LOAD_REQUEST_PENDING:
      return {
        ...state,
        information: setRequestPending(state.information),
      };

    case INFORMATION_ACTION_TYPE.INFORMATION_LOAD_REQUEST_SUCCESS:
      return {
        ...state,
        information: setRequestSuccess(state.information, action.data),
      };

    case INFORMATION_ACTION_TYPE.INFORMATION_LOAD_REQUEST_ERROR:
      return {
        ...state,
        information: setRequestError(
          state.information,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
