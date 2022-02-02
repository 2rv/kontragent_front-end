import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Typography } from '@material-ui/core';
import { text } from '../../lib/common/text';
import { CheckboxField } from '../../lib/common/checkbox-field';
import { YearSelectFieldComponent } from '../../lib/common/date-picker-field/year-select-field.component';
import { COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME as FIELD_NAME } from '../company-account-item-revision-self-create/company-account-item-revision-self-create.constant';

export const CompanyAccountItemRevisionSelfCreatePeriodItemComponent = (
  props,
) => {
  const {
    handleChange,
    handleBlur,
    value,
    errors,
    touched,
    onRemove,
    yearsLenght,
    yearIndex,
  } = props;

  const prefix = `${FIELD_NAME.YEARS}.${yearIndex}.`;

  const isFieldError = (name) => {
    return (
      errors[FIELD_NAME.YEARS]?.[yearIndex]?.[name] &&
      touched[FIELD_NAME.YEARS]?.[yearIndex]?.[name] &&
      errors[FIELD_NAME.YEARS]?.[yearIndex]?.[name]
    );
  };

  const getFieldError = (name) =>
    isFieldError(name) && errors[FIELD_NAME.YEARS]?.[yearIndex]?.[name];

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
          fromYear={1999}
          value={value[FIELD_NAME.YEAR]}
          name={prefix + FIELD_NAME.YEAR}
          error={isFieldError(FIELD_NAME.YEAR)}
          errorText={getFieldError(FIELD_NAME.YEAR)}
          label={text(
            'COMPANY_ACCOUNT_ITEM_REVISION.SELF.CREATE_PERIOD_LIST.YEAR',
          )}
        />
      </Grid>

      <Grid item xs={1} lg={1} xl={1}>
        <CheckboxField
          name={prefix + FIELD_NAME.FIRST_PERIOD}
          onChange={handleChange}
          onBlur={handleBlur}
          checked={value[FIELD_NAME.FIRST_PERIOD]}
          error={isFieldError(FIELD_NAME.FIRST_PERIOD)}
          errorText={getFieldError(FIELD_NAME.FIRST_PERIOD)}
          label={
            <Typography
              children={text(
                'COMPANY_ACCOUNT_ITEM_REVISION.SELF.CREATE_PERIOD_LIST.QUARTER_1',
              )}
            />
          }
        />
      </Grid>

      <Grid item xs={1} lg={1} xl={1}>
        <CheckboxField
          name={prefix + FIELD_NAME.SECOND_PERIOD}
          onChange={handleChange}
          onBlur={handleBlur}
          checked={value[FIELD_NAME.SECOND_PERIOD]}
          error={isFieldError(FIELD_NAME.SECOND_PERIOD)}
          errorText={getFieldError(FIELD_NAME.SECOND_PERIOD)}
          label={
            <Typography
              children={text(
                'COMPANY_ACCOUNT_ITEM_REVISION.SELF.CREATE_PERIOD_LIST.QUARTER_2',
              )}
            />
          }
        />
      </Grid>

      <Grid item xs={1} lg={1} xl={1}>
        <CheckboxField
          name={prefix + FIELD_NAME.THIRD_PERIOD}
          onChange={handleChange}
          onBlur={handleBlur}
          checked={value[FIELD_NAME.THIRD_PERIOD]}
          error={isFieldError(FIELD_NAME.THIRD_PERIOD)}
          errorText={getFieldError(FIELD_NAME.THIRD_PERIOD)}
          label={
            <Typography
              children={text(
                'COMPANY_ACCOUNT_ITEM_REVISION.SELF.CREATE_PERIOD_LIST.QUARTER_3',
              )}
            />
          }
        />
      </Grid>

      <Grid item xs={1} lg={1} xl={1}>
        <CheckboxField
          name={prefix + FIELD_NAME.FOURTH_PERIOD}
          onChange={handleChange}
          onBlur={handleBlur}
          checked={value[FIELD_NAME.FOURTH_PERIOD]}
          error={isFieldError(FIELD_NAME.FOURTH_PERIOD)}
          errorText={getFieldError(FIELD_NAME.FOURTH_PERIOD)}
          label={
            <Typography
              children={text(
                'COMPANY_ACCOUNT_ITEM_REVISION.SELF.CREATE_PERIOD_LIST.QUARTER_4',
              )}
            />
          }
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
              'COMPANY_ACCOUNT_ITEM_REVISION.SELF.CREATE_PERIOD_LIST.DELETE_PERIOD',
            )}
          />
        </Grid>
      )}
    </Grid>
  );
};
