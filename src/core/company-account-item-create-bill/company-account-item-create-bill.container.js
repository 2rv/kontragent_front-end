import React from 'react';

import { CompanyAccountItemCreateBillComponent } from './company-account-item-create-bill.component';

import { useSelector, useDispatch } from 'react-redux';

import { companyAccountItemCreateBillFormValidation } from './company-account-item-create-bill.validation';
import { COMPANY_BILL_LIST_STORE_NAME } from '../company-bill-list';
import {
  COMPANY_ACCOUNT_ITEM_CREATE_BILL_DATA_NAME,
  COMPANY_ACCOUNT_ITEM_CREATE_BILL_STORE_NAME,
} from './company-account-item-create-bill.constant';
import {
  changeCompanyAccountItemCreateBill,
  resetCompanyAccountItemCreateBillDataFromState,
  cleanupStore,
} from './company-account-item-create-bill.action';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { convertCompanyAccountItemCreateBillSendData } from './company-account-item-create-bill.convert';

export function CompanyAccountItemCreateBillContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading, billData } = useSelector((state) => ({
    state: state[COMPANY_ACCOUNT_ITEM_CREATE_BILL_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  React.useEffect(() => {
    dispatch(resetCompanyAccountItemCreateBillDataFromState());
  }, []);

  React.useEffect(() => {
    return function cleanup() {
      dispatch(cleanupStore());
    };
  }, []);

  const createBillAmount = (values, resetForm) => {
    const data = convertCompanyAccountItemCreateBillSendData(values);
    dispatch(changeCompanyAccountItemCreateBill(data, resetForm));
  };

  const getInitialValue = () => {
    return {
      [COMPANY_ACCOUNT_ITEM_CREATE_BILL_DATA_NAME.AMOUNT]: null,
    };
  };

  return (
    <CompanyAccountItemCreateBillComponent
      isPending={isRequestPending(state.form)}
      isError={isRequestError(state.form)}
      isSuccess={isRequestSuccess(state.form)}
      initialValue={getInitialValue()}
      validation={companyAccountItemCreateBillFormValidation}
      onSubmitForm={createBillAmount}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.form)}
    />
  );
}
