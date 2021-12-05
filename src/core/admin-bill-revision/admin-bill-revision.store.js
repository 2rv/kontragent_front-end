import { ADMIN_BILL_REVISION_ACTION_TYPE } from './admin-bill-revision.constant';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
  resetRequestStatus,
} from '../../main/store/store.service';

const initialState = {
  form: initRequestState(),
  deleteForm: initRequestState(),
  closeForm: initRequestState(),
};

export function adminBillRevisionStore(state = initialState, action) {
  switch (action.type) {
    case ADMIN_BILL_REVISION_ACTION_TYPE.FORM_PENDING:
      return {
        ...state,
        form: setRequestPending(state.form),
      };
    case ADMIN_BILL_REVISION_ACTION_TYPE.FORM_SUCCESS:
      return {
        ...state,
        form: setRequestSuccess(state.form),
      };

    case ADMIN_BILL_REVISION_ACTION_TYPE.FORM_ERROR:
      return {
        ...state,
        form: setRequestError(state.form, action.errorMessage),
      };

    case ADMIN_BILL_REVISION_ACTION_TYPE.FORM_RESET:
      return {
        ...state,
        form: resetRequestStatus(state.form),
      };
    //close
    case ADMIN_BILL_REVISION_ACTION_TYPE.CLOSE_FORM_PENDING:
      return {
        ...state,
        form: setRequestPending(state.form),
      };
    case ADMIN_BILL_REVISION_ACTION_TYPE.CLOSE_FORM_SUCCESS:
      return {
        ...state,
        form: setRequestSuccess(state.form),
      };

    case ADMIN_BILL_REVISION_ACTION_TYPE.CLOSE_FORM_ERROR:
      return {
        ...state,
        form: setRequestError(state.form, action.errorMessage),
      };

    case ADMIN_BILL_REVISION_ACTION_TYPE.CLOSE_FORM_RESET:
      return {
        ...state,
        form: resetRequestStatus(state.form),
      };

    //delete
    case ADMIN_BILL_REVISION_ACTION_TYPE.DELETE_FORM_PENDING:
      return {
        ...state,
        form: setRequestPending(state.form),
      };
    case ADMIN_BILL_REVISION_ACTION_TYPE.DELETE_FORM_SUCCESS:
      return {
        ...state,
        form: setRequestSuccess(state.form),
      };

    case ADMIN_BILL_REVISION_ACTION_TYPE.DELETE_FORM_SUCCESS:
      return {
        ...state,
        form: setRequestError(state.form, action.errorMessage),
      };

    case ADMIN_BILL_REVISION_ACTION_TYPE.DELETE_FORM_RESET:
      return {
        ...state,
        form: resetRequestStatus(state.form),
      };

    default:
      return state;
  }
}
