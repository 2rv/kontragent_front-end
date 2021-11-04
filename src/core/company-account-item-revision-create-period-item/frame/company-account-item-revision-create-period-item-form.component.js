import React from 'react';
import { useDispatch } from 'react-redux';

import FormControlLabel from '@mui/material/FormControlLabel';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

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

  const checkboxBackground = (index) => {
    return period.period[index] ? '#F3F3F3' : '#d9d8d8';
  };

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
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            flexWrap="wrap"
            sx={{ pt: 3 }}
          >
            <Grid xs={3} item sx={{ display: 'flex', alignItems: 'center' }}>
              <FormControlLabel
                sx={{
                  p: 4,
                  backgroundColor: checkboxBackground(0),
                  borderRadius: '10px',
                  m: 0,
                  width: '200px',
                  justifyContent: 'center',
                }}
                control={
                  <Checkbox
                    sx={{
                      opacity: 0,
                      px: 0,
                      width: 0,
                    }}
                    onChange={(e, checked) => {
                      dispatch(
                        companyAccountItemRevisionCreateChangeYearPeriod([
                          checked ? true : false,
                          period.period[1],
                          period.period[2],
                          period.period[3],
                        ]),
                      );
                    }}
                    checked={period.period[0]}
                    defaultChecked
                  />
                }
                label={text(
                  'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_PERIOD_ITEM.FORM.FIELD.LABELS.FIRST_QUARTER',
                )}
              />
            </Grid>

            <Grid xs={3} item sx={{ display: 'flex', alignItems: 'center' }}>
              <FormControlLabel
                sx={{
                  p: 4,
                  backgroundColor: checkboxBackground(1),
                  borderRadius: '10px',
                  m: 0,
                  width: '200px',
                  justifyContent: 'center',
                }}
                control={
                  <Checkbox
                    sx={{
                      opacity: 0,
                      px: 0,
                      width: 0,
                    }}
                    onChange={(e, checked) => {
                      dispatch(
                        companyAccountItemRevisionCreateChangeYearPeriod([
                          period.period[0],
                          checked ? true : false,
                          period.period[2],
                          period.period[3],
                        ]),
                      );
                    }}
                    checked={period.period[1]}
                    defaultChecked
                  />
                }
                label={text(
                  'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_PERIOD_ITEM.FORM.FIELD.LABELS.SECOND_QUARTER',
                )}
              />
            </Grid>

            <Grid xs={3} item sx={{ display: 'flex', alignItems: 'center' }}>
              <FormControlLabel
                sx={{
                  p: 4,
                  backgroundColor: checkboxBackground(2),
                  borderRadius: '10px',
                  m: 0,
                  width: '200px',
                  justifyContent: 'center',
                }}
                control={
                  <Checkbox
                    sx={{
                      opacity: 0,
                      px: 0,
                      width: 0,
                    }}
                    onChange={(e, checked) => {
                      dispatch(
                        companyAccountItemRevisionCreateChangeYearPeriod([
                          period.period[0],
                          period.period[1],
                          checked ? true : false,
                          period.period[3],
                        ]),
                      );
                    }}
                    checked={period.period[2]}
                    defaultChecked
                  />
                }
                label={text(
                  'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_PERIOD_ITEM.FORM.FIELD.LABELS.THIRD_QUARTER',
                )}
              />
            </Grid>

            <Grid xs={3} item sx={{ display: 'flex', alignItems: 'center' }}>
              <FormControlLabel
                sx={{
                  p: 4,
                  backgroundColor: checkboxBackground(3),
                  borderRadius: '10px',
                  m: 0,
                  width: '200px',
                  justifyContent: 'center',
                }}
                control={
                  <Checkbox
                    sx={{
                      opacity: 0,
                      px: 0,
                      width: 0,
                    }}
                    onChange={(e, checked) => {
                      dispatch(
                        companyAccountItemRevisionCreateChangeYearPeriod([
                          period.period[0],
                          period.period[1],
                          period.period[2],
                          checked ? true : false,
                        ]),
                      );
                    }}
                    checked={period.period[3]}
                    defaultChecked
                  />
                }
                label={text(
                  'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_PERIOD_ITEM.FORM.FIELD.LABELS.FOURTH_QUARTER',
                )}
              />
            </Grid>
          </Grid>
        </Grid>

        {!last && (
          <Grid item xs>
            <Button
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
