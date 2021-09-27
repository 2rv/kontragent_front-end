import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { TextFieldElement } from '../../lib/element/text-field.element.js';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';

import { AUTH_VERIFICATION_PHONE_DATA_NAME } from './auth-verification-phone.constant';

import { Formik } from 'formik';

export function AuthVerificationPhoneComponent(props) {
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
            <Typography variant="heading" gutterBottom component="div">
              Верификация телефона
            </Typography>
            <Typography variant="subtitle" component="div">
              На ваш телефон было отправлено смс с кодом для подтверждения
              телефона
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
        <Grid spacing={3} container>
          <Grid item>
            <TextFieldElement
              label="Код"
              name={AUTH_VERIFICATION_PHONE_DATA_NAME.CODE}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[AUTH_VERIFICATION_PHONE_DATA_NAME.CODE]}
              error={isFieldError(AUTH_VERIFICATION_PHONE_DATA_NAME.CODE)}
              fullWidth
              errorText={getFieldError(AUTH_VERIFICATION_PHONE_DATA_NAME.CODE)}
            />
          </Grid>
          <Grid item>
            <Button type="sumbit" disabled={isSubmitDisabled()} fullWidth>
              Подтвердить телефон
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
