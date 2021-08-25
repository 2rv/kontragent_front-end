import React from 'react';

import { AuthPhoneVerificationInfoComponent } from './auth-phone-vefirication-info.component';

import {
  AUTH_PHONE_VERIFICATION_INFO_FIELD_NAME,
  PHONE_VERIFICATION_INFO_FORM_FIELD_NAME,
} from './auth-phone-vefirication-info.type';

export function AuthPhoneVerificationInfoContainer() {
  const getInitialValue = () => {
    return {
      [AUTH_PHONE_VERIFICATION_INFO_FIELD_NAME.VERIFICATION_CODE]: '',
    };
  };

  return (
    <AuthPhoneVerificationInfoComponent
      phoneNumber="+704123112323"
      initialValue={getInitialValue()}
      phoneVerificationInfoFormFieldName={
        PHONE_VERIFICATION_INFO_FORM_FIELD_NAME
      }
      pageLoading={true}
      isPending={true}
      isError={true}
      isSuccess={true}
      errorMessage={null}
    />
  );
}
