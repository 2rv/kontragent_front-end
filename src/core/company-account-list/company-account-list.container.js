import React from 'react';

import { CompanyAccountListComponent } from './company-account-list.component';

import { useSelector, useDispatch } from 'react-redux';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import { httpRequest } from '../../main/http';

import { COMPANY_ACCOUNT_LIST_API } from './company-account-list.constant';

import { performCompanyAccountListRowData } from './company-account-list.convert';
import { authUpdateUserData } from '../../lib/common/auth/auth.action';

export function CompanyAccountListContainer() {
  const { pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const dispatch = useDispatch();

  React.useEffect(() => {
    getCompanyAccountList();
  }, []);

  const getCompanyAccountList = async (data) => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);
    setData([]);

    try {
      const res = await httpRequest({
        method: COMPANY_ACCOUNT_LIST_API.GET_COMPANY_ACCOUNT_LIST.TYPE,
        url: COMPANY_ACCOUNT_LIST_API.GET_COMPANY_ACCOUNT_LIST.ENDPOINT,
      });
      const data = performCompanyAccountListRowData(res.data);

      dispatch(authUpdateUserData());

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
    <CompanyAccountListComponent
      isPending={isRequestPending || (!isRequestSuccess && pageLoading)}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      data={getData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage}
    />
  );
}
