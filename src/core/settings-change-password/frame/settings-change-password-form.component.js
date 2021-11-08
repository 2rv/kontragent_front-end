import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { TextFieldElement } from '../../../lib/element/text-field.element.js';

import { SETTINGS_CHANGE_PASSWORD_DATA_NAME } from '../settings-change-password.constant';

import { text } from '../../../lib/common/text';
import { useState } from 'react';

export const SettingsChangePasswordFormComponent = (props) => {
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

  const [showPassword, setShowPassword] = useState(false);

  const isFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  const getFieldError = (name) => isFieldError(name) && errors[name];

  const isSubmitDisabled = () => {
    return JSON.stringify(touched) === '{}'
      ? true
      : !isValid || isSubmitting || isSuccess || pageLoading;
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
          <Grid lg={4} xs={12} item>
            <TextFieldElement
              label={text(
                'SETTINGS.CHANGE_PASSWORD.FORM.FIELD.LABELS.PASSWORD',
              )}
              type={'password'}
              name={SETTINGS_CHANGE_PASSWORD_DATA_NAME.PASSWORD}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[SETTINGS_CHANGE_PASSWORD_DATA_NAME.PASSWORD]}
              error={isFieldError(SETTINGS_CHANGE_PASSWORD_DATA_NAME.PASSWORD)}
              fullWidth
              errorText={getFieldError(
                SETTINGS_CHANGE_PASSWORD_DATA_NAME.PASSWORD,
              )}
            />
          </Grid>
          <Grid lg={4} xs={12} item>
            <TextFieldElement
              label={text(
                'SETTINGS.CHANGE_PASSWORD.FORM.FIELD.LABELS.NEW_PASSWORD',
              )}
              type={showPassword ? 'text' : 'password'}
              name={SETTINGS_CHANGE_PASSWORD_DATA_NAME.NEW_PASSWORD}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[SETTINGS_CHANGE_PASSWORD_DATA_NAME.NEW_PASSWORD]}
              error={isFieldError(
                SETTINGS_CHANGE_PASSWORD_DATA_NAME.NEW_PASSWORD,
              )}
              fullWidth
              errorText={getFieldError(
                SETTINGS_CHANGE_PASSWORD_DATA_NAME.NEW_PASSWORD,
              )}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid lg={4} xs={12} item>
            <TextFieldElement
              label={text(
                'SETTINGS.CHANGE_PASSWORD.FORM.FIELD.LABELS.REPEAT_NEW_PASSWORD',
              )}
              type={showPassword ? 'text' : 'password'}
              name={SETTINGS_CHANGE_PASSWORD_DATA_NAME.PASSWORD_REPEAT}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[SETTINGS_CHANGE_PASSWORD_DATA_NAME.PASSWORD_REPEAT]}
              error={isFieldError(
                SETTINGS_CHANGE_PASSWORD_DATA_NAME.PASSWORD_REPEAT,
              )}
              fullWidth
              errorText={getFieldError(
                SETTINGS_CHANGE_PASSWORD_DATA_NAME.PASSWORD_REPEAT,
              )}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item lg={4} xs={12}>
            <Button fullWidth type="sumbit" disabled={isSubmitDisabled()}>
              {text('SETTINGS.CHANGE_PASSWORD.FORM.BUTTON.TITLE')}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
