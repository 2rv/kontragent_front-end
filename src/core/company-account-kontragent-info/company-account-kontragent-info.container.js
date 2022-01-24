import React from 'react';

import { CompanyAccountKontragentInfoComponent } from './company-account-kontragent-info.component';

import { useSelector } from 'react-redux';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import { httpRequest } from '../../main/http';
import { getQuery, redirect } from '../../main/navigation/navigation.core';

import { performCompanyAccountKontragentItemInfoData } from './company-account-kontragent-info.convert';
import { COMPANY_ACCOUNT_KONTRAGENTS_ROUTE_PATH_DYNAMIC } from '../company-account-kontragents';
import { COMPANY_ACCOUNT_KONTRAGENT_INFO_API } from './company-account-kontragent-info.constant';

export function CompanyAccountKontragentItemInfoContainer() {
  const { pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const companyId = getQuery('companyId');
  const kontragentId = getQuery('kontragentId');

  React.useEffect(() => {
    getCompanyAccountKontragentItemInfo();
  }, []);

  const getCompanyAccountKontragentItemInfo = async (data) => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);
    setData({});

    try {
      const res = await httpRequest({
        method: COMPANY_ACCOUNT_KONTRAGENT_INFO_API.FETCH_KONTRAGENT.TYPE,
        url: COMPANY_ACCOUNT_KONTRAGENT_INFO_API.FETCH_KONTRAGENT.ENDPOINT(
          companyId,
          kontragentId,
        ),
      });

      const data = performCompanyAccountKontragentItemInfoData(res.data);

      setRequestPending(false);
      setRequestSuccess(true);
      setData(data);
    } catch (error) {
      if (error.response) {
        setRequestError(true);
        setData({});
        setRequestPending(false);
        setRequestErrorMessage(error.response.data.message);
      }
    }
  };

  const removeKontragent = async () => {
    setRequestRemovePending(true);
    setRequestRemoveSuccess(false);
    setRequestRemoveError(false);
    setRequestRemoveErrorMessage(null);

    try {
      await httpRequest({
        method: COMPANY_ACCOUNT_KONTRAGENT_INFO_API.REMOVE_KONTRAGENT.TYPE,
        url: COMPANY_ACCOUNT_KONTRAGENT_INFO_API.REMOVE_KONTRAGENT.ENDPOINT(
          companyId,
          kontragentId,
        ),
      });

      await redirect(COMPANY_ACCOUNT_KONTRAGENTS_ROUTE_PATH_DYNAMIC, {
        dynamic: true,
        params: {
          companyId: getQuery('companyId'),
        },
      });

      setRequestRemovePending(false);
      setRequestRemoveSuccess(true);
    } catch (error) {
      if (error.response) {
        setRequestRemoveError(true);
        setRequestRemovePending(false);
        setRequestRemoveErrorMessage(error.response.data.message);
      }
    }
  };

  const [isRequestPending, setRequestPending] = React.useState(null);
  const [getData, setData] = React.useState({});
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);

  const [isRequestRemovePending, setRequestRemovePending] =
    React.useState(null);
  const [isRequestRemoveError, setRequestRemoveError] = React.useState(null);
  const [isRequestRemoveSuccess, setRequestRemoveSuccess] =
    React.useState(null);
  const [getRequestRemoveErrorMessage, setRequestRemoveErrorMessage] =
    React.useState(null);

  return (
    <CompanyAccountKontragentInfoComponent
      isPending={isRequestPending || (!isRequestSuccess && pageLoading)}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      data={getData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage}
      isRemovePending={isRequestRemovePending}
      isRemoveError={isRequestRemoveError}
      isRemoveSuccess={isRequestRemoveSuccess}
      removeErrorMessage={getRequestRemoveErrorMessage}
      removeKontragent={removeKontragent}
    />
  );
}
