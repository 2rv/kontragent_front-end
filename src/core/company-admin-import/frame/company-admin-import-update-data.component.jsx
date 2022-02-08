import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { TextFieldElement } from '../../../lib/element/text-field.element';
import { text } from '../../../lib/common/text';
import { COMPANY_ADMIN_DATA_NAME as FIELD_NAME } from '../company-admin-import.constant';

export function CompanyAdminImportUpdateDataComponent(props) {
  const { data, handleSave, handleChange, onCancel } = props;

  const isDisabled = !data[FIELD_NAME.INN] || !data[FIELD_NAME.NAME];

  return (
    <Grid container spacing={2} direction="row" alignItems="flex-start">
      <Grid item xs={12}>
        <Typography variant="title" children="Редактирование" />
      </Grid>

      <Grid item xs={12}>
        <TextFieldElement
          defaultValue={data[FIELD_NAME.INN]}
          name="inn"
          label={text('ИНН')}
          variant="outlined"
          onChange={handleChange}
          error={!data[FIELD_NAME.INN]}
          errorText="Обязательно или будет проигнорировано"
        />
      </Grid>

      <Grid item xs={12}>
        <TextFieldElement
          defaultValue={data[FIELD_NAME.NAME]}
          name="name"
          label={text('Название')}
          variant="outlined"
          onChange={handleChange}
          error={!data[FIELD_NAME.NAME]}
          errorText="Не обязательно но будет проигнорировано"
        />
      </Grid>

      <Grid item xs={12}>
        <TextFieldElement
          defaultValue={data[FIELD_NAME.REVIEW]}
          name="review"
          label={text('Рецензия')}
          variant="outlined"
          onChange={handleChange}
          error={!data[FIELD_NAME.REVIEW]}
          errorText="Не обязательно но будет проигнорировано"
          multiline
        />
      </Grid>

      <Grid item xs={6}>
        <Button
          fullWidth
          onClick={handleSave}
          variant="contained"
          color="success"
          children={text('Сохранить')}
          disabled={isDisabled}
        />
      </Grid>

      <Grid item xs={6}>
        <Button
          fullWidth
          onClick={onCancel}
          variant="contained"
          color="error"
          children={text('Отмена')}
        />
      </Grid>
    </Grid>
  );
}
