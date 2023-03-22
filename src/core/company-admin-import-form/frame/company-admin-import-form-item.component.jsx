import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { TextFieldElement } from '../../../lib/element/text-field.element';
import { text } from '../../../lib/common/text';
import { COMPANY_ADMIN_IMPORT_FORM_DATA_NAME as FIELD_NAME } from '../company-admin-import-form.constant';

export function CompanyAdminImportFormItemComponent(props) {
  const { value, index, onRemove, handleChange, handleBlur } = props;

  const prefix = `${FIELD_NAME.COMPANIES}.${index}.`;

  return (
    <Grid
      container
      spacing={4}
      direction="row"
      alignItems="flex-start"
      justifyContent="flex-start"
    >
      <Grid item xs={6}>
        <TextFieldElement
          name={prefix + FIELD_NAME.INN}
          value={value[FIELD_NAME.INN]}
          label={text('ИНН компании')}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Grid>

      <Grid item xs={6}>
        <TextFieldElement
          name={prefix + FIELD_NAME.NAME}
          value={value[FIELD_NAME.NAME]}
          label={text('Название компании')}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Grid>

      <Grid item xs={12}>
        <TextFieldElement
          name={prefix + FIELD_NAME.REVIEW}
          value={value[FIELD_NAME.REVIEW]}
          label={text('Review')}
          onChange={handleChange}
          onBlur={handleBlur}
          multiline
        />
      </Grid>

      <Grid item xs={12}>
        <TextFieldElement
          name={prefix + FIELD_NAME.CREATE_DATE}
          value={value[FIELD_NAME.CREATE_DATE]}
          label={text('Дата создания')}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Grid>

      <Grid item xs={6}>
        <Button
          fullWidth
          onClick={() => onRemove(index)}
          color="error"
          children={text('Удалить компанию')}
        />
      </Grid>
    </Grid>
  );
}
