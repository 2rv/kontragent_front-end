import { MY_VERIFICATION_REQUESTS_LIST_ACTION_TYPE } from './my-verification-requests-list.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  myVerificationListData: initRequestState(),
};

export function myVerificationRequestsListStore(state = initialState, action) {
  switch (action.type) {
    case MY_VERIFICATION_REQUESTS_LIST_ACTION_TYPE.MY_VERIFICATION_REQUESTS_LIST_REQUEST_UPLOAD_DATA_PENDING:
      return {
        ...state,
        myVerificationListData: setRequestPending(state.myVerificationListData),
      };

    case MY_VERIFICATION_REQUESTS_LIST_ACTION_TYPE.MY_VERIFICATION_REQUESTS_LIST_REQUEST_UPLOAD_DATA_SUCCESS:
      return {
        ...state,
        myVerificationListData: setRequestSuccess(
          state.myVerificationListData,
          action.data,
        ),
      };
      s;

    case MY_VERIFICATION_REQUESTS_LIST_ACTION_TYPE.MY_VERIFICATION_REQUESTS_LIST_REQUEST_UPLOAD_DATA_ERROR:
      return {
        ...state,
        myVerificationListData: setRequestError(
          state.myVerificationListData,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
