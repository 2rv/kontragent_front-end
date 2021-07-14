import { MY_COMPANIES_ADD_COMPANY_ACTION_TYPE } from './my-companies-add-company.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  addCompanyForm: initRequestState(),
};

export function myCompaniesAddCompanyStore(state = initialState, action) {
  switch (action.type) {
    case MY_COMPANIES_ADD_COMPANY_ACTION_TYPE.ADD_COMPANY_FORM_UPLOAD_PENDING:
      return {
        ...state,
        addCompanyForm: setRequestPending(state.addCompanyForm),
      };

    case MY_COMPANIES_ADD_COMPANY_ACTION_TYPE.ADD_COMPANY_FORM_UPLOAD_SUCCESS:
      return {
        ...state,
        addCompanyForm: setRequestSuccess(state.addCompanyForm),
      };

    case MY_COMPANIES_ADD_COMPANY_ACTION_TYPE.ADD_COMPANY_FORM_UPLOAD_ERROR:
      return {
        ...state,
        addCompanyForm: setRequestError(
          state.addCompanyForm,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
