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
import { AUTH_SIGNUP_DATA_NAME } from './auth-signup.constant';

import { Formik } from 'formik';

export function AuthSignupComponent(props) {
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
      <Paper>
        <Box>
          <Box sx={{ pb: 4 }}>
            <Typography variant="heading" gutterBottom component="div">
              Регистрация
            </Typography>
            <Typography variant="subtitle" component="div">
              Создайте свой личный аккаунт
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
                Вы уже зарегистрированы?{' '}
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => {
                    redirect('/auth/login');
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
                    redirect('/auth/recovery-account');
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
            <TextFieldElement
              label="Логин"
              name={AUTH_SIGNUP_DATA_NAME.LOGIN}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[AUTH_SIGNUP_DATA_NAME.LOGIN]}
              error={isFieldError(AUTH_SIGNUP_DATA_NAME.LOGIN)}
              fullWidth
              errorText={getFieldError(AUTH_SIGNUP_DATA_NAME.LOGIN)}
            />
          </Grid>
          <Grid item>
            <TextFieldElement
              label="E-mail почта"
              name={AUTH_SIGNUP_DATA_NAME.EMAIL}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[AUTH_SIGNUP_DATA_NAME.EMAIL]}
              error={isFieldError(AUTH_SIGNUP_DATA_NAME.EMAIL)}
              fullWidth
              errorText={getFieldError(AUTH_SIGNUP_DATA_NAME.EMAIL)}
            />
          </Grid>
          <Grid item>
            <TextFieldElement
              label="Номер телефона"
              name={AUTH_SIGNUP_DATA_NAME.PHONE}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[AUTH_SIGNUP_DATA_NAME.PHONE]}
              error={isFieldError(AUTH_SIGNUP_DATA_NAME.PHONE)}
              fullWidth
              errorText={getFieldError(AUTH_SIGNUP_DATA_NAME.PHONE)}
            />
          </Grid>
          <Grid item>
            <TextFieldElement
              label="Ваше имя"
              name={AUTH_SIGNUP_DATA_NAME.FIRST_NAME}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[AUTH_SIGNUP_DATA_NAME.FIRST_NAME]}
              error={isFieldError(AUTH_SIGNUP_DATA_NAME.FIRST_NAME)}
              fullWidth
              errorText={getFieldError(AUTH_SIGNUP_DATA_NAME.FIRST_NAME)}
            />
          </Grid>
          <Grid item>
            <TextFieldElement
              label="Ваша фамилия"
              name={AUTH_SIGNUP_DATA_NAME.LAST_NAME}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[AUTH_SIGNUP_DATA_NAME.LAST_NAME]}
              error={isFieldError(AUTH_SIGNUP_DATA_NAME.LAST_NAME)}
              fullWidth
              errorText={getFieldError(AUTH_SIGNUP_DATA_NAME.LAST_NAME)}
            />
          </Grid>
          <Grid item>
            <TextFieldElement
              label="Ваш пароль"
              name={AUTH_SIGNUP_DATA_NAME.PASSWORD}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[AUTH_SIGNUP_DATA_NAME.PASSWORD]}
              error={isFieldError(AUTH_SIGNUP_DATA_NAME.PASSWORD)}
              fullWidth
              errorText={getFieldError(AUTH_SIGNUP_DATA_NAME.PASSWORD)}
            />
          </Grid>
          <Grid item>
            <TextFieldElement
              label="Повтор пароля"
              name={AUTH_SIGNUP_DATA_NAME.PASSWORD_REPEAT}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[AUTH_SIGNUP_DATA_NAME.PASSWORD_REPEAT]}
              error={isFieldError(AUTH_SIGNUP_DATA_NAME.PASSWORD_REPEAT)}
              fullWidth
              errorText={getFieldError(AUTH_SIGNUP_DATA_NAME.PASSWORD_REPEAT)}
            />
          </Grid>
          <Grid item>
            <Button type="sumbit" disabled={isSubmitDisabled()} fullWidth>
              Создать аккаунт
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
