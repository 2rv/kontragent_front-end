import React from 'react';
import { PrimaryLoader } from '../../lib/elements/loader';
import { BalanceFormDepositContainer } from './frame/balance-form-deposit';

export function BalanceDepositComponent(props) {
  const {
    initialValue,
    pageLoading,
    isPending,
    fieldName,
    isError,
    isSuccess,
    errorMessage,
    paymentMethod,
  } = props;

  return (
    <React.Fragment>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <BalanceFormDepositContainer
        initialValue={initialValue}
        pageLoading={pageLoading}
        isPending={isPending}
        isError={isError}
        isSuccess={isSuccess}
        errorMessage={errorMessage}
        fieldName={fieldName}
        paymentMethod={paymentMethod}
      />
    </React.Fragment>
  );
}
