import React, { useEffect } from 'react';

import { CompanyAccountItemMemberAddComponent } from './company-account-item-member-add.component';

import { useDispatch, useSelector } from 'react-redux';

import { companyAccountItemMemberAddFormValidation } from './company-account-item-member-add.validation';

import {
  COMPANY_ACCOUNT_ITEM_MEMBER_ADD_STORE_NAME,
  COMPANY_ACCOUNT_ITEM_MEMBER_ADD_DATA_NAME,
} from './company-account-item-member-add.constant';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import {
  CompanyAccountItemMemberAdd,
  cleanupStore,
} from './company-account-item-member-add.action';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function CompanyAccountItemMemberAddContainer() {
  const dispatch = useDispatch();
  const { pageLoading, state } = useSelector((state) => ({
    state: state[COMPANY_ACCOUNT_ITEM_MEMBER_ADD_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const loginFormSendData = async (data) => {
    dispatch(CompanyAccountItemMemberAdd(data));
  };

  const getInitialValue = () => {
    return {
      [COMPANY_ACCOUNT_ITEM_MEMBER_ADD_DATA_NAME.ID]: '',
    };
  };

  useEffect(() => {
    return function cleanup() {
      dispatch(cleanupStore());
    };
  }, []);

  return (
    <CompanyAccountItemMemberAddComponent
      isPending={isRequestPending(state.form)}
      isError={isRequestError(state.form)}
      isSuccess={isRequestSuccess(state.form)}
      initialValue={getInitialValue()}
      validation={companyAccountItemMemberAddFormValidation}
      onSubmitForm={loginFormSendData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.form)}
    />
  );
}
