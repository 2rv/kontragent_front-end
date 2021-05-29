import { LOGIN_ACTION_TYPE } from './login.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  loginForm : initRequestState(),
};

export function loginStore(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ACTION_TYPE.LOGIN_FORM_UPLOAD_PENDING:
      return {
        ...state,
        loginForm : setRequestPending(state.loginForm ),
      };

    case LOGIN_ACTION_TYPE.LOGIN_FORM_UPLOAD_SUCCESS:
      return {
        ...state,
        loginForm : setRequestSuccess(state.loginForm ),
      };

    case LOGIN_ACTION_TYPE.LOGIN_FORM_UPLOAD_ERROR:
      return {
        ...state,
        loginForm : setRequestError(state.loginForm , action.errorMessage),
      };

    default:
      return state;
  }
}
