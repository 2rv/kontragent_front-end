import { useEffect, useReducer } from 'react';
import { useSelector } from 'react-redux';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
  getRequestData,
} from '../../main/store/store.service';
import { getQuery } from '../../main/navigation/navigation.core';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import {
  initialState,
  companyAccountItemKontragentItemInfoReducer,
} from './company-account-item-kontragent-item-info.reducer';
import { getCompanyAccountItemKontragentItemInfo } from './company-account-item-kontragent-item-info.action';
import { CompanyAccountItemKontragentItemInfoComponent } from './company-account-item-kontragent-item-info.component';

export function CompanyAccountItemKontragentItemInfoContainer() {
  const { pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));
  const [state, setState] = useReducer(
    companyAccountItemKontragentItemInfoReducer,
    initialState,
  );

  useEffect(() => {
    const companyId = getQuery('companyId');
    const kontragentId = getQuery('kontragentId');
    getCompanyAccountItemKontragentItemInfo({ companyId, kontragentId })(
      setState,
    );
  }, []);

  return (
    <CompanyAccountItemKontragentItemInfoComponent
      pageLoading={pageLoading}
      isPending={isRequestPending(state.request)}
      isSuccess={isRequestSuccess(state.request)}
      isError={isRequestError(state.request)}
      errorMessage={getRequestErrorMessage(state.request)}
      data={getRequestData(state.request)}
    />
  );
}
