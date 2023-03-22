import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { text } from '../../lib/common/text';
import { CheckboxField } from '../../lib/common/checkbox-field';
import { COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME as FIELD_NAME } from '../company-account-item-revision-kontragent-create/company-account-item-revision-kontragent-create.constant';
import { YearSelectFieldComponent } from '../../lib/common/date-picker-field/year-select-field.component';

export function CompanyAccountItemRevisionKontragentCreatePeriodItemComponent(
  props,
) {
  const {
    handleChange,
    handleBlur,
    value,
    errors,
    touched,
    onRemove,
    yearsLenght,
    index,
    yearIndex,
  } = props;

  const prefix = `${FIELD_NAME.KONTRAGENTS}.${index}.${FIELD_NAME.YEARS}.${yearIndex}.`;

  const isFieldError = (name) => {
    return (
      errors[FIELD_NAME.KONTRAGENTS]?.[index]?.[FIELD_NAME.YEARS]?.[
        yearIndex
      ]?.[name] &&
      touched[FIELD_NAME.KONTRAGENTS]?.[index]?.[FIELD_NAME.YEARS]?.[
        yearIndex
      ]?.[name] &&
      errors[FIELD_NAME.KONTRAGENTS]?.[index]?.[FIELD_NAME.YEARS]?.[
        yearIndex
      ]?.[name]
    );
  };

  const getFieldError = (name) => {
    return (
      isFieldError(name) &&
      errors[FIELD_NAME.KONTRAGENTS]?.[index]?.[FIELD_NAME.YEARS]?.[
        yearIndex
      ]?.[name]
    );
  };

  return (
    <Grid
      container
      spacing={4}
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-end"
      columns={{
        xs: 1,
        lg: 5,
        xl: 6,
      }}
    >
      <Grid item xs={1} lg={1} xl={1}>
        <YearSelectFieldComponent
          onChange={handleChange}
          onBlur={handleBlur}
          fromYear={2018}
          toYear={2021}
          value={value[FIELD_NAME.YEAR]}
          name={prefix + FIELD_NAME.YEAR}
          error={isFieldError(FIELD_NAME.YEAR)}
          errorText={getFieldError(FIELD_NAME.YEAR)}
          label={text(
            'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_PERIOD_ITEM.FORM.FIELD.LABELS.YEAR',
          )}
        />
      </Grid>

      <Grid item xs={1} lg={1} xl={1}>
        <CheckboxField
          name={prefix + FIELD_NAME.FIRST_PERIOD}
          onChange={handleChange}
          onBlur={handleBlur}
          checked={value[FIELD_NAME.FIRST_PERIOD]}
          label={text(
            'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_PERIOD_ITEM.FORM.FIELD.LABELS.FIRST_QUARTER',
          )}
        />
      </Grid>

      <Grid item xs={1} lg={1} xl={1}>
        <CheckboxField
          name={prefix + FIELD_NAME.SECOND_PERIOD}
          onChange={handleChange}
          onBlur={handleBlur}
          checked={value[FIELD_NAME.SECOND_PERIOD]}
          label={text(
            'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_PERIOD_ITEM.FORM.FIELD.LABELS.SECOND_QUARTER',
          )}
        />
      </Grid>

      <Grid item xs={1} lg={1} xl={1}>
        <CheckboxField
          name={prefix + FIELD_NAME.THIRD_PERIOD}
          onChange={handleChange}
          onBlur={handleBlur}
          checked={value[FIELD_NAME.THIRD_PERIOD]}
          label={text(
            'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_PERIOD_ITEM.FORM.FIELD.LABELS.THIRD_QUARTER',
          )}
        />
      </Grid>

      <Grid item xs={1} lg={1} xl={1}>
        <CheckboxField
          name={prefix + FIELD_NAME.FOURTH_PERIOD}
          onChange={handleChange}
          onBlur={handleBlur}
          checked={value[FIELD_NAME.FOURTH_PERIOD]}
          label={text(
            'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_PERIOD_ITEM.FORM.FIELD.LABELS.FOURTH_QUARTER',
          )}
        />
      </Grid>

      {yearsLenght > 1 && (
        <Grid item xs={1} lg={2.5} xl={1}>
          <Button
            color="red"
            variant="grey"
            fullWidth
            onClick={onRemove}
            children={text(
              'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_PERIOD_ITEM.FORM.DELETE_YEAR',
            )}
          />
        </Grid>
      )}
    </Grid>
  );
}
