import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { TextFieldElement } from '../../lib/element/text-field.element.js';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';

import { redirect } from '../../main/navigation/navigation.core';
import { COMPANY_ACCOUNT_ITEM_PAYMENT_LINK_DATA_NAME } from './company-account-item-revision-item-payment.constant';

import { Formik } from 'formik';

export function CompanyAccountItemRevisionItemPaymentComponent(props) {
  const {
    initialValue,
    pageLoading,
    isPending,
    validation,
    onSubmitForm,
    isError,
    isSuccess,
    errorMessage,
    data,
  } = props;
  return (
    <Box>
      <Paper>
        <Box>
          <Box sx={{ pb: 4 }}>
            <Typography variant="title" gutterBottom component="div">
              Требуется оплата в размере {data.price} RUB
            </Typography>
            <Typography variant="subTitle" component="div">
              Ваш запрос оказался комплексным и объемным вопрос, поэтому нам
              требуется доплата
            </Typography>
          </Box>
          <Divider />

          <Form
            {...props}
            isPending={isPending}
            isError={isError}
            isSuccess={isSuccess}
            errorMessage={errorMessage}
            pageLoading={pageLoading}
            onSubmitForm={onSubmitForm}
          />

          {isSuccess && (
            <Box sx={{ pt: 4 }}>
              <Alert severity="success">Деньги списаны со счета</Alert>
            </Box>
          )}
          {isPending && (
            <Box sx={{ pt: 4, width: '100%' }}>
              <LinearProgress />
            </Box>
          )}
          {isError && (
            <Box sx={{ pt: 4 }}>
              <Alert severity="error">Ошибка: {errorMessage}</Alert>
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  );
}

export const Form = (props) => {
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
    onSubmitForm,
  } = props;

  const isFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  const getFieldError = (name) => isFieldError(name) && errors[name];

  const isSubmitDisabled = () => {
    return JSON.stringify(touched) === '{}'
      ? true
      : !isValid || isSubmitting || isSuccess || pageLoading;
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
          <Grid md={4} xs={12} item>
            <Button onClick={onSubmitForm} fullWidth>
              Оплатить с баланса компании
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
