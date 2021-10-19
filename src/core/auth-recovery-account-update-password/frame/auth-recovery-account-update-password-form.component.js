import Box from '@mui/material/Box';
import { TextFieldElement } from '../../../lib/element/text-field.element.js';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_DATA_NAME } from '../auth-recovery-account-update-password.constant';
import { text } from '../../../lib/common/text';

export const AuthRecoveryAccountUpdatePasswordForm = (props) => {
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
              label={text('AUTH.RECOVERY_UPDATE_PASSWORD.FORM.FIELD.LABELS.CODE')}
              name={AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_DATA_NAME.CODE}
              onChange={handleChange}
              onBlur={handleBlur}
              value={
                values[AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_DATA_NAME.CODE]
              }
              error={isFieldError(
                AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_DATA_NAME.CODE,
              )}
              fullWidth
              errorText={getFieldError(
                AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_DATA_NAME.CODE,
              )}
            />
          </Grid>
          <Grid item>
            <TextFieldElement
              label={text('AUTH.RECOVERY_UPDATE_PASSWORD.FORM.FIELD.LABELS.NEW_PASSWORD')}
              name={AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_DATA_NAME.PASSWORD}
              onChange={handleChange}
              onBlur={handleBlur}
              value={
                values[AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_DATA_NAME.PASSWORD]
              }
              error={isFieldError(
                AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_DATA_NAME.PASSWORD,
              )}
              fullWidth
              errorText={getFieldError(
                AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_DATA_NAME.PASSWORD,
              )}
            />
          </Grid>
          <Grid item>
            <TextFieldElement
              label={text('AUTH.RECOVERY_UPDATE_PASSWORD.FORM.FIELD.LABELS.REPEAT_PASSWORD')}
              name={
                AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_DATA_NAME.PASSWORD_REPEAT
              }
              onChange={handleChange}
              onBlur={handleBlur}
              value={
                values[
                  AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_DATA_NAME
                    .PASSWORD_REPEAT
                ]
              }
              error={isFieldError(
                AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_DATA_NAME.PASSWORD_REPEAT,
              )}
              fullWidth
              errorText={getFieldError(
                AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_DATA_NAME.PASSWORD_REPEAT,
              )}
            />
          </Grid>
          <Grid item>
            <Button type="sumbit" disabled={isSubmitDisabled()} fullWidth>
              {text('AUTH.RECOVERY_UPDATE_PASSWORD.FORM.BUTTON.TITLE')}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
