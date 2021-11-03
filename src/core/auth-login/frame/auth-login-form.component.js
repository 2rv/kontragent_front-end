import Box from '@mui/material/Box';
import { TextFieldElement } from '../../../lib/element/text-field.element.js';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { text } from '../../../lib/common/text';
import { AUTH_LOGIN_DATA_NAME } from '../auth-login.constant';

export const AuthLoginFormComponent = (props) => {
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
              label={text('AUTH.LOGIN.FORM.FIELD.LABELS.LOGIN')}
              name={AUTH_LOGIN_DATA_NAME.LOGIN}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[AUTH_LOGIN_DATA_NAME.LOGIN]}
              error={isFieldError(AUTH_LOGIN_DATA_NAME.LOGIN)}
              fullWidth
              errorText={getFieldError(AUTH_LOGIN_DATA_NAME.LOGIN)}
            />
          </Grid>
          <Grid item>
            <TextFieldElement
              type='password'
              label={text('AUTH.LOGIN.FORM.FIELD.LABELS.PASSWORD')}
              name={AUTH_LOGIN_DATA_NAME.PASSWORD}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[AUTH_LOGIN_DATA_NAME.PASSWORD]}
              error={isFieldError(AUTH_LOGIN_DATA_NAME.PASSWORD)}
              fullWidth
              errorText={getFieldError(AUTH_LOGIN_DATA_NAME.PASSWORD)}
            />
          </Grid>
          <Grid item>
            <Button type="sumbit" disabled={isSubmitDisabled()} fullWidth>
              {text('AUTH.LOGIN.FORM.BUTTON.TITLE')}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
