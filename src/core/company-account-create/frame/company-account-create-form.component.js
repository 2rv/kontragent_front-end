import Box from '@mui/material/Box';
import { TextFieldElement } from '../../../lib/element/text-field.element.js';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { COMPANY_ACCOUNT_CREATE_DATA_NAME } from '../company-account-create.constant';
import { text } from '../../../lib/common/text';

export const CompanyAccountCreateFormComponent = (props) => {
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
          <Grid md={6} xs={12} item>
            <TextFieldElement
              label={text(
                'COMPANY_ACCOUNT_CREATE.FORM.FIELD.LABELS.COMPANY_NAME',
              )}
              name={COMPANY_ACCOUNT_CREATE_DATA_NAME.NAME}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[COMPANY_ACCOUNT_CREATE_DATA_NAME.NAME]}
              error={isFieldError(COMPANY_ACCOUNT_CREATE_DATA_NAME.NAME)}
              fullWidth
              errorText={getFieldError(COMPANY_ACCOUNT_CREATE_DATA_NAME.NAME)}
            />
          </Grid>

          <Grid md={6} xs={12} item>
            <TextFieldElement
              label={text(
                'COMPANY_ACCOUNT_CREATE.FORM.FIELD.LABELS.COMPANY_INN',
              )}
              name={COMPANY_ACCOUNT_CREATE_DATA_NAME.INN}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[COMPANY_ACCOUNT_CREATE_DATA_NAME.INN]}
              error={isFieldError(COMPANY_ACCOUNT_CREATE_DATA_NAME.INN)}
              fullWidth
              errorText={getFieldError(COMPANY_ACCOUNT_CREATE_DATA_NAME.INN)}
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <Button fullWidth type="sumbit" disabled={isSubmitDisabled()}>
              {text('COMPANY_ACCOUNT_CREATE.FORM.BUTTON.TITLE')}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
