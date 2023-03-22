import { FieldArray } from 'formik';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
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
      <Grid
        item
        display="flex"
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-end"
        zIndex={0}
      >
        <Typography
          variant="title"
          children={text(
            'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_PERIOD_LIST.TITLE',
          )}
        />

        <Tooltip
          arrow
          componentsProps={{
            tooltip: { sx: { backgroundColor: '#3AB8FF' } },
            arrow: { sx: { color: '#3AB8FF' } },
          }}
          title={
            <Typography
              variant="body1"
              color="white"
              children={text(
                'Здесь вам необходимо указать год и период проверки - периодов может быть несколько',
              )}
            />
          }
          children={<HelpOutlineOutlinedIcon sx={{ ml: 1 }} fontSize="small" />}
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
