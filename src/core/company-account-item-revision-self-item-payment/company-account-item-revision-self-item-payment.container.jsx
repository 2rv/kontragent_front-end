import React from 'react';
import { httpRequest } from '../../main/http';
import { getQuery, redirect } from '../../main/navigation/navigation.core';

import { CompanyAccountItemRevisionSelfItemPaymentComponent } from './company-account-item-revision-self-item-payment.component';
import { COMPANY_ACCOUNT_ITEM_REVISION_SELF_ROUTE_PATH_DYNAMIC } from '../company-account-item-revision-self/company-account-item-revision-self.constant';

export function CompanyAccountItemRevisionSelfItemPaymentContainer(props) {
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
        url: `/revision-self/company/${companyId}/revision/${revisionId}/payment`,
      });

      setRequestPending(false);
      setRequestSuccess(true);

      redirect(COMPANY_ACCOUNT_ITEM_REVISION_SELF_ROUTE_PATH_DYNAMIC, {
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
    <CompanyAccountItemRevisionSelfItemPaymentComponent
      isPending={isRequestPending}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      errorMessage={getRequestErrorMessage}
      onSubmitForm={onSubmitForm}
      price={price}
    />
  );
}
