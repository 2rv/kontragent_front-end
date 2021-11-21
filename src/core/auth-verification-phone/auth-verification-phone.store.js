import { AUTH_VERIFICATION_PHONE_ACTION_TYPE } from './auth-verification-phone.constant';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  form: initRequestState(),
};

export function authVerificationPhoneStore(state = initialState, action) {
  switch (action.type) {
    case AUTH_VERIFICATION_PHONE_ACTION_TYPE.FORM_PENDING:
      return {
        ...state,
        form: setRequestPending(state.form),
      };

    case AUTH_VERIFICATION_PHONE_ACTION_TYPE.FORM_SUCCESS:
      return {
        ...state,
        form: setRequestSuccess(state.form),
      };

    case AUTH_VERIFICATION_PHONE_ACTION_TYPE.FORM_ERROR:
      return {
        ...state,
        form: setRequestError(state.form, action.errorMessage),
      };
    case AUTH_VERIFICATION_PHONE_ACTION_TYPE.FORM_CLEANUP:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
