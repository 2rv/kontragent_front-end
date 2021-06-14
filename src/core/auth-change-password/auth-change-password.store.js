import { AUTH_CHANGE_PASSWORD_ACTION_TYPE } from './auth-change-password.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  authChangePasswordForm: initRequestState(),
};

export function authChangePasswordStore(state = initialState, action) {
  switch (action.type) {
    case AUTH_CHANGE_PASSWORD_ACTION_TYPE.AUTH_CHANGE_PASSWORD_FORM_UPLOAD_PENDING:
      return {
        ...state,
        authChangePasswordForm: setRequestPending(state.authChangePasswordForm),
      };

    case AUTH_CHANGE_PASSWORD_ACTION_TYPE.AUTH_CHANGE_PASSWORD_FORM_UPLOAD_SUCCESS:
      return {
        ...state,
        authChangePasswordForm: setRequestSuccess(state.authChangePasswordForm),
      };

    case AUTH_CHANGE_PASSWORD_ACTION_TYPE.AUTH_CHANGE_PASSWORD_FORM_UPLOAD_ERROR:
      return {
        ...state,
        authChangePasswordForm: setRequestError(
          state.authChangePasswordForm,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
