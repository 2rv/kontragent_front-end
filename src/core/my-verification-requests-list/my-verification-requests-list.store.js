import { MY_VERIFICATION_REQUESTS_LIST_ACTION_TYPE } from './my-verification-requests-list.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  myVerificationList: initRequestState(),
};

export function myVerificationRequestsListStore(state = initialState, action) {
  switch (action.type) {
    case MY_VERIFICATION_REQUESTS_LIST_ACTION_TYPE.MY_VERIFICATION_REQUESTS_LIST_LOAD_REQUEST_PENDING:
      return {
        ...state,
        myVerificationList: setRequestPending(state.myVerificationList),
      };

    case MY_VERIFICATION_REQUESTS_LIST_ACTION_TYPE.MY_VERIFICATION_REQUESTS_LIST_LOAD_REQUEST_SUCCESS:
      return {
        ...state,
        myVerificationList: setRequestSuccess(
          state.myVerificationList,
          action.data,
        ),
      };
      s;

    case MY_VERIFICATION_REQUESTS_LIST_ACTION_TYPE.MY_VERIFICATION_REQUESTS_LIST_LOAD_REQUEST_ERROR:
      return {
        ...state,
        myVerificationList: setRequestError(
          state.myVerificationList,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
