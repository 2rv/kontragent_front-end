import React from 'react';

import { CompanyAccountItemRevisionItemPaymentComponent } from './company-account-item-revision-item-payment.component';
import { COMPANY_ACCOUNT_ITEM_REVISION_ROUTE_PATH_DYNAMIC } from '../company-account-item-revision/company-account-item-revision.constant';
import { useDispatch, useSelector } from 'react-redux';

import { companyAccountItemPaymentLinkFormValidation } from './company-account-item-revision-item-payment.validation';

import { COMPANY_ACCOUNT_ITEM_PAYMENT_LINK_DATA_NAME } from './company-account-item-revision-item-payment.constant';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import { httpRequest } from '../../main/http';
import { getQuery, redirect } from '../../main/navigation/navigation.core';

export function CompanyAccountItemRevisionItemPaymentContainer(props) {
  const { price } = props;
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
        method: 'POST',
        url: `/revision/company/${getQuery('companyId')}/revision/${getQuery(
          'revisionId',
        )}/payment`,
      });

      return redirect(COMPANY_ACCOUNT_ITEM_REVISION_ROUTE_PATH_DYNAMIC, {
        params: {
          companyId: getQuery('companyId'),
        },
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
      [COMPANY_ACCOUNT_ITEM_PAYMENT_LINK_DATA_NAME.AMOUNT]: 0,
    };
  };

  const [isRequestPending, setRequestPending] = React.useState(null);
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);

  return (
    <CompanyAccountItemRevisionItemPaymentComponent
      isPending={isRequestPending}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      initialValue={getInitialValue()}
      validation={companyAccountItemPaymentLinkFormValidation}
      onSubmitForm={loginFormSendData}
      pageLoading={pageLoading}
      price={price}
      errorMessage={getRequestErrorMessage}
    />
  );
}
