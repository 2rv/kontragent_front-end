import React, { useState, useEffect } from 'react';
import { UserReferalInfoComponent } from './user-referal-info.component';
import { performUserReferalInfoData } from './user-referal-info.convert';
import { httpRequest } from '../../main/http';
import { USER_REFERAL_INFO_API } from './user-referal-info.constant';

export function UserReferalInfoContainer() {
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
        method: USER_REFERAL_INFO_API.GET_USER_REFERAL_INFO.TYPE,
        url: USER_REFERAL_INFO_API.GET_USER_REFERAL_INFO.ENDPOINT,
      });
      const data = performUserReferalInfoData(res.data);
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
    <UserReferalInfoComponent
      isPending={isRequestPending || !isRequestSuccess}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      data={getData}
      errorMessage={getRequestErrorMessage}
    />
  );
}
