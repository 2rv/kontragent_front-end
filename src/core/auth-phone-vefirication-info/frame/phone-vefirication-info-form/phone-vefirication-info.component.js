import React from 'react';

import styled from 'styled-components';

import { SecondaryText } from '../../../../lib/elements/text';
import { PrimaryField } from '../../../../lib/elements/field';
import { PrimaryButton } from '../../../../lib/elements/button';
import { CommonLoader } from '../../../../lib/elements/loader';
import { CommonError } from '../../../../lib/elements/error';

import { THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../../../lib/theme';

import { spacing } from '../../../../lib/theme';

export function PhoneVerificationInfoComponent(props) {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
    isSubmitting,

    pageLoading,
    fieldVerificationCode,
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
      <Container>
        <div>
          <Message tid="AUTH_PHONE_VERIFICATION_INFO.MESSAGE_START" />
          <PhoneNumber>{props.phoneNumber}</PhoneNumber>
          <Message tid="AUTH_PHONE_VERIFICATION_INFO.MESSAGE_END" />
        </div>

        <PrimaryField
          titleTid="AUTH_PHONE_VERIFICATION_INFO.PHONE_NUMBER_FILED.TITLE"
          placeholderTid="AUTH_PHONE_VERIFICATION_INFO.PHONE_NUMBER_FILED.PLACEHOLDER"
          name={fieldVerificationCode}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[fieldVerificationCode]}
          error={isFieldError(fieldVerificationCode)}
        />

        <Button
          tid="AUTH_PHONE_VERIFICATION_INFO.BUTTON"
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
      </Container>
    </form>
  );
}

const Container = styled.div`
  display: grid;
  gap: ${spacing(4)};
`;

const Message = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
`;

const PhoneNumber = styled.span`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;

const Button = styled(PrimaryButton)`
  background-color: ${THEME_COLOR.COLOR.PRIMARY};
  color: ${THEME_COLOR.TEXT.BASE};
  width: 100%;
`;

const LoaderLayout = styled.div`
  display: flex;
  justify-content: center;
`;
