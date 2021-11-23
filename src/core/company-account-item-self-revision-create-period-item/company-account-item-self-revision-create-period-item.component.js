import { Formik } from 'formik';

import { CompanyAccountItemSelfRevisionCreatePeriodItemFormComponent } from './frame/company-account-item-self-revision-create-period-item-form.component.js';

export function CompanyAccountItemSelfRevisionCreatePeriodItemComponent(props) {
  return (
    <Formik
      initialValues={props.initialValue}
      validate={props.validation}
      enableReinitialize={true}
    >
      {(formikProps) => (
        <CompanyAccountItemSelfRevisionCreatePeriodItemFormComponent
          {...formikProps}
          {...props}
        />
      )}
    </Formik>
  );
}
