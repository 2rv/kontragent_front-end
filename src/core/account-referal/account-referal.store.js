import { ACCOUNT_REFERAL_ACTION_TYPE } from './account-referal.constant';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  accountReferalInfo: initRequestState(),
};

export function accountReferalStore(state = initialState, action) {
  switch (action.type) {
    case ACCOUNT_REFERAL_ACTION_TYPE.ACCOUNT_REFERAL_PENDING:
      return {
        accountReferalInfo: setRequestPending(state.accountReferalInfo),
      };

    case ACCOUNT_REFERAL_ACTION_TYPE.ACCOUNT_REFERAL_SUCCESS:
      return {
        accountReferalInfo: setRequestSuccess(state.accountReferalInfo),
      };

    case ACCOUNT_REFERAL_ACTION_TYPE.ACCOUNT_REFERAL_ERROR:
      return {
        accountReferalInfo: setRequestError(
          state.accountReferalInfo,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
