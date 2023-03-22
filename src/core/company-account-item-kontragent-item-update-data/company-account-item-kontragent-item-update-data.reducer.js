import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
  resetRequestStatus,
} from '../../main/store/store.service';

import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_UPDATE_DATA_ACTION_TYPE as ACTION_TYPE } from './company-account-item-kontragent-item-update-data.constant';

export const initialState = {
  request: initRequestState(),
};

export function companyAccountItemKontragentItemUpdateDataReducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case ACTION_TYPE.FORM_PENDING:
      return {
        ...state,
        request: setRequestPending(state.request),
      };

    case ACTION_TYPE.FORM_SUCCESS:
      return {
        ...state,
        request: setRequestSuccess(state.request, action.data),
      };

    case ACTION_TYPE.FORM_ERROR:
      return {
        ...state,
        request: setRequestError(state.request, action.errorMessage),
      };

    case ACTION_TYPE.FORM_RESET:
      return {
        ...state,
        request: resetRequestStatus(state.request),
      };

    default:
      return state;
  }
}
