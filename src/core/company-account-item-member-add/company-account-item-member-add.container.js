import React from 'react';

import { CompanyAccountItemMemberAddComponent } from './company-account-item-member-add.component';

import { useDispatch, useSelector } from 'react-redux';

import { companyAccountItemMemberAddFormValidation } from './company-account-item-member-add.validation';

import { COMPANY_ACCOUNT_ITEM_MEMBER_ADD_DATA_NAME } from './company-account-item-member-add.constant';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { httpRequest } from '../../main/http';
import { getQuery, redirect } from '../../main/navigation/navigation.core';

export function CompanyAccountItemMemberAddContainer() {
  const dispatch = useDispatch()
  const { pageLoading, state } = useSelector((state) => ({
    state: state[COMPANY_ACCOUNT_ITEM_MEMBER_ADD_DATA_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const loginFormSendData = async (data) => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);

    try {
      await httpRequest({
        method: 'POST',
        url: `/company-member/company/${getQuery('companyId')}/member/user/${data.id
          }`,
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
      [COMPANY_ACCOUNT_ITEM_MEMBER_ADD_DATA_NAME.AMOUNT]: 0,
    };
  };

  const [isRequestPending, setRequestPending] = React.useState(null);
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);

  return (
    <CompanyAccountItemMemberAddComponent
      isPending={isRequestPending}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      initialValue={getInitialValue()}
      validation={companyAccountItemMemberAddFormValidation}
      onSubmitForm={loginFormSendData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage}
    />
  );
}
