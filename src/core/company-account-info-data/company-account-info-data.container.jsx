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
import { CompanyAccountInfoDataComponent } from './company-account-info-data.component';
import { COMPANY_ACCOUNT_INFO_DATA_STORE_NAME } from './company-account-info-data.constant';
import {
  getCompanyDataAction,
  getEgrDetailsAction,
  getExpressPdfAction,
} from './company-account-info-data.action';

export function CompanyAccountInfoDataContainer() {
  const companyId = getQuery('companyId');

  const dispatch = useDispatch();

  const { pageLoading, state } = useSelector((state) => ({
    state: state[COMPANY_ACCOUNT_INFO_DATA_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  useEffect(() => {
    dispatch(getCompanyDataAction(companyId));
  }, []);

  const getEgrDetails = () => {
    dispatch(getEgrDetailsAction(companyId));
  };

  const getExpressPdf = () => {
    dispatch(getExpressPdfAction(companyId));
  };
  return (
    <CompanyAccountInfoDataComponent
      pageLoading={pageLoading}
      isPending={isRequestPending(state.request)}
      isError={isRequestError(state.request)}
      isSuccess={isRequestSuccess(state.request)}
      data={getRequestData(state.request)}
      errorMessage={getRequestErrorMessage(state.request)}
      getEgrDetails={getEgrDetails}
      getExpressPdf={getExpressPdf}
    />
  );
}
