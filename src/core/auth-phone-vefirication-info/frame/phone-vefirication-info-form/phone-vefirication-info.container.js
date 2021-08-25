import React from 'react';
import { Formik } from 'formik';

import { PhoneVerificationInfoComponent } from './phone-vefirication-info.component';

import { PHONE_VERIFICATION_INFO_FORM_FIELD_KEY } from './phone-vefirication-info.type';

export function PhoneVerificationInfoFormContainer(props) {
  const {
    phoneNumber,
    pageLoading,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    initialValue,
    phoneVerificationInfoFormFieldName,
  } = props;

  const VERIFICATION_CODE_NAME =
    phoneVerificationInfoFormFieldName[
      PHONE_VERIFICATION_INFO_FORM_FIELD_KEY.VERIFICATION_CODE
    ];

  return (
    <div>
      <Formik initialValues={initialValue}>
        {(props) => (
          <PhoneVerificationInfoComponent
            fieldVerificationCode={VERIFICATION_CODE_NAME}
            phoneNumber={phoneNumber}
            pageLoading={pageLoading}
            isPending={isPending}
            isError={isError}
            isSuccess={isSuccess}
            errorMessage={errorMessage}
            {...props}
          />
        )}
      </Formik>
    </div>
  );
}
