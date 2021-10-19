import React from 'react';

import { CompanyAccountItemRevisionCreateComponent } from './company-account-item-revision-create.component';

import { useDispatch, useSelector } from 'react-redux';

import { companyAccountItemRevisionCreateFormValidation } from './company-account-item-revision-create.validation';

import { COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME } from './company-account-item-revision-create.constant';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { AUTH_STORE_NAME } from '../../lib/common/auth/auth.constant';
import { getQuery, redirect } from '../../main/navigation/navigation.core';

import { httpRequest } from '../../main/http';

import { COMPANY_ACCOUNT_ITEM_REVISION_ITEM_ROUTE_PATH_DYNAMIC } from '../company-account-item-revision-item';

export function CompanyAccountItemRevisionCreateContainer() {
  const { pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const loginFormSendData = async (data) => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);

    data.fileIdList = getFileList;

    console.log(data);

    try {
      const res = await httpRequest({
        method: 'POST',
        url: `/revision/company/${getQuery('companyId')}/`,
        data,
      });

      await redirect(COMPANY_ACCOUNT_ITEM_REVISION_ITEM_ROUTE_PATH_DYNAMIC, {
        dynamic: true,
        params: { companyId: getQuery('companyId'), revisionId: res.data.id },
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
      [COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME.TITLE]: '',
      [COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME.DESCRIPTION]: '',
      [COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME.FILE_ID_LIST]: [],
    };
  };

  const [isRequestPending, setRequestPending] = React.useState(null);
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);
  const [getFileList, setFileList] = React.useState([]);

  return (
    <CompanyAccountItemRevisionCreateComponent
      isPending={isRequestPending}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      initialValue={getInitialValue()}
      validation={companyAccountItemRevisionCreateFormValidation}
      onSubmitForm={loginFormSendData}
      pageLoading={pageLoading}
      setFileList={setFileList}
      errorMessage={getRequestErrorMessage}
    />
  );
}
