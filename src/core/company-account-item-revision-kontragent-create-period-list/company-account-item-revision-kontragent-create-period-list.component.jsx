import { memo } from 'react';
import { Fragment } from 'react';
import { FieldArray } from 'formik';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { text } from '../../lib/common/text';

import { COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME as FIELD_NAME } from '../company-account-item-revision-kontragent-create/company-account-item-revision-kontragent-create.constant';
import { CompanyAccountItemRevisionKontragentCreatePeriodItemComponent } from './company-account-item-revision-kontragent-create-period-item.component';

export function CompanyAccountItemRevisionKontragentCreatePeriodListComponent(
  props,
) {
  const {
    handleChange,
    handleBlur,
    errors,
    touched,
    setFieldValue,
    value,
    index,
    initialYear,
  } = props;

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
        name={`${FIELD_NAME.KONTRAGENTS}.${index}.${FIELD_NAME.YEARS}`}
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
            {value[FIELD_NAME.YEARS].map((yearValue, yearIndex) => (
              <Grid item key={index} xs={1} md={4}>
                <CompanyAccountItemRevisionKontragentCreatePeriodItemComponent
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  setFieldValue={setFieldValue}
                  touched={touched}
                  index={index}
                  yearsLenght={value[FIELD_NAME.YEARS].length}
                  value={yearValue}
                  yearIndex={yearIndex}
                  onRemove={() => remove(yearIndex)}
                />
              </Grid>
            ))}

            <Grid item>
              <Button
                variant="grey"
                color="black"
                sx={{ width: 200 }}
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
