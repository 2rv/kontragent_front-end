import { ARBITRATION_REQUESTS_LIST_ACTION_TYPE } from './arbitration-requests-list.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  arbitrationList: initRequestState(),
};

export function arbitrationRequestsListStore(state = initialState, action) {
  switch (action.type) {
    case ARBITRATION_REQUESTS_LIST_ACTION_TYPE.ARBITRATION_REQUESTS_LIST_LOAD_REQUEST_PENDING:
      return {
        ...state,
        arbitrationList: setRequestPending(state.arbitrationList),
      };

    case ARBITRATION_REQUESTS_LIST_ACTION_TYPE.ARBITRATION_REQUESTS_LIST_LOAD_REQUEST_SUCCESS:
      return {
        ...state,
        arbitrationList: setRequestSuccess(state.arbitrationList, action.data),
      };
      s;

    case ARBITRATION_REQUESTS_LIST_ACTION_TYPE.ARBITRATION_REQUESTS_LIST_LOAD_REQUEST_ERROR:
      return {
        ...state,
        arbitrationList: setRequestError(
          state.arbitrationList,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
