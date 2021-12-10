import React from 'react';

import { CompanyAccountItemPaymentLinkComponent } from './company-account-item-payment-link.component';

import { useDispatch, useSelector } from 'react-redux';

import { companyAccountItemRevisionItemPaymentFormValidation } from './company-account-item-payment-link.validation';

import { COMPANY_ACCOUNT_ITEM_REVISION_ITEM_PAYMENT_DATA_NAME } from './company-account-item-payment-link.constant';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import { httpRequest } from '../../main/http';
import { getQuery, redirect } from '../../main/navigation/navigation.core';

export function CompanyAccountItemPaymentLinkContainer() {
  const { pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const loginFormSendData = async (data) => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);

    try {
      const res = await httpRequest({
        method: 'GET',
        url: `/payment/untipay/company/${getQuery('companyId')}/link?amount=${
          data.amount
        }`,
      });

      await redirect(res.data.link);

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
      [COMPANY_ACCOUNT_ITEM_REVISION_ITEM_PAYMENT_DATA_NAME.AMOUNT]: '',
    };
  };

  const [isRequestPending, setRequestPending] = React.useState(null);
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);

  return (
    <CompanyAccountItemPaymentLinkComponent
      isPending={isRequestPending}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      initialValue={getInitialValue()}
      validation={companyAccountItemRevisionItemPaymentFormValidation}
      onSubmitForm={loginFormSendData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage}
    />
  );
}
