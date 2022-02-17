import { useReducer } from 'react';
import { useSelector } from 'react-redux';
import { getQuery } from '../../main/navigation';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import { CompanyAccountItemRevisionKontragentCreateFormValidation } from './company-account-item-revision-kontragent-create.validation';
import { COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME as FIELD_NAME } from './company-account-item-revision-kontragent-create.constant';
import { CompanyAccountItemRevisionKontragentCreateComponent } from './company-account-item-revision-kontragent-create.component';
import { uploadCompanyAccountItemRevisionKontragentCreateForm } from './company-account-item-revision-kontragent-create.action';
import {
  initialState,
  companyAccountItemRevisionKontragentCreateReducer,
} from './company-account-item-revision-kontragent-create.reducer';
import {
  isRequestPending,
  isRequestSuccess,
  isRequestError,
  getRequestErrorMessage,
} from '../../main/store/store.service';

export function CompanyAccountItemRevisionKontragentCreateContainer() {
  const { pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));
  const [state, setState] = useReducer(
    companyAccountItemRevisionKontragentCreateReducer,
    initialState,
  );

  const getInitialValue = () => {
    return {
      [FIELD_NAME.KONTRAGENTS]: [initialKontragent],
      [FIELD_NAME.USE_REF_BALANCE]: false,
    };
  };
  const initialYear = {
    [FIELD_NAME.YEAR]: '',
    [FIELD_NAME.FIRST_PERIOD]: true,
    [FIELD_NAME.SECOND_PERIOD]: true,
    [FIELD_NAME.THIRD_PERIOD]: true,
    [FIELD_NAME.FOURTH_PERIOD]: true,
  };
  const initialKontragent = {
    [FIELD_NAME.INN]: '',
    [FIELD_NAME.NAME]: '',
    [FIELD_NAME.KONTRAGENT_ID]: undefined,
    [FIELD_NAME.DESCRIPTION]: '',
    [FIELD_NAME.FILE_ID_LIST]: [],
    [FIELD_NAME.YEARS]: [initialYear],
  };

  const onSubmitForm = (values) => {
    const data = {
      values: values,
      companyId: getQuery('companyId'),
    };
    uploadCompanyAccountItemRevisionKontragentCreateForm(data)(setState);
  };

  return (
    <CompanyAccountItemRevisionKontragentCreateComponent
      pageLoading={pageLoading}
      isPending={isRequestPending(state.form)}
      isSuccess={isRequestSuccess(state.form)}
      isError={isRequestError(state.form)}
      errorMessage={getRequestErrorMessage(state.form)}
      initialValue={getInitialValue()}
      validation={CompanyAccountItemRevisionKontragentCreateFormValidation}
      onSubmitForm={onSubmitForm}
      initialYear={initialYear}
      initialKontragent={initialKontragent}
    />
  );
}
