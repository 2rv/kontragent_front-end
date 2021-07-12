import React from 'react';
import { Formik } from 'formik';

import { SupportFormCreateRequestComponent } from './support-form-create-request.component';

import { SUPPORT_FORM_CREATE_REQUEST_FIELD_KEY } from './support-form-create-request.type';

export function SupportFormCreateRequestContainer(props) {
  const PROBLEM_CATEGORY =
    props.fieldName[SUPPORT_FORM_CREATE_REQUEST_FIELD_KEY.PROBLEM_CATEGORY];
  const PROBLEM_OUTLINE =
    props.fieldName[SUPPORT_FORM_CREATE_REQUEST_FIELD_KEY.PROBLEM_OUTLINE];
  const PROBLEM_DESCRIPTION =
    props.fieldName[SUPPORT_FORM_CREATE_REQUEST_FIELD_KEY.PROBLEM_DESCRIPTION];

  const {
    isPending,
    isError,
    isSuccess,
    errorMessage,
    pageLoading,
    problemCategory,
    validation,
    onSubmitForm,
    initialValue,
  } = props;
  return (
    <div>
      <Formik
        initialValues={initialValue}
        validate={validation}
        onSubmit={onSubmitForm}
      >
        {(props) => (
          <SupportFormCreateRequestComponent
            fieldProblemCategory={PROBLEM_CATEGORY}
            fieldProblemOutline={PROBLEM_OUTLINE}
            fieldProblemDescription={PROBLEM_DESCRIPTION}
            problemCategory={problemCategory}
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
