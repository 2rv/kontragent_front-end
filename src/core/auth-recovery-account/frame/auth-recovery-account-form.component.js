import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { AUTH_RECOVERY_ACCOUNT_DATA_NAME } from '../auth-recovery-account.constant';
import { TextFieldElement } from '../../../lib/element/text-field.element.js';
import { text } from '../../../lib/common/text';

export const AuthRecoveryAccountForm = (props) => {
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
              label={text('AUTH.RECOVERY.INPUT_TITLE')}
              name={AUTH_RECOVERY_ACCOUNT_DATA_NAME.EMAIL}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[AUTH_RECOVERY_ACCOUNT_DATA_NAME.EMAIL]}
              error={isFieldError(AUTH_RECOVERY_ACCOUNT_DATA_NAME.EMAIL)}
              fullWidth
              errorText={getFieldError(AUTH_RECOVERY_ACCOUNT_DATA_NAME.EMAIL)}
            />
          </Grid>
          <Grid item>
            <Button type="sumbit" disabled={isSubmitDisabled()} fullWidth>
              {text('AUTH.RECOVERY.BUTTON_TEXT')}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
