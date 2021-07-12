import { MY_REQUESTS_JURISTS_LIST_ACTION_TYPE } from './my-requests-jurists-list.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  myRequestsJuristsList: initRequestState(),
};

export function myRequestsJuristsListStore(state = initialState, action) {
  switch (action.type) {
    case MY_REQUESTS_JURISTS_LIST_ACTION_TYPE.MY_REQUESTS_JURISTS_LIST_LOAD_REQUEST_PENDING:
      return {
        ...state,
        myRequestsJuristsList: setRequestPending(state.myRequestsJuristsList),
      };

    case MY_REQUESTS_JURISTS_LIST_ACTION_TYPE.MY_REQUESTS_JURISTS_LIST_LOAD_REQUEST_SUCCESS:
      return {
        ...state,
        myRequestsJuristsList: setRequestSuccess(
          state.myRequestsJuristsList,
          action.data,
        ),
      };
      s;

    case MY_REQUESTS_JURISTS_LIST_ACTION_TYPE.MY_REQUESTS_JURISTS_LIST_LOAD_REQUEST_ERROR:
      return {
        ...state,
        myRequestsJuristsList: setRequestError(
          state.myRequestsJuristsList,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
