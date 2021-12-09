import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { text } from '../../../lib/common/text';
import { COMPANY_ACCOUNT_ITEM_MEMBER_ADD_DATA_NAME } from '../company-account-item-member-add.constant';
import { TextFieldElement } from '../../../lib/element/text-field.element';

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
      <Box sx={{ pt: 4 }}>
        <Grid
          spacing={3}
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Grid lg={6} xs={12} item>
            <Grid container>
              <Grid item>
                <TextFieldElement
                  label={text(
                    'COMPANY_ACCOUNT_ITEM_MEMBER.MEMBER_ADD.FORM.FIELD.LABELS.COMPANY_MEMBER',
                  )}
                  inputProps={{
                    style: { padding: props.multiline || '13px 14px' },
                  }}
                  name={COMPANY_ACCOUNT_ITEM_MEMBER_ADD_DATA_NAME.ID}
                  onBlur={handleBlur}
                  value={values[COMPANY_ACCOUNT_ITEM_MEMBER_ADD_DATA_NAME.ID]}
                  fullWidth
                  error={isFieldError(
                    COMPANY_ACCOUNT_ITEM_MEMBER_ADD_DATA_NAME.ID,
                  )}
                  errorText={getFieldError(
                    COMPANY_ACCOUNT_ITEM_MEMBER_ADD_DATA_NAME.ID,
                  )}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid lg={6} xs={12} sx={{ mt: 3 }} item>
            <Button fullWidth type="sumbit" disabled={isSubmitDisabled()}>
              {text('COMPANY_ACCOUNT_ITEM_MEMBER.MEMBER_ADD.FORM.BUTTON')}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
