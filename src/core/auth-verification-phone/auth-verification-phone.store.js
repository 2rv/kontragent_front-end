import { AUTH_VERIFICATION_PHONE_ACTION_TYPE } from './auth-verification-phone.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  verificationPhone: initRequestState(),
  verificationPhoneConfirm: initRequestState(),
};

export function authVerificationPhoneStore(state = initialState, action) {
  switch (action.type) {
    //REDUCERS OF SENDING VERIFICATION CODE
    case AUTH_VERIFICATION_PHONE_ACTION_TYPE.AUTH_FORM_VERIFICATION_PHONE_UPLOAD_PENDING:
      return {
        ...state,
        verificationPhone: setRequestPending(state.verificationPhone),
      };

    case AUTH_VERIFICATION_PHONE_ACTION_TYPE.AUTH_FORM_VERIFICATION_PHONE_UPLOAD_SUCCESS:
      return {
        ...state,
        verificationPhone: setRequestSuccess(state.verificationPhone),
      };

    case AUTH_VERIFICATION_PHONE_ACTION_TYPE.AUTH_FORM_VERIFICATION_PHONE_UPLOAD_ERROR:
      return {
        ...state,
        verificationPhone: setRequestError(
          state.verificationPhone,
          action.errorMessage,
        ),
      };

    //REDUCERS OF CONFIRMING ENTERED VERIFICATION CODE
    case AUTH_VERIFICATION_PHONE_ACTION_TYPE.AUTH_FORM_VERIFICATION_PHONE_CONFIRM_UPLOAD_PENDING:
      return {
        ...state,
        verificationPhoneConfirm: setRequestPending(
          state.verificationPhoneConfirm,
        ),
      };

    case AUTH_VERIFICATION_PHONE_ACTION_TYPE.AUTH_FORM_VERIFICATION_PHONE_CONFIRM_UPLOAD_SUCCESS:
      return {
        ...state,
        verificationPhoneConfirm: setRequestSuccess(
          state.verificationPhoneConfirm,
        ),
      };

    case AUTH_VERIFICATION_PHONE_ACTION_TYPE.AUTH_FORM_VERIFICATION_PHONE_CONFIRM_UPLOAD_ERROR:
      return {
        ...state,
        verificationPhoneConfirm: setRequestError(
          state.verificationPhoneConfirm,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
