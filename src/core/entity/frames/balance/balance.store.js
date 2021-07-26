import { BALANCE_ACTION_TYPE } from './balance.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../../../main/store/store.service';

const initialState = {
  balance: initRequestState(),
};

export function entityBalanceStore(state = initialState, action) {
  switch (action.type) {
    case BALANCE_ACTION_TYPE.BALANCE_LOAD_REQUEST_PENDING:
      return {
        ...state,
        balance: setRequestPending(state.balance),
      };

    case BALANCE_ACTION_TYPE.BALANCE_LOAD_REQUEST_SUCCESS:
      return {
        ...state,
        balance: setRequestSuccess(state.balance, action.data),
      };

    case BALANCE_ACTION_TYPE.BALANCE_LOAD_REQUEST_ERROR:
      return {
        ...state,
        balance: setRequestError(
          state.balance,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
