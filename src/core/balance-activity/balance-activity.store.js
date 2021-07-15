import { BALANCE_ACTIVITY_ACTION_TYPE } from './balance-activity.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  balanceActivity: initRequestState(),
};

export function balanceActivityStore(state = initialState, action) {
  switch (action.type) {
    case BALANCE_ACTIVITY_ACTION_TYPE.BALANCE_ACTIVITY_LOAD_REQUEST_PENDING:
      return {
        ...state,
        balanceActivity: setRequestPending(state.balanceActivity),
      };

    case BALANCE_ACTIVITY_ACTION_TYPE.BALANCE_ACTIVITY_LOAD_REQUEST_SUCCESS:
      return {
        ...state,
        balanceActivity: setRequestSuccess(state.balanceActivity, action.data),
      };

    case BALANCE_ACTIVITY_ACTION_TYPE.BALANCE_ACTIVITY_LOAD_REQUEST_ERROR:
      return {
        ...state,
        balanceActivity: setRequestError(
          state.balanceActivity,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
