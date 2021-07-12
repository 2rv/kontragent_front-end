import { MY_LEGAL_ENTITIES_LIST_ACTION_TYPE } from './my-legal-entities-list.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  myLegalEntitiesList: initRequestState(),
};

export function myLegalEntitiesListStore(state = initialState, action) {
  switch (action.type) {
    case MY_LEGAL_ENTITIES_LIST_ACTION_TYPE.MY_LEGAL_ENTITIES_LIST_LOAD_REQUEST_PENDING:
      return {
        ...state,
        myLegalEntitiesList: setRequestPending(state.myLegalEntitiesList),
      };

    case MY_LEGAL_ENTITIES_LIST_ACTION_TYPE.MY_LEGAL_ENTITIES_LIST_LOAD_REQUEST_SUCCESS:
      return {
        ...state,
        myLegalEntitiesList: setRequestSuccess(
          state.myLegalEntitiesList,
          action.data,
        ),
      };
      s;

    case MY_LEGAL_ENTITIES_LIST_ACTION_TYPE.MY_LEGAL_ENTITIES_LIST_LOAD_REQUEST_ERROR:
      return {
        ...state,
        myLegalEntitiesList: setRequestError(
          state.myLegalEntitiesList,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
