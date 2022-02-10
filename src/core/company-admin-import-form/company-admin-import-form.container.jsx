import { useReducer } from 'react';
import {
  isRequestPending,
  isRequestSuccess,
  isRequestError,
  getRequestErrorMessage,
} from '../../main/store/store.service';

import {
  initialState,
  companyAdminImportFormReducer,
} from './company-admin-import-form.reducer';
import { COMPANY_ADMIN_IMPORT_FORM_DATA_NAME as FIELD_NAME } from './company-admin-import-form.constant';
import { uploadCompanyAdminImportFormAction } from './company-admin-import-form.action';
import { CompanyAdminImportFormComponent } from './company-admin-import-form.component';
import { COMPANY_TYPE_OPTIONS } from '../company-admin-import/company-admin-import.constant';
import { convertCompanyAdminImportForm } from './company-admin-import-form.convert';

export function CompanyAdminImportFormContainer() {
  const [state, setState] = useReducer(
    companyAdminImportFormReducer,
    initialState,
  );

  const initialValues = () => {
    return {
      [FIELD_NAME.TYPE]: COMPANY_TYPE_OPTIONS[0].value,
      [FIELD_NAME.COMPANIES]: [initialCompany],
    };
  };

  const initialCompany = {
    [FIELD_NAME.INN]: '',
    [FIELD_NAME.REVIEW]: '',
    [FIELD_NAME.NAME]: '',
  };

  const onSubmit = (values) => {
    const data = convertCompanyAdminImportForm(values);
    uploadCompanyAdminImportFormAction(data)(setState);
  };

  return (
    <CompanyAdminImportFormComponent
      isPending={isRequestPending(state.form)}
      isSuccess={isRequestSuccess(state.form)}
      isError={isRequestError(state.form)}
      errorMessage={getRequestErrorMessage(state.form)}
      onSubmit={onSubmit}
      initialValues={initialValues()}
      initialCompany={initialCompany}
    />
  );
}
