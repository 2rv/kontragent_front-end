import React from 'react';

import styled from 'styled-components';
import { Trans } from 'react-i18next';

import { PrimaryButton } from '../../../../lib/elements/button';
import { PrimaryField } from '../../../../lib/elements/field';

import { THEME_COLOR, THEME_VALUE } from '../../../../lib/theme';

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

    fieldVerificationCode,
  } = props;

  const isFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };
  const isSubmitDisabled = () => {
    return JSON.stringify(touched) === '{}' ? true : !isValid;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <MessageLayout>
          <Trans
            i18nKey="AUTH_PHONE_VERIFICATION_INFO.MESSAGE"
            components={{ phoneComponent: <PhoneNumber /> }}
            values={{ phoneNumber: props.phoneNumber }}
          />
        </MessageLayout>

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
      </Container>
    </form>
  );
}

const Container = styled.div`
  display: grid;
  gap: ${spacing(4)};
`;

const MessageLayout = styled.div`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.REGULAR};
  line-height: ${THEME_VALUE.LINE_HEIGHT.NORMAL};
  color: ${THEME_COLOR.TEXT.INFO_MESSAGE};
`;

const PhoneNumber = styled.span`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.TEXT.PRIMARY};
`;

const Button = styled(PrimaryButton)`
  background-color: ${THEME_COLOR.COLOR.PRIMARY};
  color: ${THEME_COLOR.TEXT.BASE};
  width: 100%;
`;
