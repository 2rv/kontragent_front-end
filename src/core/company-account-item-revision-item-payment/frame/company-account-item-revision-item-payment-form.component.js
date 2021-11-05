import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { text } from '../../../lib/common/text';

export const CompanyAccountItemRevisionItemPaymentFormComponent = (props) => {
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
    isPending,
    isError,
    errorMessage,
    onSubmitForm,
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
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Grid lg={4} xs={12} item>
            <Button onClick={onSubmitForm} fullWidth>
              {text(
                'COMPANY_ACCOUNT_ITEM_REVISION.REVISION_PAYMENT.FORM.BUTTON.TITLE',
              )}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
