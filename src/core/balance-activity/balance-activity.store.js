import { BALANCE_ACTIVITY_ACTION_TYPE } from './balance-activity.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  balanceActivityListData: initRequestState(),
};

export function balanceActivityStore(state = initialState, action) {
  switch (action.type) {
    case BALANCE_ACTIVITY_ACTION_TYPE.BALANCE_ACTIVITY_LOAD_REQUEST_PENDING:
      return {
        ...state,
        balanceActivityListData: setRequestPending(
          state.balanceActivityListData,
        ),
      };

    case BALANCE_ACTIVITY_ACTION_TYPE.BALANCE_ACTIVITY_LOAD_REQUEST_SUCCESS:
      return {
        ...state,
        balanceActivityListData: setRequestSuccess(
          state.balanceActivityListData,
          action.data,
        ),
      };

    case BALANCE_ACTIVITY_ACTION_TYPE.BALANCE_ACTIVITY_LOAD_REQUEST_ERROR:
      return {
        ...state,
        balanceActivityListData: setRequestError(
          state.balanceActivityListData,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
