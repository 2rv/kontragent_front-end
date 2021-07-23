import React from 'react';
import {
  SectionLayout,
  FieldLayout,
  ButtonLayout,
} from '../../../../lib/elements/layout';
import { SecondaryTitleText } from '../../../../lib/elements/text';
import { PrimarySelect, PrimaryField } from '../../../../lib/elements/field';
import { PrimaryButton } from '../../../../lib/elements/button';
import { ErrorAlert, SuccessAlert } from '../../../../lib/elements/alert';
import styled from 'styled-components';

export function BalanceFormDepositComponent(props) {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
    isSubmitting,

    fieldPaymentMethod,
    fieldDepositAmount,
    paymentMethod,
    pageLoading,
    isSuccess,
    isPending,
    isError,
    errorMessage,
  } = props;

  const isFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  const isSubmitDisabled = () => {
    return JSON.stringify(touched) === '{}'
      ? true
      : !isValid || isSubmitting || isSuccess || pageLoading;
  };

  return (
    <form onSubmit={handleSubmit}>
      <SectionLayout>
        <Title tid="BALANCE.BALANCE_DEPOSIT.HEADER" />
        <FieldLayout>
          <PrimarySelect
            titleTid="BALANCE.BALANCE_DEPOSIT.FIELD.PAYMENT_METHOD.TITLE"
            name={fieldPaymentMethod}
            onChange={handleChange}
            onBlur={handleBlur}
            option={paymentMethod}
          />

          <PrimaryField
            titleTid="BALANCE.BALANCE_DEPOSIT.FIELD.DEPOSIT_AMOUNT.TITLE"
            placeholderTid="BALANCE.BALANCE_DEPOSIT.FIELD.DEPOSIT_AMOUNT.PLACEHOLDER"
            name={fieldDepositAmount}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[fieldDepositAmount]}
            error={isFieldError(fieldDepositAmount)}
            type="number"
          />
        </FieldLayout>
        <ButtonLayout>
          <PrimaryButton
            tid="BALANCE.BALANCE_DEPOSIT.BUTTON"
            disabled={isSubmitDisabled()}
          />
        </ButtonLayout>
        {(isError || errorMessage) && (
          <ErrorAlert tid={`ERROR.${errorMessage}`} />
        )}

        {isSuccess && (
          <SuccessAlert tid={'BALANCE.BALANCE_DEPOSIT.SUCCESS_MESSAGE'} />
        )}
      </SectionLayout>
    </form>
  );
}
const Title = styled(SecondaryTitleText)`
  line-height: 1.5;
`;
