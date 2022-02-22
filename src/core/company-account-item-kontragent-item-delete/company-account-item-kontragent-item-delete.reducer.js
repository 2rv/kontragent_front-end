import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_DELETE_ACTION_TYPE as ACTION_TYPE } from './company-account-item-kontragent-item-delete.constant';

export const initialState = {
  request: initRequestState(),
};

export function companyAccountItemKontragentItemDeleteReducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case ACTION_TYPE.REQUEST_PENDING:
      return {
        ...state,
        request: setRequestPending(state.request),
      };

    case ACTION_TYPE.REQUEST_SUCCESS:
      return {
        ...state,
        request: setRequestSuccess(state.request),
      };

    case ACTION_TYPE.REQUEST_ERROR:
      return {
        ...state,
        request: setRequestError(state.request, action.errorMessage),
      };

    default:
      return state;
  }
}
