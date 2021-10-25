import React, { useState, useEffect } from 'react';
import { UserAdminListComponent } from './user-admin-list.component';
import { httpRequest } from '../../main/http';
import { USER_ADMIN_LIST_API } from './user-admin-list.constant';
import { performUserAdminListRowData } from './user-admin-list.convert';

export function UserAdminListContainer() {
  useEffect(() => {
    getUserAdminList();
  }, []);

  const getUserAdminList = async (data) => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);
    setData([]);

    try {
      const res = await httpRequest({
        method: USER_ADMIN_LIST_API.GET_USER_ADMIN_LIST.TYPE,
        url: USER_ADMIN_LIST_API.GET_USER_ADMIN_LIST.ENDPOINT,
      });
      const data = performUserAdminListRowData(res.data);

      setRequestPending(false), setRequestSuccess(true), setData(data);
    } catch (error) {
      if (error.response) {
        setRequestError(true);
        setData([]);
        setRequestPending(false);
        setRequestErrorMessage(error.response.data.message);
      }
    }
  };

  const [isRequestPending, setRequestPending] = useState(null);
  const [getData, setData] = useState([]);
  const [isRequestError, setRequestError] = useState(null);
  const [isRequestSuccess, setRequestSuccess] = useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = useState(null);
  return (
    <UserAdminListComponent
      isPending={isRequestPending || !isRequestSuccess}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      data={getData}
      errorMessage={getRequestErrorMessage}
    />
  );
}
