import React from 'react';

import { SectionLayout } from '../../../../lib/elements/layout';
import { FieldLayout } from '../../../../lib/elements/layout';
import { SecondaryTitleText } from '../../../../lib/elements/text';
import { PrimarySelect } from '../../../../lib/elements/field';
import { PrimaryField } from '../../../../lib/elements/field';
import { PrimaryButton } from '../../../../lib/elements/button';
import { ErrorAlert } from '../../../../lib/elements/alert';
import { SuccessAlert } from '../../../../lib/elements/alert';
import { PrimaryLoader } from '../../../../lib/elements/loader';

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

  console.log(`formik values: ${JSON.stringify(values)}`);

  return (
    <React.Fragment>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <form onSubmit={handleSubmit}>
        <SectionLayout>
          <SectionLayout type="LARGE">
            <SecondaryTitleText tid="BALANCE.BALANCE_DEPOSIT.HEADER" />
            <FieldLayout type="double">
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
          </SectionLayout>

          <PrimaryButton
            tid="BALANCE.BALANCE_DEPOSIT.BUTTON"
            disabled={isSubmitDisabled()}
          />

          {(isError || errorMessage) && (
            <ErrorAlert tid={`ERROR.${errorMessage}`} />
          )}

          {isSuccess && (
            <SuccessAlert tid={'BALANCE.BALANCE_DEPOSIT.SUCCESS_MESSAGE'} />
          )}
        </SectionLayout>
      </form>
    </React.Fragment>
  );
}
