import React from 'react';
import { useSelector } from 'react-redux';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { httpRequest } from '../../main/http';
import { getQuery } from '../../main/navigation/navigation.core';

import { convertCompanyAccountItemRevisionSelfItemData } from './company-account-item-revision-self-item.convert';
import { CompanyAccountItemRevisionSelfItemComponent } from './company-account-item-reivision-self-item.component';

export function CompanyAccountItemRevisionSelfItemContainer() {
  const { pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  React.useEffect(() => {
    getCompanyAccountItemRevisionSelfItemInfo();
  }, []);
  const [isRequestPending, setRequestPending] = React.useState(null);
  const [getData, setData] = React.useState({});
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);

  const getCompanyAccountItemRevisionSelfItemInfo = async (data) => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);
    setData({});

    try {
      const companyId = getQuery('companyId');
      const revisionId = getQuery('revisionId');

      const res = await httpRequest({
        method: 'GET',
        url: `/revision-self/company/${companyId}/revision/${revisionId}`,
      });

      const data = convertCompanyAccountItemRevisionSelfItemData(res.data);

      setRequestPending(false);
      setData(data);
      setRequestSuccess(true);
    } catch (error) {
      if (error.response) {
        setRequestError(true);
        setData({});
        setRequestPending(false);
        setRequestErrorMessage(error.response.data.message);
      }
    }
  };

  return (
    <CompanyAccountItemRevisionSelfItemComponent
      isPending={isRequestPending || (!isRequestSuccess && pageLoading)}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      data={getData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage}
    />
  );
}
