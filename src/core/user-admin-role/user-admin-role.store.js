import { USER_ADMIN_ROLE_ACTION_TYPE } from './user-admin-role.constant';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  form: initRequestState(),
};

export function userAdminRoleStore(state = initialState, action) {
  switch (action.type) {
    case USER_ADMIN_ROLE_ACTION_TYPE.FORM_PENDING:
      return {
        ...state,
        form: setRequestPending(state.form),
      };

    case USER_ADMIN_ROLE_ACTION_TYPE.FORM_SUCCESS:
      return {
        ...state,
        form: setRequestSuccess(state.form),
      };

    case USER_ADMIN_ROLE_ACTION_TYPE.FORM_ERROR:
      return {
        ...state,
        form: setRequestError(state.form, action.errorMessage),
      };

    default:
      return state;
  }
}
