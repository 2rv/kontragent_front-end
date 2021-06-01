import React from 'react';
import { Formik } from 'formik';

import { PhoneVerificationInfoComponent } from './phone-vefirication-info.component';

export function PhoneVerificationInfoContainer(props) {
  const {
    phoneNumber,
    pageLoading,
    isPending,
    isError,
    isSuccess,
    errorMessage,
  } = props;
  const VERIFICATION_CODE_NAME = 'verificationCode';
  return (
    <div>
      <Formik initialValues={props.initialValue}>
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
