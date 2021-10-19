import React from 'react';

import { CompanyAccountItemInfoListComponent } from './company-admin-item-info-list.component';

import { useSelector } from 'react-redux';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import { httpRequest } from '../../main/http';
import { getQuery } from '../../main/navigation/navigation.core';

import { performCompanyAdminItemInfoData } from './company-admin-item-info-list.convert';

import { COMPANY_ADMIN_ITEM_INFO_VERIFICATE_STORE_NAME } from '../company-admin-item-info-verificate';

export function CompanyAdminItemInfoListContainer() {
  const { pageLoading, verificateCompanyInfo } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    verificateCompanyInfo:
      state[COMPANY_ADMIN_ITEM_INFO_VERIFICATE_STORE_NAME]
        .verificateCompanyInfo,
  }));

  React.useEffect(() => {
    getAdminAccountItemListInfo();
  }, [verificateCompanyInfo.success]);

  const getAdminAccountItemListInfo = async () => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);
    setData({});

    try {
      const res = await httpRequest({
        method: 'GET',
        url: `/company/${getQuery('companyId')}/`,
      });

      const data = performCompanyAdminItemInfoData(res.data);

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

  const [isRequestPending, setRequestPending] = React.useState(null);
  const [getData, setData] = React.useState({});
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);

  return (
    <CompanyAccountItemInfoListComponent
      isPending={isRequestPending || (!isRequestSuccess && pageLoading)}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      data={getData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage}
    />
  );
}
