import { ARBITRATION_REQUESTS_LIST_ACTION_TYPE } from './arbitration-requests-list.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  arbitrationListData: initRequestState(),
};

export function arbitrationRequestsListStore(state = initialState, action) {
  switch (action.type) {
    case ARBITRATION_REQUESTS_LIST_ACTION_TYPE.ARBITRATION_REQUESTS_LIST_REQUEST_UPLOAD_DATA_PENDING:
      return {
        ...state,
        arbitrationListData: setRequestPending(state.arbitrationListData),
      };

    case ARBITRATION_REQUESTS_LIST_ACTION_TYPE.ARBITRATION_REQUESTS_LIST_REQUEST_UPLOAD_DATA_SUCCESS:
      return {
        ...state,
        arbitrationListData: setRequestSuccess(
          state.arbitrationListData,
          action.data,
        ),
      };
      s;

    case ARBITRATION_REQUESTS_LIST_ACTION_TYPE.ARBITRATION_REQUESTS_LIST_REQUEST_UPLOAD_DATA_ERROR:
      return {
        ...state,
        arbitrationListData: setRequestError(
          state.arbitrationListData,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
