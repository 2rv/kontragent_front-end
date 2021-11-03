import Box from '@mui/material/Box';
import { TextFieldElement } from '../../../lib/element/text-field.element.js';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { text } from '../../../lib/common/text';
import { USER_REFERAL_CREATE_DATA_NAME } from '../user-referal-create.constant';

export const UserReferalCreateFormComponent = (props) => {
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
      : !isValid || isSubmitting || pageLoading;
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
          <Grid md={8} xs={12} item>
            <TextFieldElement
              placeholder={text(
                'USER_REFERAL.USER_REFERAL_CREATE.FORM.PLACEHOLDER',
              )}
              name={USER_REFERAL_CREATE_DATA_NAME.EMAIL}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[USER_REFERAL_CREATE_DATA_NAME.EMAIL]}
              error={isFieldError(USER_REFERAL_CREATE_DATA_NAME.EMAIL)}
              errorText={getFieldError(USER_REFERAL_CREATE_DATA_NAME.EMAIL)}
            />
          </Grid>

          <Grid xs={12} md={4} item>
            <Button
              sx={{ width: '100%' }}
              type="sumbit"
              disabled={isSubmitDisabled()}
            >
              {text('USER_REFERAL.USER_REFERAL_CREATE.BUTTON.TITLE')}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
