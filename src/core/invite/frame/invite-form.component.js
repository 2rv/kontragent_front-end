import Box from '@mui/material/Box';
import { TextFieldElement } from '../../../lib/element/text-field.element.js';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { text } from '../../../lib/common/text';
import { INVITE_DATA_NAME } from '../invite.constant';

export const InviteFormComponent = (props) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,

    pageLoading,
    isSuccess,
    isPending,
  } = props;

  const isFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  const getFieldError = (name) => isFieldError(name) && errors[name];

  const isSubmitDisabled = () => {
    return JSON.stringify(touched) === '{}'
      ? true
      : !isValid || isPending || pageLoading;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ py: 4 }}>
        <Grid spacing={3} container>
          <Grid item>
            <TextFieldElement
              label={text('INVITE.FORM.FIELD.LABELS.EMAIL')}
              name={INVITE_DATA_NAME.EMAIL}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[INVITE_DATA_NAME.EMAIL]}
              error={isFieldError(INVITE_DATA_NAME.EMAIL)}
              fullWidth
              errorText={getFieldError(INVITE_DATA_NAME.EMAIL)}
            />
          </Grid>
          <Grid item>
            <Button type="sumbit" disabled={isSubmitDisabled()} fullWidth>
              {text('INVITE.FORM.BUTTON.TITLE')}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
