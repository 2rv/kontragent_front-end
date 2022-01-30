import { Fragment } from 'react';
import { FieldArray } from 'formik';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { text } from '../../lib/common/text';

import { COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME } from '../company-account-item-revision-self-create/company-account-item-revision-self-create.constant';
import { CompanyAccountItemRevisionSelfCreatePeriodItemComponent } from './company-account-item-revision-self-create-period-item.component';

export function CompanyAccountItemRevisionSelfCreatePeriodListComponent(props) {
  const { handleChange, handleBlur, values, errors, touched, initialYear } =
    props;

  return (
    <Grid spacing={4} container>
      <Grid item>
        <Typography
          variant="subtitle1"
          component="div"
          children={text(
            'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_PERIOD_LIST.TITLE',
          )}
        />
      </Grid>

      <Grid item container spacing={4}>
        <FieldArray
          name={COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.YEARS}
        >
          {({ remove, push }) => (
            <Fragment>
              {values[
                COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.YEARS
              ].map((value, key) => {
                return (
                  <Grid item key={key}>
                    <CompanyAccountItemRevisionSelfCreatePeriodItemComponent
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      errors={errors}
                      values={values}
                      touched={touched}
                      value={value}
                      prefix={`${COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.YEARS}.${key}.`}
                      onRemove={() => remove(key)}
                    />
                  </Grid>
                );
              })}

              <Grid item>
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
            </Fragment>
          )}
        </FieldArray>
      </Grid>

      <Grid item>
        <Alert
          severity="error"
          children={text(
            'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_PERIOD_LIST.EMPTY',
          )}
        />
      </Grid>
    </Grid>
  );
}
