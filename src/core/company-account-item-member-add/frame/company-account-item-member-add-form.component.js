import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { text } from '../../../lib/common/text';

import { COMPANY_ACCOUNT_ITEM_MEMBER_ADD_DATA_NAME } from '../company-account-item-member-add.constant';

import { TextFieldElement } from '../../../lib/element/text-field.element.js';

export const CompanyAccountItemMemberAddFormComponent = (props) => {
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
          spacing={3}
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Grid lg={6} xs={12} item>
            <Grid lg={6} xs={12} item>
              <TextFieldElement
                label={text(
                  'COMPANY_ACCOUNT_ITEM_MEMBER.MEMBER_ADD.FORM.FIELD.LABELS.COMPANY_MEMBER',
                )}
                name={COMPANY_ACCOUNT_ITEM_MEMBER_ADD_DATA_NAME.ID}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[COMPANY_ACCOUNT_ITEM_MEMBER_ADD_DATA_NAME.ID]}
                error={isFieldError(
                  COMPANY_ACCOUNT_ITEM_MEMBER_ADD_DATA_NAME.ID,
                )}
                fullWidth
                errorText={getFieldError(
                  COMPANY_ACCOUNT_ITEM_MEMBER_ADD_DATA_NAME.ID,
                )}
              />
            </Grid>

            <Grid lg={6} xs={12} sx={{ mt: 3 }} item>
              <Button fullWidth type="sumbit" disabled={isSubmitDisabled()}>
                {text('COMPANY_ACCOUNT_ITEM_MEMBER.MEMBER_ADD.FORM.BUTTON')}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
