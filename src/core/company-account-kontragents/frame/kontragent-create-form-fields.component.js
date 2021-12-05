import Box from '@mui/material/Box';
import { TextFieldElement } from '../../../lib/element/text-field.element.js';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { COMPANY_ACCOUNT_KONTRAGENTS_DATA_NAME } from '../company-account-kontragents.constant';
import { text } from '../../../lib/common/text';

export const KontragentCreateFormFieldsComponent = (props) => {
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
          container
          spacing={5}
          direction="column"
          flexWrap="wrap"
        >
          <Grid item>
            <TextFieldElement
              label={text(
                'COMPANY_ACCOUNT_KONTRAGENTS.FORM.FIELD.LABELS.COMPANY_NAME',
              )}
              name={COMPANY_ACCOUNT_KONTRAGENTS_DATA_NAME.NAME}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[COMPANY_ACCOUNT_KONTRAGENTS_DATA_NAME.NAME]}
              error={isFieldError(COMPANY_ACCOUNT_KONTRAGENTS_DATA_NAME.NAME)}
              fullWidth
              errorText={getFieldError(COMPANY_ACCOUNT_KONTRAGENTS_DATA_NAME.NAME)}
            />
          </Grid>

          <Grid item>
            <TextFieldElement
              label={text(
                'COMPANY_ACCOUNT_KONTRAGENTS.FORM.FIELD.LABELS.COMPANY_INN',
              )}
              name={COMPANY_ACCOUNT_KONTRAGENTS_DATA_NAME.INN}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[COMPANY_ACCOUNT_KONTRAGENTS_DATA_NAME.INN]}
              error={isFieldError(COMPANY_ACCOUNT_KONTRAGENTS_DATA_NAME.INN)}
              fullWidth
              errorText={getFieldError(COMPANY_ACCOUNT_KONTRAGENTS_DATA_NAME.INN)}
            />
          </Grid>

          <Grid item>
            <Button fullWidth type="sumbit" disabled={isSubmitDisabled()}>
              {text('COMPANY_ACCOUNT_KONTRAGENTS.FORM.BUTTON.TITLE')}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
