import React from 'react';

import { UserAdminItemInfoComponent } from './user-admin-item-info.component';

import { useSelector } from 'react-redux';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { USER_ADMIN_ROLE_STORE_NAME } from '../user-admin-role/user-admin-role.constant';
import { httpRequest } from '../../main/http';
import { getQuery } from '../../main/navigation/navigation.core';

import { performUserAdminItemInfoData } from './user-admin-item-info.convert';

export function UserAdminItemInfoContainer() {
  const { state, pageLoading } = useSelector((state) => ({
    state: state[USER_ADMIN_ROLE_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  React.useEffect(() => {
    getCompanyAccountItemInfo();
  }, [state.form.success]);

  const getCompanyAccountItemInfo = async (data) => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);
    setData({});

    try {
      const res = await httpRequest({
        method: 'GET',
        url: `/user/admin/${getQuery('userId')}`,
      });

      const data = performUserAdminItemInfoData(res.data);

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
    <UserAdminItemInfoComponent
      isPending={isRequestPending || (!isRequestSuccess && pageLoading)}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      data={getData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage}
    />
  );
}
