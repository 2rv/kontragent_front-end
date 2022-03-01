import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
  getRequestData,
} from '../../main/store/store.service';
import { getQuery } from '../../main/navigation/navigation.core';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import { getCompanyAccountItemKontragentItemInfo } from './company-account-item-kontragent-item-info.action';
import { CompanyAccountItemKontragentItemInfoComponent } from './company-account-item-kontragent-item-info.component';
import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_STORE_NAME } from './company-account-item-kontragent-item-info.constant';

export function CompanyAccountItemKontragentItemInfoContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    state: state[COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_STORE_NAME],
  }));

  useEffect(() => {
    const companyId = getQuery('companyId');
    const kontragentId = getQuery('kontragentId');
    dispatch(
      getCompanyAccountItemKontragentItemInfo({ companyId, kontragentId }),
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
