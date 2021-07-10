import { MY_COUNTERPARTIES_LIST_ACTION_TYPE } from './my-counterparties-list.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  myCounterpartiesListData: initRequestState(),
};

export function myCounterpartiesListStore(state = initialState, action) {
  switch (action.type) {
    case MY_COUNTERPARTIES_LIST_ACTION_TYPE.MY_COUNTERPARTIES_LIST_REQUEST_UPLOAD_DATA_PENDING:
      return {
        ...state,
        myCounterpartiesListData: setRequestPending(
          state.myCounterpartiesListData,
        ),
      };

    case MY_COUNTERPARTIES_LIST_ACTION_TYPE.MY_COUNTERPARTIES_LIST_REQUEST_UPLOAD_DATA_SUCCESS:
      return {
        ...state,
        myCounterpartiesListData: setRequestSuccess(
          state.myCounterpartiesListData,
          action.data,
        ),
      };
      s;

    case MY_COUNTERPARTIES_LIST_ACTION_TYPE.MY_COUNTERPARTIES_LIST_REQUEST_UPLOAD_DATA_ERROR:
      return {
        ...state,
        myCounterpartiesListData: setRequestError(
          state.myCounterpartiesListData,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
