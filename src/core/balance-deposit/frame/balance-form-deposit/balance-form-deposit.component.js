import React from 'react';

import styled from 'styled-components';

import { SectionLayout } from '../../../../lib/elements/layout';
import { FieldLayout } from '../../../../lib/elements/layout';
import { SecondaryTitleText } from '../../../../lib/elements/text';
import { SelectField } from '../../../../lib/elements/field';
import { PrimaryField } from '../../../../lib/elements/field';
import { PrimaryButton } from '../../../../lib/elements/button';
import { CommonLoader } from '../../../../lib/elements/loader';
import { CommonError } from '../../../../lib/elements/error';
import { spacing } from '../../../../lib/theme';

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
    <form onSubmit={handleSubmit}>
      <SectionLayout>
        <SectionLayout type="LARGE">
          <SecondaryTitleText tid="BALANCE.BALANCE_DEPOSIT.HEADER" />
          <FieldLayout type="double">
            <SelectField
              titleTid="BALANCE.BALANCE_DEPOSIT.FIELD.PAYMENT_METHOD.TITLE"
              name={fieldPaymentMethod}
              onChange={handleChange}
              onBlur={handleBlur}
              option={[
                { id: 0, tid: 'DATA.PROBLEM_CATEGORY.1' },
                { id: 1, tid: 'DATA.PROBLEM_CATEGORY.2' },
              ]}
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
          <CommonError tid={`ERROR.${errorMessage}`} />
        )}
        {isPending && (
          <LoaderLayout>
            <CommonLoader width={17} height={17} />
          </LoaderLayout>
        )}
      </SectionLayout>
    </form>
  );
}

const LoaderLayout = styled.div`
  display: flex;
  justify-content: center;
`;
