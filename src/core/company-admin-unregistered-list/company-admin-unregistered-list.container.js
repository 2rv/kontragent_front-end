import React from 'react';

import { CompanyAdminUnregisteredListComponent } from './company-admin-unregistered-list.component';

import { useSelector } from 'react-redux';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import { httpRequest } from '../../main/http';

import { COMPANY_ADMIN_UNREGISTERED_LIST_API } from './company-admin-unregistered-list.constant';

import { performCompanyAdminUnregisteredListRowData } from './company-admin-unregistered-list.convert';

export function CompanyAdminUnregisteredListContainer() {
  const { pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  React.useEffect(() => {
    getCompanyAccountList();
  }, []);

  const getCompanyAccountList = async () => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);
    setData([]);

    try {
      const res = await httpRequest({
        method: COMPANY_ADMIN_UNREGISTERED_LIST_API.GET_COMPANY_ADMIN_UNREGISTERED_LIST.TYPE,
        url: COMPANY_ADMIN_UNREGISTERED_LIST_API.GET_COMPANY_ADMIN_UNREGISTERED_LIST.ENDPOINT,
      });
      const data = performCompanyAdminUnregisteredListRowData(res.data);

      setRequestPending(false);
      setRequestSuccess(true);
      setData(data);
    } catch (error) {
      if (error.response) {
        setRequestError(true);
        setData([]);
        setRequestPending(false);
        setRequestErrorMessage(error.response.data.message);
      }
    }
  };

  const [isRequestPending, setRequestPending] = React.useState(null);
  const [getData, setData] = React.useState([]);
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);

  return (
    <CompanyAdminUnregisteredListComponent
      isPending={isRequestPending || (!isRequestSuccess && pageLoading)}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      data={getData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage}
    />
  );
}
