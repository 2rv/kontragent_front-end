import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
  getRequestData,
} from '../../main/store/store.service';
import { getQuery } from '../../main/navigation/navigation.core';
import { CompanyAccountKontragentInfoDataComponent } from './company-account-kontragent-info-data.component';
import { COMPANY_ACCOUNT_KONTRAGENT_INFO_DATA_STORE_NAME } from './company-account-kontragent-info-data.constant';
import { getKontragentDataAction } from './company-account-kontragent-info-data.action';

export function CompanyAccountKontragentInfoDataContainer() {
  const companyId = getQuery('companyId');
  const kontragentId = getQuery('kontragentId');

  const dispatch = useDispatch();

  const { pageLoading, state } = useSelector((state) => ({
    state: state[COMPANY_ACCOUNT_KONTRAGENT_INFO_DATA_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  useEffect(() => {
    dispatch(getKontragentDataAction(companyId, kontragentId));
  }, []);

  return (
    <CompanyAccountKontragentInfoDataComponent
      pageLoading={pageLoading}
      isPending={isRequestPending(state.request)}
      isError={isRequestError(state.request)}
      isSuccess={isRequestSuccess(state.request)}
      data={getRequestData(state.request)}
      errorMessage={getRequestErrorMessage(state.request)}
    />
  );
}
