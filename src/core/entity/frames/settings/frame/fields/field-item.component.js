import styled from 'styled-components';

import {
  SectionLayout,
  FieldLayout,
  ButtonLayout,
} from '../../../../../../lib/elements/layout';
import { PrimaryField } from '../../../../../../lib/elements/field';
import { SecondaryButton } from '../../../../../../lib/elements/button';
import { spacing } from '../../../../../../lib/theme';

export function FieldItemComponent(props) {
  const {
    fieldName,
    fieldEntity,
    fieldOwner,
    fieldOrganization,
    values,
    handleSubmit,
    handleChange,
    handleBlur,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <SectionLayout>
        <FieldLayout>
          <PrimaryField
            titleTid="ENTITY.SETTING.FORM.COMPANY_NAME_FIELD.TITLE"
            placeholderTid="ENTITY.SETTING.FORM.COMPANY_NAME_FIELD.PLACEHOLDER"
            name={fieldName}
            value={values[fieldName]}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <PrimaryField
            titleTid="ENTITY.SETTING.FORM.ENTITY_FIELD.TITLE"
            placeholderTid="ENTITY.SETTING.FORM.ENTITY_FIELD.PLACEHOLDER"
            name={fieldEntity}
            value={values[fieldEntity]}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <PrimaryField
            titleTid="ENTITY.SETTING.FORM.OWNER_FIELD.TITLE"
            placeholderTid="ENTITY.SETTING.FORM.OWNER_FIELD.PLACEHOLDER"
            name={fieldOwner}
            value={values[fieldOwner]}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <PrimaryField
            titleTid="ENTITY.SETTING.FORM.ORGANIZATION_FIELD.TITLE"
            placeholderTid="ENTITY.SETTING.FORM.ORGANIZATION_FIELD.PLACEHOLDER"
            name={fieldOrganization}
            value={values[fieldOrganization]}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FieldLayout>
        <ButtonLayout type="double">
          {' '}
          <SecondaryButton tid="ENTITY.SETTING.FORM.SAVE_COMPANY_INFORMATION" />
        </ButtonLayout>
      </SectionLayout>
    </form>
  );
}
