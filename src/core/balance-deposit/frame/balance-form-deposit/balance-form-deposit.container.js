import React from 'react';
import { Formik } from 'formik';

import { BalanceFormDepositComponent } from './balance-form-deposit.component';

import { BALANCE_FORM_DEPOSIT_FIELD_KEY } from './balance-form-deposit.type';

export function BalanceFormDepositContainer(props) {
  const PAYMENT_METHOD =
    props.fieldName[BALANCE_FORM_DEPOSIT_FIELD_KEY.PAYMENT_METHOD];
  const DEPOSIT_AMOUNT =
    props.fieldName[BALANCE_FORM_DEPOSIT_FIELD_KEY.DEPOSIT_AMOUNT];

  const {
    isPending,
    isError,
    isSuccess,
    errorMessage,
    pageLoading,
    paymentMethod,
    initialValue,
    validation,
    onSubmitForm,
  } = props;
  return (
    <div>
      <Formik
        initialValues={initialValue}
        validate={validation}
        onSubmit={onSubmitForm}
      >
        {(props) => (
          <BalanceFormDepositComponent
            fieldPaymentMethod={PAYMENT_METHOD}
            fieldDepositAmount={DEPOSIT_AMOUNT}
            {...props}
            isPending={isPending}
            isError={isError}
            isSuccess={isSuccess}
            errorMessage={errorMessage}
            pageLoading={pageLoading}
            paymentMethod={paymentMethod}
          />
        )}
      </Formik>
    </div>
  );
}
