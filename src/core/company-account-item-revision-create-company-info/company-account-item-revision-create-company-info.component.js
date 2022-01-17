import { Formik } from 'formik';

import { CompanyAccountItemRevisionCreateCompanyInfoFormComponent } from './frame/company-account-item-revision-create-form.component.js';

export function CompanyAccountItemRevisionCreateCompanyInfoComponent(props) {
  return (
    <Formik
      initialValues={props.initialValue}
      validate={props.validation}
      enableReinitialize={true}
    >
      {(fromikProps) => (
        <CompanyAccountItemRevisionCreateCompanyInfoFormComponent
          {...fromikProps}
          {...props}
        />
      )}
    </Formik>
  );
}
