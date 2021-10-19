import Box from '@mui/material/Box';
import { TextFieldElement } from '../../../lib/element/text-field.element.js';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { AUTH_VERIFICATION_PHONE_DATA_NAME } from '../auth-verification-phone.constant';
import { text } from '../../../lib/common/text';

export const AuthVerificationFormComponent = (props) => {
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
              label={text('AUTH.VERIFICATION_PHONE.FORM.FIELD.LABELS.CODE')}
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
              {text('AUTH.VERIFICATION_PHONE.FORM.BUTTON.TITLE')}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
