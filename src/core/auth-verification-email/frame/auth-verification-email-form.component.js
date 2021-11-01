import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { TextFieldElement } from '../../../lib/element/text-field.element.js';

import { AUTH_VERIFICATION_EMAIL_DATA_NAME } from '../auth-verification-email.constant';

import { text } from '../../../lib/common/text';

export const AuthVerificationEmailFormComponent = (props) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
    isSubmitting,
    isError,
    isPending,

    pageLoading,
  } = props;

  const isFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  const getFieldError = (name) => isFieldError(name) && errors[name];

  const isSubmitDisabled = () => {
    return JSON.stringify(touched) === '{}'
      ? true
      : !isValid || isSubmitting || isError || isPending || pageLoading;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ py: 4 }}>
        <Grid spacing={3} container>
          <Grid item>
            <TextFieldElement
              label={text('AUTH.VERIFICATION_EMAIL.FORM.FIELD.LABELS.CODE')}
              name={AUTH_VERIFICATION_EMAIL_DATA_NAME.CODE}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[AUTH_VERIFICATION_EMAIL_DATA_NAME.CODE]}
              error={isFieldError(AUTH_VERIFICATION_EMAIL_DATA_NAME.CODE)}
              fullWidth
              errorText={getFieldError(AUTH_VERIFICATION_EMAIL_DATA_NAME.CODE)}
            />
          </Grid>
          <Grid item>
            <Button type="sumbit" disabled={isSubmitDisabled()} fullWidth>
              {text('AUTH.VERIFICATION_EMAIL.FORM.BUTTON.TITLE')}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
