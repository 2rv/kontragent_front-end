import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
  setRequestUpdatePending,
  setRequestUpdateSuccess,
} from '../../main/store/store.service';
import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_IMPORT_ACTION_TYPE } from './company-account-item-kontragent-import.constant';

export const initialState = {
  form: initRequestState(),
  importForm: initRequestState({ list: [] }),
};

export function companyAccountItemKontragentImportReducer(state, action) {
  switch (action.type) {
    case COMPANY_ACCOUNT_ITEM_KONTRAGENT_IMPORT_ACTION_TYPE.FORM_PENDING:
      return {
        ...state,
        form: setRequestPending(state.form),
      };

    case COMPANY_ACCOUNT_ITEM_KONTRAGENT_IMPORT_ACTION_TYPE.FORM_SUCCESS:
      return {
        ...state,
        form: setRequestSuccess(state.form),
      };

    case COMPANY_ACCOUNT_ITEM_KONTRAGENT_IMPORT_ACTION_TYPE.FORM_ERROR:
      return {
        ...state,
        form: setRequestError(state.form, action.errorMessage),
      };

    case COMPANY_ACCOUNT_ITEM_KONTRAGENT_IMPORT_ACTION_TYPE.IMPORT_FORM_PENDING:
      return {
        ...state,
        importForm: setRequestPending(state.importForm),
      };

    case COMPANY_ACCOUNT_ITEM_KONTRAGENT_IMPORT_ACTION_TYPE.IMPORT_FORM_SUCCESS:
      return {
        ...state,
        importForm: setRequestSuccess(state.importForm, action.data),
      };

    case COMPANY_ACCOUNT_ITEM_KONTRAGENT_IMPORT_ACTION_TYPE.IMPORT_FORM_ERROR:
      return {
        ...state,
        importForm: setRequestError(state.importForm, action.errorMessage),
      };

    case COMPANY_ACCOUNT_ITEM_KONTRAGENT_IMPORT_ACTION_TYPE.IMPORT_FORM_UPDATE_PENDING:
      return {
        ...state,
        importForm: setRequestUpdatePending(state.importForm),
      };

    case COMPANY_ACCOUNT_ITEM_KONTRAGENT_IMPORT_ACTION_TYPE.IMPORT_FORM_UPDATE_SUCCESS:
      return {
        ...state,
        importForm: setRequestUpdateSuccess(state.importForm, action.data),
      };

    default:
      return state;
  }
}
