import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { TextFieldElement } from '../../../lib/element/text-field.element.js';
import { text } from '../../../lib/common/text';
import { AUTH_SIGNUP_DATA_NAME } from '../auth-signup.constant';

export const AuthSignupFormComponent = (props) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
    isPending

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
      : !isValid || isSuccess || isPending || pageLoading;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ py: 4 }}>
        <Grid spacing={3} container>
          <Grid item>
            <TextFieldElement
              label={text('AUTH.SIGNUP.FORM.FIELD.LABELS.LOGIN')}
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
              label={text('AUTH.SIGNUP.FORM.FIELD.LABELS.EMAIL')}
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
              label={text('AUTH.SIGNUP.FORM.FIELD.LABELS.NUMBER_PHONE')}
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
              label={text('AUTH.SIGNUP.FORM.FIELD.LABELS.FIRST_NAME')}
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
              label={text('AUTH.SIGNUP.FORM.FIELD.LABELS.LAST_NAME')}
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
              type="password"
              label={text('AUTH.SIGNUP.FORM.FIELD.LABELS.PASSWORD')}
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
              type="password"
              label={text('AUTH.SIGNUP.FORM.FIELD.LABELS.REPEAT_PASSWORD')}
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
              {text('AUTH.SIGNUP.FORM.BUTTON.TITLE')}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
