import { Formik } from 'formik';

import { CompanyAccountItemRevisionCreatePeriodItemFormComponent } from './frame/company-account-item-revision-create-period-item-form.component.js';

export function CompanyAccountItemRevisionCreatePeriodItemComponent(props) {
  return (
    <Formik
      initialValues={props.initialValue}
      validate={props.validation}
      enableReinitialize={true}
    >
      {(formikProps) => (
        <CompanyAccountItemRevisionCreatePeriodItemFormComponent
          {...formikProps}
          {...props}
        />
      )}
    </Formik>
  );
}
