import React, { useState, useEffect } from 'react';
import { UserReferalListComponent } from './user-referal-list.component';
import { performUserReferalListRowData } from './user-referal-list.convert';
import { USER_REFERAL_LIST_API } from './user-referal-list.constant';
import { httpRequest } from '../../main/http';

export function UserReferalListContainer() {
  useEffect(() => {
    getUserReferalList();
  }, []);

  const getUserReferalList = async (data) => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);
    setData([]);

    try {
      const res = await httpRequest({
        method: USER_REFERAL_LIST_API.GET_USER_REFERAL_LIST.TYPE,
        url: USER_REFERAL_LIST_API.GET_USER_REFERAL_LIST.ENDPOINT,
      });
      const data = performUserReferalListRowData(res.data);
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
    <UserReferalListComponent
      isPending={isRequestPending || !isRequestSuccess}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      data={getData}
      errorMessage={getRequestErrorMessage}
    />
  );
}
