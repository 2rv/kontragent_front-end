import { useEffect, useContext, useReducer } from 'react';
import { useSelector } from 'react-redux';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { getQuery } from '../../main/navigation';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import { CompanyAccountItemKontragentContext } from '../company-account-item-kontragent/company-account-item-kontragent.page';

import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_CREATE_DATA_NAME } from './company-account-item-kontragent-create.constant';
import { companyAccountItemKontragentCreateFormValidation } from './company-account-item-kontragent-create.validation';
import {
  uploadCompanyAccountItemKontragentCreateForm,
  resetCompanyAccountItemKontragentCreateFormState,
} from './company-account-item-kontragent-create.action';
import {
  initialState,
  companyAccountItemKontragentCreateReducer,
} from './company-account-item-kontragent-create.reducer';
import { CompanyAccountItemKontragentCreateComponent } from './company-account-item-kontragent-create.component';

export function CompanyAccountItemKontragentCreateContainer() {
  const { pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const [state, setState] = useReducer(
    companyAccountItemKontragentCreateReducer,
    initialState,
  );
  const { value } = useContext(CompanyAccountItemKontragentContext);

  useEffect(() => {
    resetCompanyAccountItemKontragentCreateFormState()(setState);
  }, []);

  const companyAccountItemKontragentCreateFormSendData = (values) => {
    const companyId = getQuery('companyId');
    uploadCompanyAccountItemKontragentCreateForm(values, companyId)(
      setState,
      value.reloadList,
    );
  };

  const getInitialValue = () => {
    return {
      [COMPANY_ACCOUNT_ITEM_KONTRAGENT_CREATE_DATA_NAME.NAME]: '',
      [COMPANY_ACCOUNT_ITEM_KONTRAGENT_CREATE_DATA_NAME.INN]: '',
    };
  };

  return (
    <CompanyAccountItemKontragentCreateComponent
      pageLoading={pageLoading}
      isPending={isRequestPending(state.form)}
      isError={isRequestError(state.form)}
      isSuccess={isRequestSuccess(state.form)}
      errorMessage={getRequestErrorMessage(state.form)}
      initialValue={getInitialValue()}
      validation={companyAccountItemKontragentCreateFormValidation}
      onSubmitForm={companyAccountItemKontragentCreateFormSendData}
    />
  );
}
