import { AUTH_VERIFICATION_EMAIL_CONFIRM_ACTION_TYPE } from './auth-verification-email-confirm.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  authVerificationEmailConfirm: initRequestState(),
};

export function authVerificationEmailConfirmStore(
  state = initialState,
  action,
) {
  switch (action.type) {
    case AUTH_VERIFICATION_EMAIL_CONFIRM_ACTION_TYPE.AUTH_VERIFICATION_EMAIL_CONFIRM_UPLOAD_PENDING:
      return {
        ...state,
        authVerificationEmailConfirm: setRequestPending(
          state.authVerificationEmailConfirm,
        ),
      };

    case AUTH_VERIFICATION_EMAIL_CONFIRM_ACTION_TYPE.AUTH_VERIFICATION_EMAIL_CONFIRM_UPLOAD_SUCCESS:
      return {
        ...state,
        authVerificationEmailConfirm: setRequestSuccess(
          state.authVerificationEmailConfirm,
        ),
      };

    case AUTH_VERIFICATION_EMAIL_CONFIRM_ACTION_TYPE.AUTH_VERIFICATION_EMAIL_CONFIRM_UPLOAD_ERROR:
      return {
        ...state,
        authVerificationEmailConfirm: setRequestError(
          state.authVerificationEmailConfirm,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
