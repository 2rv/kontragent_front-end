import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_KONTUR_ACTION_TYPE } from './company-account-item-kontragent-item-kontur.constant';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  request: initRequestState(),
};

export function CompanyAccountItemKontragentItemKonturStore(
  state = initialState,
  action,
) {
  switch (action.type) {
    case COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_KONTUR_ACTION_TYPE.REQUEST_PENDING:
      return {
        ...state,
        request: setRequestPending(state.request),
      };

    case COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_KONTUR_ACTION_TYPE.REQUEST_SUCCESS:
      return {
        ...state,
        request: setRequestSuccess(state.request, action.data),
      };

    case COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_KONTUR_ACTION_TYPE.REQUEST_ERROR:
      return {
        ...state,
        request: setRequestError(state.request, action.errorMessage),
      };

    default:
      return state;
  }
}
