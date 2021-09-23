import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';

import { redirect } from '../../main/navigation/navigation.core';
import { AUTH_LOGIN_DATA_NAME } from './auth-login.constant';

import { Formik } from 'formik';

export function AuthLoginComponent(props) {
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
      <Box sx={{ pb: 4 }}>
        <img
          style={{ margin: '0 auto', display: 'block' }}
          height="32px"
          src="/static/img/logo.svg"
        />
      </Box>
      <Paper variant="outlined">
        <Box>
          <Box sx={{ pb: 4 }}>
            <Typography variant="heading" gutterBottom component="div">
              Авторизация
            </Typography>
            <Typography variant="subtitle" component="div">
              Войти в свой аккаунт
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
          <Divider />
          <Box sx={{ pt: 4 }}>
            <div>
              <Typography variant="subtext" component="div">
                Вы не зарегистрированы?{' '}
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => {
                    redirect('/auth/signup');
                  }}
                >
                  Войти в аккаунт
                </Link>
              </Typography>
              <Typography variant="subtext" component="div">
                Вы забыли пароль?{' '}
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => {
                    redirect('/auth/recovery');
                  }}
                >
                  Восстановить доступ
                </Link>
              </Typography>
            </div>
          </Box>

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
            <TextField
              label="Логин"
              name={AUTH_LOGIN_DATA_NAME.LOGIN}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[AUTH_LOGIN_DATA_NAME.LOGIN]}
              error={isFieldError(AUTH_LOGIN_DATA_NAME.LOGIN)}
              fullWidth
              helperText={getFieldError(AUTH_LOGIN_DATA_NAME.LOGIN)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Ваш пароль"
              name={AUTH_LOGIN_DATA_NAME.PASSWORD}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[AUTH_LOGIN_DATA_NAME.PASSWORD]}
              error={isFieldError(AUTH_LOGIN_DATA_NAME.PASSWORD)}
              fullWidth
              helperText={getFieldError(AUTH_LOGIN_DATA_NAME.PASSWORD)}
            />
          </Grid>
          <Grid item>
            <Button type="sumbit" disabled={isSubmitDisabled()} fullWidth>
              Войти в аккаунт
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
