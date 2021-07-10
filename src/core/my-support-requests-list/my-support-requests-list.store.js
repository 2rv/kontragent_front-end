import { MY_SUPPORT_REQUESTS_LIST_ACTION_TYPE } from './my-support-requests-list.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  mySupportRequestsListData: initRequestState(),
};

export function mySupportRequestsListStore(state = initialState, action) {
  switch (action.type) {
    case MY_SUPPORT_REQUESTS_LIST_ACTION_TYPE.MY_SUPPORT_REQUESTS_LIST_REQUEST_UPLOAD_DATA_PENDING:
      return {
        ...state,
        mySupportRequestsList: setRequestPending(state.mySupportRequestsList),
      };

    case MY_SUPPORT_REQUESTS_LIST_ACTION_TYPE.MY_SUPPORT_REQUESTS_LIST_REQUEST_UPLOAD_DATA_SUCCESS:
      return {
        ...state,
        mySupportRequestsList: setRequestSuccess(
          state.mySupportRequestsList,
          action.data,
        ),
      };
      s;

    case MY_SUPPORT_REQUESTS_LIST_ACTION_TYPE.MY_SUPPORT_REQUESTS_LIST_REQUEST_UPLOAD_DATA_ERROR:
      return {
        ...state,
        mySupportRequestsList: setRequestError(
          state.mySupportRequestsList,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
