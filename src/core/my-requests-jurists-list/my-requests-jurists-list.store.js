import { MY_REQUESTS_JURISTS_LIST_ACTION_TYPE } from './my-requests-jurists-list.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  myRequestsJuristsListData: initRequestState(),
};

export function myRequestsJuristsListStore(state = initialState, action) {
  switch (action.type) {
    case MY_REQUESTS_JURISTS_LIST_ACTION_TYPE.MY_REQUESTS_JURISTS_LIST_REQUEST_GET_DATA_PENDING:
      return {
        ...state,
        myRequestsJuristsListData: setRequestPending(
          state.myRequestsJuristsListData,
        ),
      };

    case MY_REQUESTS_JURISTS_LIST_ACTION_TYPE.MY_REQUESTS_JURISTS_LIST_REQUEST_GET_DATA_SUCCESS:
      return {
        ...state,
        myRequestsJuristsListData: setRequestSuccess(
          state.myRequestsJuristsListData,
          action.data,
        ),
      };
      s;

    case MY_REQUESTS_JURISTS_LIST_ACTION_TYPE.MY_REQUESTS_JURISTS_LIST_REQUEST_GET_DATA_ERROR:
      return {
        ...state,
        myRequestsJuristsListData: setRequestError(
          state.myRequestsJuristsListData,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
