import { VERIFICATIONS_ACTION_TYPE } from './verifications.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../../../main/store/store.service';

const initialState = {
  verifications: initRequestState(),
};

export function counterpartyVerificationsStore(state = initialState, action) {
  switch (action.type) {
    case VERIFICATIONS_ACTION_TYPE.VERIFICATIONS_LOAD_REQUEST_PENDING:
      return {
        ...state,
        verifications: setRequestPending(state.verifications),
      };

    case VERIFICATIONS_ACTION_TYPE.VERIFICATIONS_LOAD_REQUEST_SUCCESS:
      return {
        ...state,
        verifications: setRequestSuccess(state.verifications, action.data),
      };

    case VERIFICATIONS_ACTION_TYPE.VERIFICATIONS_LOAD_REQUEST_ERROR:
      return {
        ...state,
        verifications: setRequestError(
          state.verifications,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
