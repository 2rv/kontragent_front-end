import React, { useState } from 'react';
import { UserReferalCreateComponent } from './user-referal-create.component';
import { useSelector } from 'react-redux';
import { userReferalCreateFormValidation } from './user-referal-create.validation';
import {
  USER_REFERAL_CREATE_DATA_NAME,
  USER_REFERAL_CREATE_API,
} from './user-referal-create.constant';
import { convertUserReferalCreateFormData } from './user-referal-create.convert';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { httpRequest } from '../../main/http';

export function UserReferalCreateContainer() {
  const { pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const UserReferalCreateFormSendData = async (values) => {
    const data = convertUserReferalCreateFormData(values);
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);

    try {
      await httpRequest({
        method: USER_REFERAL_CREATE_API.USER_REFERAL_CREATE.TYPE,
        url: USER_REFERAL_CREATE_API.USER_REFERAL_CREATE.ENDPOINT,
        data,
      });

      setRequestPending(false);
      setRequestSuccess(true);
    } catch (error) {
      if (error) {
        setRequestError(true);
        setRequestPending(false);
        setRequestErrorMessage(error.response.data.message);
      }
    }
  };

  const getInitialValue = () => {
    return {
      [USER_REFERAL_CREATE_DATA_NAME.EMAIL]: '',
    };
  };

  const [isRequestPending, setRequestPending] = useState(null);
  const [isRequestError, setRequestError] = useState(null);
  const [isRequestSuccess, setRequestSuccess] = useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = useState(null);

  return (
    <UserReferalCreateComponent
      isPending={isRequestPending}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      initialValue={getInitialValue()}
      // validation={userReferalCreateFormValidation}
      onSubmitForm={UserReferalCreateFormSendData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage}
    />
  );
}
