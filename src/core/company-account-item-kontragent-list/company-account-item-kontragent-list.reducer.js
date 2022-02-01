import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
  setRequestUpdatePending,
  setRequestUpdateSuccess,
} from '../../main/store/store.service';

import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_LIST_ACTION_TYPE } from './company-account-item-kontragent-list.constant';

export const initialState = {
  request: initRequestState({ list: [] }),
};

export function companyAccountItemKontragentListReducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case COMPANY_ACCOUNT_ITEM_KONTRAGENT_LIST_ACTION_TYPE.REQUEST_PENDING:
      return {
        ...state,
        request: setRequestPending(state.request),
      };

    case COMPANY_ACCOUNT_ITEM_KONTRAGENT_LIST_ACTION_TYPE.REQUEST_SUCCESS:
      return {
        ...state,
        request: setRequestSuccess(state.request, action.data),
      };

    case COMPANY_ACCOUNT_ITEM_KONTRAGENT_LIST_ACTION_TYPE.REQUEST_ERROR:
      return {
        ...state,
        request: setRequestError(state.request, action.errorMessage),
      };

    case COMPANY_ACCOUNT_ITEM_KONTRAGENT_LIST_ACTION_TYPE.REQUEST_UPDATE_PENDING:
      return {
        ...state,
        request: setRequestUpdatePending(state.request),
      };

    case COMPANY_ACCOUNT_ITEM_KONTRAGENT_LIST_ACTION_TYPE.REQUEST_UPDATE_SUCCESS:
      return {
        ...state,
        request: setRequestUpdateSuccess(state.request, action.data),
      };
    default:
      return state;
  }
}
