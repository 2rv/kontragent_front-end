import { MY_LEGAL_ENTITIES_LIST_ACTION_TYPE } from './my-legal-entities-list.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  myLegalEntitiesListData: initRequestState(),
};

export function myLegalEntitiesListStore(state = initialState, action) {
  switch (action.type) {
    case MY_LEGAL_ENTITIES_LIST_ACTION_TYPE.MY_LEGAL_ENTITIES_LIST_REQUEST_UPLOAD_DATA_PENDING:
      return {
        ...state,
        myLegalEntitiesListData: setRequestPending(
          state.myLegalEntitiesListData,
        ),
      };

    case MY_LEGAL_ENTITIES_LIST_ACTION_TYPE.MY_LEGAL_ENTITIES_LIST_REQUEST_UPLOAD_DATA_SUCCESS:
      return {
        ...state,
        myLegalEntitiesListData: setRequestSuccess(
          state.myLegalEntitiesListData,
          action.data,
        ),
      };
      s;

    case MY_LEGAL_ENTITIES_LIST_ACTION_TYPE.MY_LEGAL_ENTITIES_LIST_REQUEST_UPLOAD_DATA_ERROR:
      return {
        ...state,
        myLegalEntitiesListData: setRequestError(
          state.myLegalEntitiesListData,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
