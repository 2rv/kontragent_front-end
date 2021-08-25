import { BalanceDepositComponent } from './balance-deposit.component';
import { BALANCE_DEPOSIT_PAYMENT_METHOD } from './balance-deposit.constant';
import {
  BALANCE_DEPOSIT_FIELD_NAME,
  BALANCE_FORM_DEPOSIT_FIELD_NAME,
} from './balance-deposit.type';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { balanceDepositFormValidation } from './balance-deposit.validation';
import { convertBalanceDepositFormData } from './balance-deposit.convert';
import { balanceDepositFormUploadData } from './balance-deposit.action';
import { BALANCE_DEPOSIT_STORE_NAME } from './balance-deposit.constant';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function BalanceDepositContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[BALANCE_DEPOSIT_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));
  const balanceDepositFormSendData = (values) => {
    const data = convertBalanceDepositFormData(values);
    dispatch(balanceDepositFormUploadData(data));
  };

  const getInitialValue = () => {
    return {
      [BALANCE_DEPOSIT_FIELD_NAME.PAYMENT_METHOD]: 0,
      [BALANCE_DEPOSIT_FIELD_NAME.DEPOSIT_AMOUNT]: '',
    };
  };

  return (
    <BalanceDepositComponent
      isPending={isRequestPending(state.balanceDepositForm)}
      isError={isRequestError(state.balanceDepositForm)}
      isSuccess={isRequestSuccess(state.balanceDepositForm)}
      initialValue={getInitialValue()}
      validation={balanceDepositFormValidation}
      onSubmitForm={balanceDepositFormSendData}
      fieldName={BALANCE_FORM_DEPOSIT_FIELD_NAME}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.balanceDepositForm)}
      paymentMethod={BALANCE_DEPOSIT_PAYMENT_METHOD}
    />
  );
}
