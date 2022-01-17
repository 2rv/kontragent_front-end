import React from 'react';

import { CompanyAccountKontragentsComponent } from './company-account-kontragents.component';

import { useSelector } from 'react-redux';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import { httpRequest } from '../../main/http';

import { COMPANY_ACCOUNT_KONTRAGENTS_API, COMPANY_ACCOUNT_KONTRAGENTS_DATA_NAME } from './company-account-kontragents.constant';
import { performCompanyAccountKontragentsRowData, convertCompanyAccountKontragentCreateFormData } from './company-account-kontragents.convert';
import { companyAccountKontragentsFormValidation } from './company-account-kontragents.validation';
import { getQuery } from '../../main/navigation';

export function CompanyAccountKontragentsContainer() {
  const { pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

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
        method: COMPANY_ACCOUNT_KONTRAGENTS_API.FETCH_COMPANY_ACCOUNT_KONTRAGENTS.TYPE,
        url: COMPANY_ACCOUNT_KONTRAGENTS_API.FETCH_COMPANY_ACCOUNT_KONTRAGENTS.ENDPOINT(getQuery('companyId')),
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

  const CompanyAccountCreateFormSendData = async (values, { resetForm }) => {
    const data = convertCompanyAccountKontragentCreateFormData(values);
    setRequestCreatePending(true);
    setRequestCreateSuccess(false);
    setRequestCreateErrorMessage(false);
    setRequestCreateError(null);

    try {
      await httpRequest({
        method: COMPANY_ACCOUNT_KONTRAGENTS_API.CREATE_COMPANY_ACCOUNT_KONTRAGENT.TYPE,
        url: COMPANY_ACCOUNT_KONTRAGENTS_API.CREATE_COMPANY_ACCOUNT_KONTRAGENT.ENDPOINT(getQuery('companyId')),
        data,
      });

      await fetchCompanyKontragents();

      setRequestCreatePending(false);
      setRequestCreateSuccess(true);
      resetForm({});
    } catch (error) {
      if (error) {
        setRequestCreateError(true);
        setRequestCreatePending(false);
        setRequestCreateErrorMessage(error.response.data.message);
      }
    }
  };

  const getInitialValue = () => {
    return {
      [COMPANY_ACCOUNT_KONTRAGENTS_DATA_NAME.NAME]: '',
      [COMPANY_ACCOUNT_KONTRAGENTS_DATA_NAME.INN]: '',
    };
  };

  const [getData, setData] = React.useState([]);
  const [isRequestPending, setRequestPending] = React.useState(null);
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);

  const [isRequestCreatePending, setRequestCreatePending] = React.useState(null);
  const [isRequestCreateError, setRequestCreateError] = React.useState(null);
  const [isRequestCreateSuccess, setRequestCreateSuccess] = React.useState(null);
  const [getRequestCreateErrorMessage, setRequestCreateErrorMessage] = React.useState(null);

  return (
    <CompanyAccountKontragentsComponent
      isPending={isRequestPending || (!isRequestSuccess && pageLoading)}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      data={getData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage}
      isCreatePending={isRequestCreatePending}
      isCreateError={isRequestCreateError}
      isCreateSuccess={isRequestCreateSuccess}
      createErrorMessage={getRequestCreateErrorMessage}
      initialValue={getInitialValue()}
      validation={companyAccountKontragentsFormValidation}
      onSubmitForm={CompanyAccountCreateFormSendData}
    />
  );
}
