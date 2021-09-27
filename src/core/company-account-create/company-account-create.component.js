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
import { COMPANY_ACCOUNT_CREATE_DATA_NAME } from './company-account-create.constant';

import { Formik } from 'formik';

export function CompanyAccountCreateComponent(props) {
  const {
    initialValue,
    pageLoading,
    isPending,
    validation,
    onSubmitForm,
    isError,
    isSuccess,
    errorMessage,
  } = props;
  return (
    <Box>
      <Paper>
        <Box>
          <Box sx={{ pb: 4 }}>
            <Typography variant="title" component="div">
              Cоздание компании
            </Typography>
            <Typography variant="subTitle" component="div">
              Добавьте свою компанию на платформы, чтобы иметь возможность
              проверять другие компании
            </Typography>
          </Box>
          <Divider />

          <Formik
            initialValues={initialValue}
            validate={validation}
            onSubmit={onSubmitForm}
          >
            {(props) => (
              <Form
                {...props}
                isPending={isPending}
                isError={isError}
                isSuccess={isSuccess}
                errorMessage={errorMessage}
                pageLoading={pageLoading}
              />
            )}
          </Formik>

          {isError && (
            <Box sx={{ pt: 4 }}>
              <Alert severity="error">Ошибка: {errorMessage}</Alert>
            </Box>
          )}
          {isSuccess && (
            <Box sx={{ pt: 4 }}>
              <Alert severity="success">Запрос успешно отправлен</Alert>
            </Box>
          )}
          {isPending && (
            <Box sx={{ pt: 4, width: '100%' }}>
              <LinearProgress />
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
          alignItems="flex-start"
          flexWrap="wrap"
        >
          <Grid md={4} xs={12} item>
            <TextFieldElement
              label="Название компании"
              name={COMPANY_ACCOUNT_CREATE_DATA_NAME.NAME}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[COMPANY_ACCOUNT_CREATE_DATA_NAME.NAME]}
              error={isFieldError(COMPANY_ACCOUNT_CREATE_DATA_NAME.NAME)}
              fullWidth
              errorText={getFieldError(COMPANY_ACCOUNT_CREATE_DATA_NAME.NAME)}
            />
          </Grid>

          <Grid md={4} xs={12} item>
            <TextFieldElement
              label="INN компании"
              name={COMPANY_ACCOUNT_CREATE_DATA_NAME.INN}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[COMPANY_ACCOUNT_CREATE_DATA_NAME.INN]}
              error={isFieldError(COMPANY_ACCOUNT_CREATE_DATA_NAME.INN)}
              fullWidth
              errorText={getFieldError(COMPANY_ACCOUNT_CREATE_DATA_NAME.INN)}
            />
          </Grid>

          <Grid item xs={12}>
            <Grid container>
              <Grid xs={4}>
                <Button fullWidth type="sumbit" disabled={isSubmitDisabled()}>
                  Создать компанию
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
