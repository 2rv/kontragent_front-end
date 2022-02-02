import { FieldArray } from 'formik';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { text } from '../../lib/common/text';

import { COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME } from '../company-account-item-revision-self-create/company-account-item-revision-self-create.constant';
import { CompanyAccountItemRevisionSelfCreatePeriodItemComponent } from './company-account-item-revision-self-create-period-item.component';

export function CompanyAccountItemRevisionSelfCreatePeriodListComponent(props) {
  const {
    handleChange,
    handleBlur,
    setFieldValue,
    values,
    errors,
    touched,
    initialYear,
  } = props;

  const YEARS_PERIOD_LIST =
    values[COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.YEARS];

  return (
    <Grid container spacing={4}>
      <Grid item>
        <Typography
          variant="subtitle1"
          component="div"
          children={text(
            'COMPANY_ACCOUNT_ITEM_REVISION.SELF.CREATE_PERIOD_LIST.TITLE',
          )}
        />
      </Grid>

      <FieldArray
        name={COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.YEARS}
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
            {YEARS_PERIOD_LIST.map((yearValue, yearIndex) => (
              <Grid item key={yearIndex} xs={1} md={4}>
                <CompanyAccountItemRevisionSelfCreatePeriodItemComponent
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  setFieldValue={setFieldValue}
                  touched={touched}
                  yearsLenght={YEARS_PERIOD_LIST.length}
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
                  'COMPANY_ACCOUNT_ITEM_REVISION.SELF.CREATE_PERIOD_LIST.ADD_PERIOD',
                )}
              />
            </Grid>
          </Grid>
        )}
      </FieldArray>
    </Grid>
  );
}
