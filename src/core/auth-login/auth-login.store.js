import { AUTH_LOGIN_ACTION_TYPE } from './auth-login.constant';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  form: initRequestState(),
};

export function authLoginStore(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGIN_ACTION_TYPE.FORM_PENDING:
      return {
        ...state,
        form: setRequestPending(state.form),
      };

    case AUTH_LOGIN_ACTION_TYPE.FORM_SUCCESS:
      return {
        ...state,
        form: setRequestSuccess(state.form),
      };

    case AUTH_LOGIN_ACTION_TYPE.FORM_ERROR:
      return {
        ...state,
        form: setRequestError(state.form, action.errorMessage),
      };
    case AUTH_LOGIN_ACTION_TYPE.FORM_CLEANUP:
      return {
        form: initRequestState(),
      };
    default:
      return state;
  }
}
