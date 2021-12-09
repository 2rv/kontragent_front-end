import React from 'react';
import { useDispatch } from 'react-redux';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { TextFieldElement } from '../../../lib/element/text-field.element.js';

import { COMPANY_ACCOUNT_ITEM_REVISION_CREATE_PERIOD_ITEM_FIELD_NAME } from '../company-account-item-revision-create-period-item.constant';

import { text } from '../../../lib/common/text';

import { setYearValid } from '../../company-account-item-revision-create';

export const CompanyAccountItemRevisionCreatePeriodItemFormComponent = (
  props,
) => {
  const {
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    period,

    isValid,
    companyId,
    yearId,

    last,
    companyAccountItemRevisionCreateDeleteYear,
    companyAccountItemRevisionCreateChangeYear,
    companyAccountItemRevisionCreateChangeYearPeriod,
  } = props;

  const dispatch = useDispatch();

  const isYearFormValid = () => {
    return JSON.stringify(touched) === '{}' ? false : isValid;
  };
  React.useEffect(() => {
    dispatch(setYearValid(companyId, yearId, isYearFormValid()));
  }, [touched, isValid]);

  const isFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  const getFieldError = (name) => isFieldError(name) && errors[name];

  return (
    <form>
      <Grid
        rowSpacing={1}
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        flexWrap="wrap"
      >
        <Grid xs={12} item>
          <TextFieldElement
            type="number"
            placeholder={text(
              'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_PERIOD_ITEM.FORM.FIELD.LABELS.YEAR',
            )}
            name={
              COMPANY_ACCOUNT_ITEM_REVISION_CREATE_PERIOD_ITEM_FIELD_NAME.YEAR
            }
            onChange={handleChange}
            storeOnChange={companyAccountItemRevisionCreateChangeYear}
            onBlur={handleBlur}
            value={
              values[
                COMPANY_ACCOUNT_ITEM_REVISION_CREATE_PERIOD_ITEM_FIELD_NAME.YEAR
              ]
            }
            error={isFieldError(
              COMPANY_ACCOUNT_ITEM_REVISION_CREATE_PERIOD_ITEM_FIELD_NAME.YEAR,
            )}
            fullWidth
            errorText={getFieldError(
              COMPANY_ACCOUNT_ITEM_REVISION_CREATE_PERIOD_ITEM_FIELD_NAME.YEAR,
            )}
          />
        </Grid>

        <Grid xs={12} item>
          <Grid
            columnSpacing={6}
            rowSpacing={6}
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            flexWrap="wrap"
            sx={{ pt: 3 }}
          >
            <Grid
              xs={6}
              md={3}
              item
              sx={{ display: 'flex', alignItems: 'left' }}
            >
              <Button
                variant="grey"
                color={period.period[0] ? 'blue' : 'black1'}
                onClick={() => {
                  dispatch(
                    companyAccountItemRevisionCreateChangeYearPeriod([
                      !period.period[0],
                      period.period[1],
                      period.period[2],
                      period.period[3],
                    ]),
                  );
                }}
              >
                {text(
                  'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_PERIOD_ITEM.FORM.FIELD.LABELS.FIRST_QUARTER',
                )}
              </Button>
            </Grid>

            <Grid
              xs={6}
              md={3}
              item
              sx={{ display: 'flex', alignItems: 'left' }}
            >
              <Button
                variant="grey"
                color={period.period[1] ? 'blue' : 'black1'}
                onClick={() => {
                  dispatch(
                    companyAccountItemRevisionCreateChangeYearPeriod([
                      period.period[0],
                      !period.period[1],
                      period.period[2],
                      period.period[3],
                    ]),
                  );
                }}
              >
                {text(
                  'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_PERIOD_ITEM.FORM.FIELD.LABELS.SECOND_QUARTER',
                )}
              </Button>
            </Grid>

            <Grid
              xs={6}
              md={3}
              item
              sx={{ display: 'flex', alignItems: 'left' }}
            >
              <Button
                variant="grey"
                color={period.period[2] ? 'blue' : 'black1'}
                onClick={() => {
                  dispatch(
                    companyAccountItemRevisionCreateChangeYearPeriod([
                      period.period[0],
                      period.period[1],
                      !period.period[2],
                      period.period[3],
                    ]),
                  );
                }}
              >
                {text(
                  'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_PERIOD_ITEM.FORM.FIELD.LABELS.THIRD_QUARTER',
                )}
              </Button>
            </Grid>

            <Grid
              xs={6}
              md={3}
              item
              sx={{ display: 'flex', alignItems: 'left' }}
            >
              <Button
                variant="grey"
                color={period.period[3] ? 'blue' : 'black1'}
                onClick={() => {
                  dispatch(
                    companyAccountItemRevisionCreateChangeYearPeriod([
                      period.period[0],
                      period.period[1],
                      period.period[2],
                      !period.period[3],
                    ]),
                  );
                }}
              >
                {text(
                  'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_PERIOD_ITEM.FORM.FIELD.LABELS.FOURTH_QUARTER',
                )}
              </Button>
            </Grid>
          </Grid>
        </Grid>

        {!last && (
          <Grid item xs={12}>
            <Button
              sx={{ mt: '14px' }}
              onClick={() => {
                dispatch(companyAccountItemRevisionCreateDeleteYear());
              }}
              color="red"
              variant="grey"
              fullWidth
            >
              {text(
                'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_PERIOD_ITEM.FORM.DELETE_YEAR',
              )}
            </Button>
          </Grid>
        )}
      </Grid>
    </form>
  );
};
