import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_ACTION_TYPE as ACTION_TYPE } from './company-account-item-kontragent-item-info.constant';

export const initialState = {
  request: initRequestState(),
};

export function companyAccountItemKontragentItemInfoReducer(
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
        request: setRequestSuccess(state.request, action.data),
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
