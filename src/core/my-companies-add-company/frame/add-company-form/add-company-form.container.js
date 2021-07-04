import React from 'react';
import { Formik } from 'formik';
import { AddCompanyFormComponent } from './add-company-form.component';
import { ADD_COMPANY_FORM_FIELD_KEY } from './add-company-form.type';

export function AddCompanyFormContainer(props) {
  const NAME_FIELD_NAME = props.fieldName[ADD_COMPANY_FORM_FIELD_KEY.NAME];
  const INN_FIELD_NAME = props.fieldName[ADD_COMPANY_FORM_FIELD_KEY.INN];
  const { isPending, isError, isSuccess, errorMessage, pageLoading } = props;
  return (
    <div>
      <Formik
        initialValues={props.initialValue}
        validate={props.validation}
        onSubmit={props.onSubmitForm}
      >
        {(props) => (
          <AddCompanyFormComponent
            fieldName={NAME_FIELD_NAME}
            fieldInn={INN_FIELD_NAME}
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
