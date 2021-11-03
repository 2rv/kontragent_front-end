import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { TextFieldElement } from '../../../lib/element/text-field.element.js';

import { SETTINGS_CHANGE_EMAIL_DATA_NAME } from '../settings-change-email.constant';

import { text } from '../../../lib/common/text';

export const SettingsChangeEmailFormComponent = (props) => {
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
        <Grid
          spacing={3}
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          flexWrap="wrap"
        >
          <Grid md={4} xs={12} item>
            <TextFieldElement
              label={text('SETTINGS.CHANGE_EMAIL.FORM.FIELD.LABELS.EMAIL')}
              name={SETTINGS_CHANGE_EMAIL_DATA_NAME.EMAIL}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[SETTINGS_CHANGE_EMAIL_DATA_NAME.EMAIL]}
              error={isFieldError(SETTINGS_CHANGE_EMAIL_DATA_NAME.EMAIL)}
              fullWidth
              errorText={getFieldError(SETTINGS_CHANGE_EMAIL_DATA_NAME.EMAIL)}
            />
          </Grid>

          <Grid md={4} xs={12} item>
            <TextFieldElement
              label={text('SETTINGS.CHANGE_EMAIL.FORM.FIELD.LABELS.NEW_EMAIL')}
              name={SETTINGS_CHANGE_EMAIL_DATA_NAME.NEW_EMAIL}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[SETTINGS_CHANGE_EMAIL_DATA_NAME.NEW_EMAIL]}
              error={isFieldError(SETTINGS_CHANGE_EMAIL_DATA_NAME.NEW_EMAIL)}
              fullWidth
              errorText={getFieldError(
                SETTINGS_CHANGE_EMAIL_DATA_NAME.NEW_EMAIL,
              )}
            />
          </Grid>

          <Grid md={4} xs={12} item>
            <TextFieldElement
              label={text('SETTINGS.CHANGE_EMAIL.FORM.FIELD.LABELS.PASSWORD')}
              name={SETTINGS_CHANGE_EMAIL_DATA_NAME.PASSWORD}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[SETTINGS_CHANGE_EMAIL_DATA_NAME.PASSWORD]}
              error={isFieldError(SETTINGS_CHANGE_EMAIL_DATA_NAME.PASSWORD)}
              fullWidth
              errorText={getFieldError(
                SETTINGS_CHANGE_EMAIL_DATA_NAME.PASSWORD,
              )}
            />
          </Grid>

          <Grid item md={4}   xs={12}>
            <Button fullWidth type="sumbit" disabled={isSubmitDisabled()}>
              {text('SETTINGS.CHANGE_EMAIL.FORM.BUTTON.TITLE')}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
