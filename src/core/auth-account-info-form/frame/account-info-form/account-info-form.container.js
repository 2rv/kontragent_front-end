import React from 'react';
import { Formik } from 'formik';

import { AccountInfoFormComponent } from './account-info-form.component';

export function AccountInfoFormContainer(props) {
  const FULLNAME_NAME = 'FULLNAME';
  const { isPending, isError, isSuccess, errorMessage, pageLoading } = props;
  return (
    <div>
      <Formik initialValues={props.initialValue}>
        {(props) => (
          <AccountInfoFormComponent
            fieldFullName={FULLNAME_NAME}
            {...props}
            isPending={isPending}
            isError={isError}
            isSuccess={isSuccess}
            errorMessage={errorMessage}
            pageLoading={pageLoading}
          />
        )}
      </Formik>
    </div>
  );
}
