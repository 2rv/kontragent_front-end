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

    case ADMIN_BILL_REVISION_ACTION_TYPE.CLEANUP:
      return {
        ...initialState,
      };
    //close
    case ADMIN_BILL_REVISION_ACTION_TYPE.CLOSE_FORM_PENDING:
      return {
        ...state,
        closeForm: setRequestPending(state.closeForm),
      };
    case ADMIN_BILL_REVISION_ACTION_TYPE.CLOSE_FORM_SUCCESS:
      return {
        ...state,
        closeForm: setRequestSuccess(state.closeForm),
      };

    case ADMIN_BILL_REVISION_ACTION_TYPE.CLOSE_FORM_ERROR:
      return {
        ...state,
        closeForm: setRequestError(state.closeForm, action.errorMessage),
      };

    case ADMIN_BILL_REVISION_ACTION_TYPE.CLOSE_FORM_RESET:
      return {
        ...state,
        closeForm: resetRequestStatus(state.closeForm),
      };

    //delete
    case ADMIN_BILL_REVISION_ACTION_TYPE.DELETE_FORM_PENDING:
      return {
        ...state,
        deleteForm: setRequestPending(state.deleteForm),
      };
    case ADMIN_BILL_REVISION_ACTION_TYPE.DELETE_FORM_SUCCESS:
      return {
        ...state,
        deleteForm: setRequestSuccess(state.deleteForm),
      };

    case ADMIN_BILL_REVISION_ACTION_TYPE.DELETE_FORM_SUCCESS:
      return {
        ...state,
        deleteForm: setRequestError(state.deleteForm, action.errorMessage),
      };

    case ADMIN_BILL_REVISION_ACTION_TYPE.DELETE_FORM_RESET:
      return {
        ...state,
        deleteForm: resetRequestStatus(state.deleteForm),
      };

    default:
      return state;
  }
}
