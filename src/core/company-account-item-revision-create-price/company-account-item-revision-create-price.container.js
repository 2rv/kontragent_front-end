import React from 'react';

import { httpRequest } from '../../main/http';

import { getQuery } from '../../main/navigation/navigation.core';

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
    } catch (error) {
      if (error) {
        setRequestError(true);
        setRequestPending(false);
        setRequestErrorMessage(error.response.data.message);
      }
    }
  };
  const companyAccountItemRevisionCreateSendData = () => {
    const data = convertCompanyAccountItemRevisionCreatePriceStoreData(
      state.company,
    );
    createRevision(data);
  };

  const [isRequestPending, setRequestPending] = React.useState(null);
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);

  const [isValid, setValid] = React.useState(true);

  React.useEffect(() => {
    //СЧИТАТЬ В СТОРЕ
    setValid(true);
    state.company.forEach((company) => {
      if (!company.infoValid) {
        setValid(false);
      }
      company.year.forEach((year) => {
        if (!year.valid) {
          console.log(`YEAR VALID: ${year.valid}`);
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
