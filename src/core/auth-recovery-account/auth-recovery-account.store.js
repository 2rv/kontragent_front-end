import { AUTH_RECOVERY_ACCOUNT_ACTION_TYPE } from './auth-recovery-account.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  authFormRecoveryAccount: initRequestState(),
};

export function authRecoveryAccountStore(state = initialState, action) {
  switch (action.type) {
    case AUTH_RECOVERY_ACCOUNT_ACTION_TYPE.AUTH_FORM_RECOVERY_ACCOUNT_UPLOAD_PENDING:
      return {
        ...state,
        authFormRecoveryAccount: setRequestPending(
          state.authFormRecoveryAccount,
        ),
      };

    case AUTH_RECOVERY_ACCOUNT_ACTION_TYPE.AUTH_FORM_RECOVERY_ACCOUNT_UPLOAD_SUCCESS:
      return {
        ...state,
        authFormRecoveryAccount: setRequestSuccess(
          state.authFormRecoveryAccount,
        ),
      };

    case AUTH_RECOVERY_ACCOUNT_ACTION_TYPE.AUTH_FORM_RECOVERY_ACCOUNT_UPLOAD_ERROR:
      return {
        ...state,
        authFormRecoveryAccount: setRequestError(
          state.authFormRecoveryAccount,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
