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
import { CompanyAdminItemInfoDataComponent } from './company-admin-item-info-data.component';
import { COMPANY_ADMIN_ITEM_INFO_DATA_STORE_NAME } from './company-admin-item-info-data.constant';
import { getCompanyDataAction } from './company-admin-item-info-data.action';

export function CompanyAdminItemInfoDataContainer() {
  const companyId = getQuery('companyId');

  const dispatch = useDispatch();

  const { pageLoading, state } = useSelector((state) => ({
    state: state[COMPANY_ADMIN_ITEM_INFO_DATA_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  useEffect(() => {
    dispatch(getCompanyDataAction(companyId));
  }, []);

  return (
    <CompanyAdminItemInfoDataComponent
      pageLoading={pageLoading}
      isPending={isRequestPending(state.request)}
      isError={isRequestError(state.request)}
      isSuccess={isRequestSuccess(state.request)}
      data={getRequestData(state.request)}
      errorMessage={getRequestErrorMessage(state.request)}
    />
  );
}
