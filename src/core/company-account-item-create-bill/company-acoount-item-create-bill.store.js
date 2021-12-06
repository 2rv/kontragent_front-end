import { COMPANY_ACCOUNT_ITEM_CREATE_BILL_ACTION_TYPE } from './company-account-item-create-bill.constant';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
  resetRequestStatus,
} from '../../main/store/store.service';

const initialState = {
  form: initRequestState(),
};

export function companyAccountItemCreateBillStore(
  state = initialState,
  action,
) {
  switch (action.type) {
    case COMPANY_ACCOUNT_ITEM_CREATE_BILL_ACTION_TYPE.FORM_PENDING:
      return {
        ...state,
        form: setRequestPending(state.form),
      };
    case COMPANY_ACCOUNT_ITEM_CREATE_BILL_ACTION_TYPE.FORM_SUCCESS:
      return {
        ...state,
        form: setRequestSuccess(state.form),
      };

    case COMPANY_ACCOUNT_ITEM_CREATE_BILL_ACTION_TYPE.FORM_ERROR:
      return {
        ...state,
        form: setRequestError(state.form, action.errorMessage),
      };

    case COMPANY_ACCOUNT_ITEM_CREATE_BILL_ACTION_TYPE.FORM_RESET:
      return {
        ...state,
        form: resetRequestStatus(state.form),
      };

    case COMPANY_ACCOUNT_ITEM_CREATE_BILL_ACTION_TYPE.CLEANUP:
      return {
        ...initialState,
      };

    default:
      return state;
  }
}
