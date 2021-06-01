import React from 'react';

import styled from 'styled-components';

import { PrimaryBox } from '../../../../lib/elements/box';
import { AuthPhoneVerificationInfoHeaderComponent } from '../phone-vefirication-info-header';
import { AuthPhoneVerificationInfoFooterComponent } from '../phone-vefirication-info-footer';
import { SecondaryText } from '../../../../lib/elements/text';
import { PrimaryField } from '../../../../lib/elements/field';
import { PrimaryButton } from '../../../../lib/elements/button';

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

    fieldVerificationCode,
  } = props;

  const isFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };
  const isSubmitDisabled = () => {
    return JSON.stringify(touched) === '{}' ? true : !isValid;
  };

  return (
    <PrimaryBox>
      <PhoneVerificationInfoComponentLayout>
        <AuthPhoneVerificationInfoHeaderComponent />
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
          </Container>
        </form>
        <AuthPhoneVerificationInfoFooterComponent />
      </PhoneVerificationInfoComponentLayout>
    </PrimaryBox>
  );
}

const PhoneVerificationInfoComponentLayout = styled.div`
  display: grid;
  gap: ${spacing(4)};
`;

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
