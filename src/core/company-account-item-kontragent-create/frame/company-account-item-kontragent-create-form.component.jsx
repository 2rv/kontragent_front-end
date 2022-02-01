import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { text } from '../../../lib/common/text';
import { TextFieldElement } from '../../../lib/element/text-field.element.js';

import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_CREATE_DATA_NAME } from '../company-account-item-kontragent-create.constant';

export function CompanyAccountItemKontragentCreateFormComponent(props) {
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
    return JSON.stringify(touched) === '{}' ? true : !isValid || pageLoading;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ py: 4 }}>
        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          flexWrap="wrap"
        >
          <Grid item xs={12} lg={6}>
            <TextFieldElement
              label={text(
                'COMPANY_ACCOUNT_KONTRAGENTS.FORM.FIELD.LABELS.COMPANY_NAME',
              )}
              name={COMPANY_ACCOUNT_ITEM_KONTRAGENT_CREATE_DATA_NAME.NAME}
              onChange={handleChange}
              onBlur={handleBlur}
              value={
                values[COMPANY_ACCOUNT_ITEM_KONTRAGENT_CREATE_DATA_NAME.NAME]
              }
              error={isFieldError(
                COMPANY_ACCOUNT_ITEM_KONTRAGENT_CREATE_DATA_NAME.NAME,
              )}
              fullWidth
              errorText={getFieldError(
                COMPANY_ACCOUNT_ITEM_KONTRAGENT_CREATE_DATA_NAME.NAME,
              )}
            />
          </Grid>

          <Grid xs={12} lg={6} item>
            <TextFieldElement
              label={text(
                'COMPANY_ACCOUNT_KONTRAGENTS.FORM.FIELD.LABELS.COMPANY_INN',
              )}
              name={COMPANY_ACCOUNT_ITEM_KONTRAGENT_CREATE_DATA_NAME.INN}
              onChange={handleChange}
              onBlur={handleBlur}
              value={
                values[COMPANY_ACCOUNT_ITEM_KONTRAGENT_CREATE_DATA_NAME.INN]
              }
              error={isFieldError(
                COMPANY_ACCOUNT_ITEM_KONTRAGENT_CREATE_DATA_NAME.INN,
              )}
              fullWidth
              errorText={getFieldError(
                COMPANY_ACCOUNT_ITEM_KONTRAGENT_CREATE_DATA_NAME.INN,
              )}
            />
          </Grid>

          <Grid xs={12} lg={6} item>
            <Button fullWidth type="sumbit" disabled={isSubmitDisabled()}>
              {text('COMPANY_ACCOUNT_KONTRAGENTS.FORM.BUTTON.TITLE')}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
}
