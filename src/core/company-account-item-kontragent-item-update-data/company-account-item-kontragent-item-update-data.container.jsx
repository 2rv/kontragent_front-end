import { useReducer } from 'react';
import { useSelector } from 'react-redux';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { getQuery } from '../../main/navigation/navigation.core';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import {
  initialState,
  companyAccountItemKontragentItemUpdateDataReducer,
} from './company-account-item-kontragent-item-update-data.reducer';
import { uploadCompanyAccountItemKontragentItemUpdateData } from './company-account-item-kontragent-item-update-data.action';
import { covertCompanyAccountItemKontragentItemUpdateDataData } from './company-account-item-kontragent-item-update-data.convert';
import { companyAccountItemKontragentItemUpdateDataValidation } from './company-account-item-kontragent-item-update-data.validation';
import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_UPDATE_DATA_FIELD_NAME as FIELD_NAME } from './company-account-item-kontragent-item-update-data.constant';
import { CompanyAccountItemKontragentItemUpdateDataComponent } from './company-account-item-kontragent-item-update-data.component';

export function CompanyAccountItemKontragentItemUpdateDataContainer() {
  const { pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const [state, setState] = useReducer(
    companyAccountItemKontragentItemUpdateDataReducer,
    initialState,
  );

  const onSubmit = (values) => {
    const data = {
      companyId: getQuery('companyId'),
      kontragentId: getQuery('kontragentId'),
      values: covertCompanyAccountItemKontragentItemUpdateDataData(values),
    };
    uploadCompanyAccountItemKontragentItemUpdateData(data)(setState);
  };

  const initialValues = () => {
    return {
      [FIELD_NAME.EMAIL]: '',
      [FIELD_NAME.COMMENT]: '',
      [FIELD_NAME.RATING]: 5,
    };
  };

  return (
    <CompanyAccountItemKontragentItemUpdateDataComponent
      pageLoading={pageLoading}
      isPending={isRequestPending(state.request)}
      isSuccess={isRequestSuccess(state.request)}
      isError={isRequestError(state.request)}
      errorMessage={getRequestErrorMessage(state.request)}
      onSubmit={onSubmit}
      initialValues={initialValues()}
      validate={companyAccountItemKontragentItemUpdateDataValidation}
    />
  );
}
