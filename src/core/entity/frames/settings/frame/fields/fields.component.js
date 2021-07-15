import { Formik } from 'formik';

import { FieldItemComponent } from './field-item.component';

import { COMPANY_SETTINGS_FORM_FIELD_KEY } from './fields.type';

export function FieldsComponent(props) {
  const { initialValue, onSubmit, fieldName } = props;

  const NAME = fieldName[COMPANY_SETTINGS_FORM_FIELD_KEY.NAME];
  const ENTITY_NAME = fieldName[COMPANY_SETTINGS_FORM_FIELD_KEY.ENTITY];
  const OWNER_NAME = fieldName[COMPANY_SETTINGS_FORM_FIELD_KEY.OWNER];
  const ORGANIZATION_NAME = fieldName[COMPANY_SETTINGS_FORM_FIELD_KEY.ORGANIZATION];

  return (
    <Formik initialValues={initialValue} validate={null} onSubmit={onSubmit}>
      {(formProps) => (
        <FieldItemComponent
          {...formProps}
          fieldName={NAME}
          fieldEntity={ENTITY_NAME}
          fieldOwner={OWNER_NAME}
          fieldOrganization={ORGANIZATION_NAME}
        />
      )}
    </Formik>
  );
}
