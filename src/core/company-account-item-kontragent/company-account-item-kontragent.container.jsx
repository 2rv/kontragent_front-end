import React from 'react';
import { useSelector } from 'react-redux';
import { httpRequest } from '../../main/http';
import { getQuery } from '../../main/navigation';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import {
  COMPANY_ACCOUNT_ITEM_KONTRAGENT_API,
  COMPANY_ACCOUNT_ITEM_KONTRAGENT_DATA_NAME,
} from './company-account-item-kontragent.constant';
import {
  convertCompanyAccountItemKontragentList,
  convertCompanyAccountItemKontragentCreateFormData,
} from './company-account-item-kontragent.convert';
import { companyAccountItemKontragentFormValidation } from './company-account-item-kontragent.validation';
import { CompanyAccountItemKontragentComponent } from './company-account-item-kontragent.component';

export function CompanyAccountItemKontragentContainer() {
  const { pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const [getData, setData] = React.useState([]);
  const [isRequestPending, setRequestPending] = React.useState(null);
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);

  const [isRequestCreatePending, setRequestCreatePending] =
    React.useState(null);
  const [isRequestCreateError, setRequestCreateError] = React.useState(null);
  const [isRequestCreateSuccess, setRequestCreateSuccess] =
    React.useState(null);
  const [getRequestCreateErrorMessage, setRequestCreateErrorMessage] =
    React.useState(null);

  React.useEffect(() => {
    getKontragentList();
  }, []);

  const getKontragentList = async () => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);
    setData([]);

    try {
      const res = await httpRequest({
        method:
          COMPANY_ACCOUNT_ITEM_KONTRAGENT_API.FETCH_COMPANY_ACCOUNT_KONTRAGENTS
            .TYPE,
        url: COMPANY_ACCOUNT_ITEM_KONTRAGENT_API.FETCH_COMPANY_ACCOUNT_KONTRAGENTS.ENDPOINT(
          getQuery('companyId'),
        ),
      });
      const data = convertCompanyAccountItemKontragentList(res.data);

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
  };

  const companyAccountItemKontragentCreateFormSendData = async (
    values,
    { resetForm },
  ) => {
    const data = convertCompanyAccountItemKontragentCreateFormData(values);
    setRequestCreatePending(true);
    setRequestCreateSuccess(false);
    setRequestCreateErrorMessage(false);
    setRequestCreateError(null);

    try {
      await httpRequest({
        method:
          COMPANY_ACCOUNT_ITEM_KONTRAGENT_API.CREATE_COMPANY_ACCOUNT_KONTRAGENT
            .TYPE,
        url: COMPANY_ACCOUNT_ITEM_KONTRAGENT_API.CREATE_COMPANY_ACCOUNT_KONTRAGENT.ENDPOINT(
          getQuery('companyId'),
        ),
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
      [COMPANY_ACCOUNT_ITEM_KONTRAGENT_DATA_NAME.NAME]: '',
      [COMPANY_ACCOUNT_ITEM_KONTRAGENT_DATA_NAME.INN]: '',
    };
  };

  return (
    <CompanyAccountItemKontragentComponent
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
      validation={companyAccountItemKontragentFormValidation}
      onSubmitForm={companyAccountItemKontragentCreateFormSendData}
    />
  );
}
