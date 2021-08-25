import React from 'react';
import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_VALUE } from '../../../../lib/theme';

import { SectionLayout } from '../../../../lib/elements/layout';
import { SecondaryButton } from '../../../../lib/elements/button';
import { ErrorAlert, SuccessAlert } from '../../../../lib/elements/alert';
import { PrimaryTitleText, PrimaryText } from '../../../../lib/elements/text';
import { PrimaryLoader } from '../../../../lib/elements/loader';

export function AuthFormVerificationPhoneComponent(props) {
  const {
    pageLoading,
    sendCodePending,
    sendCodeSuccess,
    sendCodeError,
    sendCodeErrorMessage,
    sendCode,
    phone,
  } = props;

  const isButtonDisabled = () => {
    return pageLoading || sendCodePending;
  };
  return (
    <React.Fragment>
      {(sendCodePending || pageLoading) && <PrimaryLoader />}
      <SectionLayout>
        <PrimaryTitleText tid="AUTH_VERIFICATION_PHONE.HEADER" />
        <SectionLayout type="MEDIUM">
          <MessageContainer>
            <PrimaryText tid="AUTH_VERIFICATION_PHONE.MESSAGE_START" />
            <PhoneNumber>{phone}</PhoneNumber>
            <PrimaryText tid="AUTH_VERIFICATION_PHONE.MESSAGE_END" />
          </MessageContainer>

          <SecondaryButton
            onClick={sendCode}
            tid="AUTH_VERIFICATION_PHONE.BUTTON"
            disabled={isButtonDisabled()}
          />
        </SectionLayout>

        {(sendCodeError || sendCodeErrorMessage) && (
          <ErrorAlert tid={`ERROR.${sendCodeErrorMessage}`} />
        )}

        {sendCodeSuccess && (
          <SuccessAlert tid={`AUTH_VERIFICATION_PHONE.SUCCESS_MESSAGE`} />
        )}
      </SectionLayout>
    </React.Fragment>
  );
}

const MessageContainer = styled(PrimaryText)`
  line-height: 1.5;
`;

const PhoneNumber = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
