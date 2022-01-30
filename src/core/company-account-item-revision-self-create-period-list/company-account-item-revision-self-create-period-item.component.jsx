import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Typography } from '@material-ui/core';
import { text } from '../../lib/common/text';
import { CheckboxField } from '../../lib/common/checkbox-field';
import { TextFieldElement } from '../../lib/element/text-field.element.js';
import { COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME } from '../company-account-item-revision-self-create/company-account-item-revision-self-create.constant';

export const CompanyAccountItemRevisionSelfCreatePeriodItemComponent = (
  props,
) => {
  const {
    handleChange,
    handleBlur,
    values,
    prefix,
    value,
    errors,
    touched,
    onRemove,
  } = props;

  const isFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  const getFieldError = (name) =>
    isFieldError(prefix + name) && errors[prefix + name];

  return (
    <Grid container spacing={4}>
      <Grid item>
        <TextFieldElement
          placeholder={text(
            'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_PERIOD_ITEM.FORM.FIELD.LABELS.YEAR',
          )}
          name={
            prefix + COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.YEAR
          }
          onChange={handleChange}
          onBlur={handleBlur}
          value={
            value[COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.YEAR]
          }
          error={isFieldError(
            COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.YEAR,
          )}
          errorText={getFieldError(
            COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.YEAR,
          )}
        />
      </Grid>
      <Grid
        item
        container
        spacing={4}
        xs={4}
        direction="row"
        alignItems="center"
      >
        <Grid item xs>
          <CheckboxField
            name={
              prefix +
              COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.FIRST_PERIOD
            }
            onChange={handleChange}
            onBlur={handleBlur}
            checked={
              value[
                COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.FIRST_PERIOD
              ]
            }
            error={isFieldError(
              COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.FIRST_PERIOD,
            )}
            errorText={getFieldError(
              COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.FIRST_PERIOD,
            )}
            label={
              <Typography
                children={text(
                  'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_PERIOD_ITEM.FORM.FIELD.LABELS.FIRST_QUARTER',
                )}
              />
            }
          />
        </Grid>

        <Grid item xs>
          <CheckboxField
            name={
              prefix +
              COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.SECOND_PERIOD
            }
            onChange={handleChange}
            onBlur={handleBlur}
            checked={
              value[
                COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME
                  .SECOND_PERIOD
              ]
            }
            error={isFieldError(
              COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.SECOND_PERIOD,
            )}
            errorText={getFieldError(
              COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.SECOND_PERIOD,
            )}
            label={
              <Typography
                children={text(
                  'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_PERIOD_ITEM.FORM.FIELD.LABELS.SECOND_QUARTER',
                )}
              />
            }
          />
        </Grid>

        <Grid item xs>
          <CheckboxField
            name={
              prefix +
              COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.THIRD_PERIOD
            }
            onChange={handleChange}
            onBlur={handleBlur}
            checked={
              value[
                COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.THIRD_PERIOD
              ]
            }
            error={isFieldError(
              COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.THIRD_PERIOD,
            )}
            errorText={getFieldError(
              COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.THIRD_PERIOD,
            )}
            label={
              <Typography
                children={text(
                  'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_PERIOD_ITEM.FORM.FIELD.LABELS.THIRD_QUARTER',
                )}
              />
            }
          />
        </Grid>

        <Grid item xs>
          <CheckboxField
            name={
              prefix +
              COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.FOURTH_PERIOD
            }
            onChange={handleChange}
            onBlur={handleBlur}
            checked={
              value[
                COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME
                  .FOURTH_PERIOD
              ]
            }
            error={isFieldError(
              COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.FOURTH_PERIOD,
            )}
            errorText={getFieldError(
              COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.FOURTH_PERIOD,
            )}
            label={
              <Typography
                children={text(
                  'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_PERIOD_ITEM.FORM.FIELD.LABELS.FOURTH_QUARTER',
                )}
              />
            }
          />
        </Grid>
      </Grid>
      <Grid item>
        <Button
          color="red"
          variant="grey"
          children={text(
            'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_PERIOD_ITEM.FORM.DELETE_YEAR',
          )}
          fullWidth
          onClick={onRemove}
        />
      </Grid>
    </Grid>
  );
};
