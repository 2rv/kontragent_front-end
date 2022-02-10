import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

import { COMPANY_ADMIN_IMPORT_FORM_ACTION_TYPE as ACTION_TYPE } from './company-admin-import-form.constant';

export const initialState = {
  form: initRequestState(),
};

export function companyAdminImportFormReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPE.FORM_PENDING:
      return {
        ...state,
        form: setRequestPending(state.form),
      };

    case ACTION_TYPE.FORM_SUCCESS:
      return {
        ...state,
        form: setRequestSuccess(state.form, action.data),
      };

    case ACTION_TYPE.FORM_ERROR:
      return {
        ...state,
        form: setRequestError(state.form, action.errorMessage),
      };

    default:
      return state;
  }
}
