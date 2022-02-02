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

import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_KONTUR_STORE_NAME } from './company-account-item-kontragent-item-kontur.constant';
import {
  getKontragentDataAction,
  getEgrDetailsAction,
  getExpressPdfAction,
} from './company-account-item-kontragent-item-kontur.action';
import { CompanyAccountItemKontragentItemKonturComponent } from './company-account-item-kontragent-item-kontur.component';

export function CompanyAccountItemKontragentItemKonturContainer() {
  const companyId = getQuery('companyId');
  const kontragentId = getQuery('kontragentId');

  const dispatch = useDispatch();

  const { pageLoading, state } = useSelector((state) => ({
    state: state[COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_KONTUR_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  useEffect(() => {
    dispatch(getKontragentDataAction(companyId, kontragentId));
  }, []);
  console.log(state);

  const getEgrDetails = () => {
    dispatch(getEgrDetailsAction(companyId));
  };

  const getExpressPdf = () => {
    dispatch(getExpressPdfAction(companyId));
  };

  return (
    <CompanyAccountItemKontragentItemKonturComponent
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
