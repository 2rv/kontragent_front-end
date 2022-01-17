import React from 'react';
import { redirect } from '../../main/navigation/navigation.core';
import { httpRequest } from '../../main/http';

import { getQuery } from '../../main/navigation/navigation.core';
import { COMPANY_ACCOUNT_ITEM_REVISION_LIST_ROUTE_PATH_DYNAMIC } from '../company-account-item-revision-list';
import { CompanyAccountItemRevisionCreatePriceComponent } from './company-account-item-revision-create-price.component';

import { convertCompanyAccountItemRevisionCreatePriceStoreData } from './company-account-item-revision-create-price.convert';

export function CompanyAccountItemRevisionCreatePriceContainer({ state }) {
  const createRevision = async (data) => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);

    try {
      await httpRequest({
        method: 'POST',
        url: `revision/company/${getQuery('companyId')}`,
        data,
      });

      setRequestPending(false);
      setRequestSuccess(true);

      redirect(COMPANY_ACCOUNT_ITEM_REVISION_LIST_ROUTE_PATH_DYNAMIC, {
        dynamic: true,
        params: {
          companyId: getQuery('companyId'),
        },
      });
    } catch (error) {
      if (error) {
        setRequestError(true);
        setRequestPending(false);
        setRequestErrorMessage(error.response.data.message);
      }
    }
  };
  const companyAccountItemRevisionCreateSendData = async () => {
    const data = convertCompanyAccountItemRevisionCreatePriceStoreData(
      state.company,
    );
    await createRevision(data);
  };

  const [isRequestPending, setRequestPending] = React.useState(null);
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);

  const [isValid, setValid] = React.useState(true);

  React.useEffect(() => {
    setValid(true);
    state.company.forEach((company) => {
      if (!company.infoValid) {
        setValid(false);
      }
      company.year.forEach((year) => {
        if (!year.valid) {
          setValid(false);
        }
      });
    });
  }, [state]);

  return (
    <CompanyAccountItemRevisionCreatePriceComponent
      isRequestPending={isRequestPending}
      isRequestError={isRequestError}
      isRequestSuccess={isRequestSuccess}
      getRequestErrorMessage={getRequestErrorMessage}
      total={state.total}
      onClick={companyAccountItemRevisionCreateSendData}
      submitDisabled={!isValid}
    />
  );
}
