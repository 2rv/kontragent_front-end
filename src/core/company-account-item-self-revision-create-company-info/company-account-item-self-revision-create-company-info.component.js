import { Formik } from 'formik';

import { CompanyAccountItemSelfRevisionCreateCompanyInfoFormComponent } from './frame/company-account-item-self-revision-create-form.component.js';

export function CompanyAccountItemSelfRevisionCreateCompanyInfoComponent(
  props,
) {
  return (
    <Formik
      initialValues={props.initialValue}
      validate={props.validation}
      enableReinitialize={true}
    >
      {(fromikProps) => (
        <CompanyAccountItemSelfRevisionCreateCompanyInfoFormComponent
          {...fromikProps}
          {...props}
        />
      )}
    </Formik>
  );
}
