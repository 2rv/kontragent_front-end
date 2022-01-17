import { INVITE_ACTION_TYPE } from './invite.constant';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  form: initRequestState(),
};

export function inviteStore(state = initialState, action) {
  switch (action.type) {
    case INVITE_ACTION_TYPE.FORM_PENDING:
      return {
        ...state,
        form: setRequestPending(state.form),
      };

    case INVITE_ACTION_TYPE.FORM_SUCCESS:
      return {
        ...state,
        form: setRequestSuccess(state.form),
      };

    case INVITE_ACTION_TYPE.FORM_ERROR:
      return {
        ...state,
        form: setRequestError(state.form, action.errorMessage),
      };
    case INVITE_ACTION_TYPE.FORM_CLEANUP:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
