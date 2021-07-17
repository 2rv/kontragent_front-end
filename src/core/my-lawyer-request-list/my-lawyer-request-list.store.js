import { MY_LAWYER_REQUEST_LIST_ACTION_TYPE } from './my-lawyer-request-list.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  myLawyerRequestListData: initRequestState(),
};

export function myLawyerRequestListStore(state = initialState, action) {
  switch (action.type) {
    case MY_LAWYER_REQUEST_LIST_ACTION_TYPE.MY_LAWYER_REQUEST_LIST_LOAD_REQUEST_PENDING:
      return {
        ...state,
        myLawyerRequestListData: setRequestPending(state.myLawyerRequestList),
        Data,
      };

    case MY_LAWYER_REQUEST_LIST_ACTION_TYPE.MY_LAWYER_REQUEST_LIST_LOAD_REQUEST_SUCCESS:
      return {
        ...state,
        myLawyerRequestListData: setRequestSuccess(
          state.myLawyerRequestListData,
          action.data,
        ),
      };
      s;

    case MY_LAWYER_REQUEST_LIST_ACTION_TYPE.MY_LAWYER_REQUEST_LIST_LOAD_REQUEST_ERROR:
      return {
        ...state,
        myLawyerRequestListData: setRequestError(
          state.myLawyerRequestListData,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
