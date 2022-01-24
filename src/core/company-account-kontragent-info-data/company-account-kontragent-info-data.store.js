import { COMPANY_ACCOUNT_KONTRAGENT_INFO_DATA_ACTION_TYPE } from './company-account-kontragent-info-data.constant';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  request: initRequestState(),
};

export function CompanyAccountKontragentInfoDataStore(
  state = initialState,
  action,
) {
  switch (action.type) {
    case COMPANY_ACCOUNT_KONTRAGENT_INFO_DATA_ACTION_TYPE.REQUEST_PENDING:
      return {
        ...state,
        request: setRequestPending(state.request),
      };

    case COMPANY_ACCOUNT_KONTRAGENT_INFO_DATA_ACTION_TYPE.REQUEST_SUCCESS:
      return {
        ...state,
        request: setRequestSuccess(state.request, action.data),
      };

    case COMPANY_ACCOUNT_KONTRAGENT_INFO_DATA_ACTION_TYPE.REQUEST_ERROR:
      return {
        ...state,
        request: setRequestError(state.request, action.errorMessage),
      };

    default:
      return state;
  }
}
