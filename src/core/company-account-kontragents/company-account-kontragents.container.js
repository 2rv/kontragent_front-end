import React from 'react';

import { CompanyAccountKontragentsComponent } from './company-account-kontragents.component';

import { useSelector } from 'react-redux';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import { httpRequest } from '../../main/http';

import { COMPANY_ACCOUNT_KONTRAGENTS_API, COMPANY_ACCOUNT_KONTRAGENTS_DATA_NAME } from './company-account-kontragents.constant';

import { convertCompanyAccountKontragentCreateFormData, performCompanyAccountKontragentsRowData } from './company-account-kontragents.convert';
import { companyAccountKontragentCreateFormValidation } from './company-account-kontragents.validation';
import { getQuery } from '../../main/navigation';

export function CompanyAccountKontragentsContainer() {
  const { pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const companyId = getQuery('companyId');

  React.useEffect(() => {
    fetchCompanyKontragents();
  }, []);

  const fetchCompanyKontragents = async () => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);
    setData([]);

    try {
      const res = await httpRequest({
        method: COMPANY_ACCOUNT_KONTRAGENTS_API.GET_COMPANY_ACCOUNT_KONTRAGENTS.TYPE,
        url: COMPANY_ACCOUNT_KONTRAGENTS_API.GET_COMPANY_ACCOUNT_KONTRAGENTS.ENDPOINT(companyId),
      });
      const data = performCompanyAccountKontragentsRowData(res.data);

      setRequestPending(false);
      setRequestSuccess(true);
      setData(data);
    } catch (error) {
      if (error.response) {
        setRequestError(true);
        setData([]);
        setRequestPending(false);
        setRequestErrorMessage(error.response.data.message);
      }
    }
  }

  const CompanyAccountCreateFormSendData = async (values) => {
    const data = convertCompanyAccountKontragentCreateFormData(values);
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);

    try {
      await httpRequest({
        method: COMPANY_ACCOUNT_KONTRAGENTS_API.FETCH_COMPANY_ACCOUNT_KONTRAGENTS.TYPE,
        url: COMPANY_ACCOUNT_KONTRAGENTS_API.FETCH_COMPANY_ACCOUNT_KONTRAGENTS.ENDPOINT(companyId),
        data,
      });

      await fetchCompanyKontragents();

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
      [COMPANY_ACCOUNT_KONTRAGENTS_DATA_NAME.NAME]: '',
      [COMPANY_ACCOUNT_KONTRAGENTS_DATA_NAME.INN]: '',
    };
  };

  const [isRequestPending, setRequestPending] = React.useState(null);
  const [getData, setData] = React.useState([]);
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);

  return (
    <CompanyAccountKontragentsComponent
      isPending={isRequestPending || (!isRequestSuccess && pageLoading)}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      data={getData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage}
      initialValue={getInitialValue()}
      validation={companyAccountKontragentCreateFormValidation}
      onSubmitForm={CompanyAccountCreateFormSendData}
    />
  );
}
