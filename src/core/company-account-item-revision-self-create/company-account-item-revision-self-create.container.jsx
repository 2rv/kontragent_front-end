import { useReducer } from 'react';
import { useSelector } from 'react-redux';
import { getQuery } from '../../main/navigation';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';

import { COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME as FIELD_NAME } from './company-account-item-revision-self-create.constant';
import { uploadCompanyAccountItemRevisionSelfCreateForm } from './company-account-item-revision-self-create.action';
import { convertCompanyAccountItemRevisionSelfCreateFormData } from './company-account-item-revision-self-create.convert';
import { companyAccountItemRevisionSelfCreateFormValidation } from './company-account-item-revision-self-create.validation';
import { CompanyAccountItemRevisionSelfCreateComponent } from './company-account-item-revision-self-create.component';
import {
  initialState,
  companyAccountItemRevisionSelfCreateReducer,
} from './company-account-item-revision-self-create.reducer';
import {
  isRequestPending,
  isRequestSuccess,
  isRequestError,
  getRequestErrorMessage,
} from '../../main/store/store.service';

export function CompanyAccountItemRevisionSelfCreateContainer() {
  const { pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));
  const [state, setState] = useReducer(
    companyAccountItemRevisionSelfCreateReducer,
    initialState,
  );

  const getInitialValue = () => {
    return {
      [FIELD_NAME.DESCRIPTION]: '',
      [FIELD_NAME.FILE_ID_LIST]: [],
      [FIELD_NAME.YEARS]: [initialYear],
    };
  };
  const initialYear = {
    [FIELD_NAME.YEAR]: '',
    [FIELD_NAME.FIRST_PERIOD]: true,
    [FIELD_NAME.SECOND_PERIOD]: true,
    [FIELD_NAME.THIRD_PERIOD]: true,
    [FIELD_NAME.FOURTH_PERIOD]: true,
  };

  const onSubmitForm = (values) => {
    const data = {
      values: convertCompanyAccountItemRevisionSelfCreateFormData(values),
      companyId: getQuery('companyId'),
    };
    uploadCompanyAccountItemRevisionSelfCreateForm(data)(setState);
  };

  return (
    <CompanyAccountItemRevisionSelfCreateComponent
      pageLoading={pageLoading}
      isPending={isRequestPending(state.form)}
      isSuccess={isRequestSuccess(state.form)}
      isError={isRequestError(state.form)}
      errorMessage={getRequestErrorMessage(state.form)}
      initialValue={getInitialValue()}
      validation={companyAccountItemRevisionSelfCreateFormValidation}
      onSubmitForm={onSubmitForm}
      initialYear={initialYear}
    />
  );
}
