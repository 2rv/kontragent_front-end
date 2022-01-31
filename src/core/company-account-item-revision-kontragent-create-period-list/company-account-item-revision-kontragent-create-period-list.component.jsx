import { memo } from 'react';
import { Fragment } from 'react';
import { FieldArray } from 'formik';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { text } from '../../lib/common/text';

import { COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME } from '../company-account-item-revision-kontragent-create/company-account-item-revision-kontragent-create.constant';
import { CompanyAccountItemRevisionKontragentCreatePeriodItemComponent } from './company-account-item-revision-kontragent-create-period-item.component';

export function CompanyAccountItemRevisionKontragentCreatePeriodListComponent(
  props,
) {
  const {
    handleChange,
    handleBlur,
    errors,
    touched,
    initialYear,
    setFieldValue,
    prefix,
    value,
  } = props;

  const YEARS_PERIOD_LIST =
    value[COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME.YEARS];

  return (
    <Grid container spacing={4}>
      <Grid item>
        <Typography
          variant="subtitle1"
          component="div"
          children={text(
            'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_PERIOD_LIST.TITLE',
          )}
        />
      </Grid>

      <FieldArray
        name={
          prefix +
          COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME.YEARS
        }
      >
        {({ remove, push }) => (
          <Grid
            item
            container
            direction="row"
            justifyContent="flex-start"
            spacing={4}
            columns={{ xs: 1, md: 4 }}
          >
            {YEARS_PERIOD_LIST.map((value, key) => (
              <Grid item key={key} xs={1} md={4}>
                <CompanyAccountItemRevisionKontragentCreatePeriodItemComponent
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  setFieldValue={setFieldValue}
                  touched={touched}
                  value={value}
                  prefix={`${prefix}${COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME.YEARS}.${key}.`}
                  onRemove={() => remove(key)}
                  yearsLenght={YEARS_PERIOD_LIST.length}
                />
              </Grid>
            ))}

            <Grid item xs={1} md={2}>
              <Button
                variant="grey"
                color="black"
                fullWidth
                onClick={() => push(initialYear)}
                children={text(
                  'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_PERIOD_LIST.BUTTON',
                )}
              />
            </Grid>
          </Grid>
        )}
      </FieldArray>
    </Grid>
  );
}
