import { MY_COUNTERPARTIES_LIST_ACTION_TYPE } from './my-counterparties-list.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  myCounterpartiesList: initRequestState(),
};

export function myCounterpartiesListStore(state = initialState, action) {
  switch (action.type) {
    case MY_COUNTERPARTIES_LIST_ACTION_TYPE.MY_COUNTERPARTIES_LIST_REQUEST_LOAD_LIST_PENDING:
      return {
        ...state,
        myCounterpartiesList: setRequestPending(state.myCounterpartiesList),
      };

    case MY_COUNTERPARTIES_LIST_ACTION_TYPE.MY_COUNTERPARTIES_LIST_REQUEST_LOAD_LIST_SUCCESS:
      return {
        ...state,
        myCounterpartiesList: setRequestSuccess(
          state.myCounterpartiesList,
          action.data,
        ),
      };
      s;

    case MY_COUNTERPARTIES_LIST_ACTION_TYPE.MY_COUNTERPARTIES_LIST_REQUEST_LOAD_LIST_ERROR:
      return {
        ...state,
        myCounterpartiesList: setRequestError(
          state.myCounterpartiesList,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
