import { TextFieldElement } from '../../../lib/element/text-field.element.js';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Typography, TextField } from '@material-ui/core';

import { text } from '../../../lib/common/text';

import { COMPANY_ACCOUNT_ITEM_CREATE_BILL_DATA_NAME } from '../company-account-item-create-bill.constant';

export const CompanyAccountItemCreateBillFormComponent = (props) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
    isSubmitting,

    pageLoading,
    isSuccess,
    isPending,
    isError,
    errorMessage,
  } = props;

  const isFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  const getFieldError = (name) => isFieldError(name) && errors[name];

  const isSubmitDisabled = () => {
    return JSON.stringify(touched) === '{}'
      ? true
      : !isValid || isSubmitting || pageLoading;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ py: 4 }}>
        <Grid
          spacing={3}
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Grid item xs={12}>
            <Typography variant="fieldLabel">{text('COMMON.SUMM')}</Typography>
          </Grid>
          <Grid item lg={6} xs={12}>
            <TextField
              inputProps={{
                style: {
                  paddingTop: '11px',
                  paddingBottom: '11px',
                  borderRadius: '10px',
                },
              }}
              sx={{ borderRadius: '10px' }}
              name={COMPANY_ACCOUNT_ITEM_CREATE_BILL_DATA_NAME.AMOUNT}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[COMPANY_ACCOUNT_ITEM_CREATE_BILL_DATA_NAME.AMOUNT]}
              fullWidth
              error={isFieldError(
                COMPANY_ACCOUNT_ITEM_CREATE_BILL_DATA_NAME.AMOUNT,
              )}
              onChange={(e) => handleChange(e)}
            />
          </Grid>
          <Grid lg={6} xs={12} item>
            <Button fullWidth type="sumbit" disabled={isSubmitDisabled()}>
              {text('COMPANY_ACCOUNT_ITEM_CREATE_BILL.CREATE_BILL.SUBMIT')}
            </Button>
          </Grid>
          {isFieldError(COMPANY_ACCOUNT_ITEM_CREATE_BILL_DATA_NAME.AMOUNT) && (
            <Grid item xs={12}>
              <Typography variant="errorText">
                {getFieldError(
                  COMPANY_ACCOUNT_ITEM_CREATE_BILL_DATA_NAME.AMOUNT,
                )}
              </Typography>
            </Grid>
          )}
        </Grid>
      </Box>
    </form>
  );
};
