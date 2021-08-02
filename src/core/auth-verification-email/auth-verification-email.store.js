import { AUTH_VERIFICATION_EMAIL_ACTION_TYPE } from './auth-verification-email.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  authFormVerificationEmail: initRequestState(),
};

export function authVerificationEmailStore(state = initialState, action) {
  switch (action.type) {
    case AUTH_VERIFICATION_EMAIL_ACTION_TYPE.AUTH_FORM_VERIFICATION_EMAIL_UPLOAD_PENDING:
      return {
        ...state,
        authFormVerificationEmail: setRequestPending(
          state.authFormVerificationEmail,
        ),
      };

    case AUTH_VERIFICATION_EMAIL_ACTION_TYPE.AUTH_FORM_VERIFICATION_EMAIL_UPLOAD_SUCCESS:
      return {
        ...state,
        authFormVerificationEmail: setRequestSuccess(
          state.authFormVerificationEmail,
          action.data,
        ),
      };

    case AUTH_VERIFICATION_EMAIL_ACTION_TYPE.AUTH_FORM_VERIFICATION_EMAIL_UPLOAD_ERROR:
      return {
        ...state,
        authFormVerificationEmail: setRequestError(
          state.authFormVerificationEmail,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
