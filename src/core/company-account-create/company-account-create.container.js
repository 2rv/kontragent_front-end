import React from 'react';

import { CompanyAccountCreateComponent } from './company-account-create.component';

import { useDispatch, useSelector } from 'react-redux';

import { companyAccountCreateFormValidation } from './company-account-create.validation';

import { COMPANY_ACCOUNT_CREATE_DATA_NAME } from './company-account-create.constant';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { AUTH_STORE_NAME } from '../../lib/common/auth/auth.constant';
import { redirect } from '../../main/navigation/navigation.core';

import { httpRequest } from '../../main/http';

export function CompanyAccountCreateContainer() {
  const { pageLoading, user } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    user: state[AUTH_STORE_NAME].user,
  }));

  const loginFormSendData = async (data) => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);

    try {
      const res = await httpRequest({
        method: 'POST',
        url: '/company',
        data,
      });

      await redirect(
        (
          { companyId } = {
            companyId: '[companyId]',
          },
        ) => `/company/${companyId}/`,
        {
          dynamic: true,
          params: { companyId: res.data.id },
        },
      );

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
      [COMPANY_ACCOUNT_CREATE_DATA_NAME.NAME]: '',
      [COMPANY_ACCOUNT_CREATE_DATA_NAME.INN]: '',
    };
  };

  const [isRequestPending, setRequestPending] = React.useState(null);
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);

  return (
    <CompanyAccountCreateComponent
      isPending={isRequestPending}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      initialValue={getInitialValue()}
      validation={companyAccountCreateFormValidation}
      onSubmitForm={loginFormSendData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage}
    />
  );
}
