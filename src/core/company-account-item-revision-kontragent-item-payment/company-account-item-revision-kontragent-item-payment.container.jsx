import React from 'react';
import { httpRequest } from '../../main/http';
import { getQuery, redirect } from '../../main/navigation/navigation.core';

import { CompanyAccountItemRevisionKontragentItemPaymentComponent } from './company-account-item-revision-kontragent-item-payment.component';
import { COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_ROUTE_PATH_DYNAMIC } from '../company-account-item-revision-kontragent/company-account-item-revision-kontragent.constant';

export function CompanyAccountItemRevisionKontragentItemPaymentContainer(
  props,
) {
  const { price } = props;
  const [isRequestPending, setRequestPending] = React.useState(null);
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);

  const onSubmitForm = async () => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);

    try {
      const companyId = getQuery('companyId');
      const revisionId = getQuery('revisionId');

      await httpRequest({
        method: 'POST',
        url: `/revision/company/${companyId}/revision/${revisionId}/payment`,
      });

      setRequestPending(false);
      setRequestSuccess(true);

      redirect(COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_ROUTE_PATH_DYNAMIC, {
        params: { companyId },
      });
    } catch (error) {
      if (error) {
        setRequestError(true);
        setRequestPending(false);
        setRequestErrorMessage(error.response.data.message);
      }
    }
  };

  return (
    <CompanyAccountItemRevisionKontragentItemPaymentComponent
      isPending={isRequestPending}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      errorMessage={getRequestErrorMessage}
      onSubmitForm={onSubmitForm}
      price={price}
    />
  );
}
