import styled from 'styled-components';

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
    <Form onSubmit={handleSubmit}>
      <PrimaryField
        placeholderTid="Contragent"
        titleTid="Название"
        name={fieldName}
        value={values[fieldName]}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <PrimaryField
        titleTid="Юр. лицо"
        placeholderTid="ООО Contragent"
        name={fieldEntity}
        value={values[fieldEntity]}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <PrimaryField
        titleTid="Владелец"
        placeholderTid="Илья Зинченко Андреевич"
        name={fieldOwner}
        value={values[fieldOwner]}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <PrimaryField
        titleTid="Организация"
        placeholderTid="Нет"
        name={fieldOrganization}
        value={values[fieldOrganization]}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <SecondaryButton tid="Сохранить ифнормацию о компании" />
    </Form>
  );
}

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing(4)};
`;
