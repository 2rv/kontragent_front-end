import { CompanyInfoFormComponent } from './company-info-form.component';

export function CompanyInfoFormContainer(props) {
  const { countForm, deleteCurrentForm } = props;
  return (
    <CompanyInfoFormComponent
      countForm={countForm}
      deleteCurrentForm={deleteCurrentForm}
    />
  );
}
