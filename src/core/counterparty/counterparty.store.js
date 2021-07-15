import { COUNTERPARTY_ACTION_TYPE } from './counterparty.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  counterparty: initRequestState(),
};

export function counterpartyStore(state = initialState, action) {
  switch (action.type) {
    case COUNTERPARTY_ACTION_TYPE.COUNTERPARTY_LOAD_REQUEST_PENDING:
      return {
        ...state,
        counterparty: setRequestPending(state.counterparty),
      };

    case COUNTERPARTY_ACTION_TYPE.COUNTERPARTY_LOAD_REQUEST_SUCCESS:
      return {
        ...state,
        counterparty: setRequestSuccess(state.counterparty, action.data),
      };

    case COUNTERPARTY_ACTION_TYPE.COUNTERPARTY_LOAD_REQUEST_ERROR:
      return {
        ...state,
        counterparty: setRequestError(
          state.counterparty,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
