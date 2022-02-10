import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
  setRequestUpdatePending,
  setRequestUpdateSuccess,
} from '../../main/store/store.service';
import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_IMPORT_XLSX_ACTION_TYPE as ACTION_TYPE } from './company-account-item-kontragent-import-xlsx.constant';

export const initialState = {
  form: initRequestState(),
  xlsx: initRequestState({ list: [] }),
};

export function companyAccountItemKontragentImportXlsxReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPE.FORM_PENDING:
      return {
        ...state,
        form: setRequestPending(state.form),
      };

    case ACTION_TYPE.FORM_SUCCESS:
      return {
        ...state,
        form: setRequestSuccess(state.form),
      };

    case ACTION_TYPE.FORM_ERROR:
      return {
        ...state,
        form: setRequestError(state.form, action.errorMessage),
      };

    case ACTION_TYPE.XLSX_PENDING:
      return {
        ...state,
        xlsx: setRequestPending(state.xlsx),
      };

    case ACTION_TYPE.XLSX_SUCCESS:
      return {
        ...state,
        xlsx: setRequestSuccess(state.xlsx, action.data),
      };

    case ACTION_TYPE.XLSX_ERROR:
      return {
        ...state,
        xlsx: setRequestError(state.xlsx, action.errorMessage),
      };

    case ACTION_TYPE.XLSX_UPDATE_PENDING:
      return {
        ...state,
        xlsx: setRequestUpdatePending(state.xlsx),
      };

    case ACTION_TYPE.XLSX_UPDATE_SUCCESS:
      return {
        ...state,
        xlsx: setRequestUpdateSuccess(state.xlsx, action.data),
      };

    default:
      return state;
  }
}
