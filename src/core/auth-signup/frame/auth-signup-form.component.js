import { Box, Grid, Button, Link, Typography } from '@mui/material';
import { TextFieldElement } from '../../../lib/element/text-field.element.js';
import { text } from '../../../lib/common/text';
import { AUTH_SIGNUP_DATA_NAME } from '../auth-signup.constant';
import { CheckboxField } from '../../../lib/common/checkbox-field';
import { redirect } from '../../../main/navigation/navigation.core.js';

export const AuthSignupFormComponent = (props) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
    isPending,

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
            <CheckboxField
              name={AUTH_SIGNUP_DATA_NAME.PRIVACY_POLICY}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[AUTH_SIGNUP_DATA_NAME.PRIVACY_POLICY]}
              error={isFieldError(AUTH_SIGNUP_DATA_NAME.PRIVACY_POLICY)}
              errorText={getFieldError(AUTH_SIGNUP_DATA_NAME.PRIVACY_POLICY)}
              label={
                <Typography variant="subtext" component="div">
                  {text('AUTH.SIGNUP.TERMS_OF_THE_OFFER')}{' '}
                  <Link
                    sx={{ fontSize: '14px', fontWeight: '600' }}
                    component="button"
                    variant="body2"
                    underline="hover"
                    onClick={() => {
                      redirect('/static/pdf/blank.pdf');
                    }}
                  >
                    {text('AUTH.SIGNUP.READ')}
                  </Link>
                </Typography>
              }
            />
          </Grid>

          <Grid item>
            <CheckboxField
              name={AUTH_SIGNUP_DATA_NAME.TERMS_OF_USE}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[AUTH_SIGNUP_DATA_NAME.TERMS_OF_USE]}
              error={isFieldError(AUTH_SIGNUP_DATA_NAME.TERMS_OF_USE)}
              errorText={getFieldError(AUTH_SIGNUP_DATA_NAME.TERMS_OF_USE)}
              label={
                <Typography variant="subtext" component="div">
                  {text('AUTH.SIGNUP.USER_AGREEMENT')}
                  <Link
                    sx={{ fontSize: '14px', fontWeight: '600' }}
                    component="button"
                    variant="body2"
                    underline="hover"
                    onClick={() => {
                      redirect('/static/pdf/blank.pdf');
                    }}
                  >
                    {text('AUTH.SIGNUP.READ')}
                  </Link>
                </Typography>
              }
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
