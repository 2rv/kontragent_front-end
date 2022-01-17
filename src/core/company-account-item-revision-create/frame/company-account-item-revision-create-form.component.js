import Box from '@mui/material/Box';
import { TextFieldElement } from '../../../lib/element/text-field.element.js';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME } from '../../company-account-item-revision-create';

import { FileUploadFieldContainer } from '../../../lib/common/file-upload-field/file-upload-field.container.js';
import { text } from '../../../lib/common/text';

import { companyAccountItemRevisionCreateChangeYearPeriod } from '../company-account-item-revision-create.action';

export const CompanyAccountItemRevisionCreateFormComponent = (props) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
    isSubmitting,
    setFileList,
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
          <Grid xs={12} item>
            <TextFieldElement
              label={text(
                'COMPANY_ACCOUNT_ITEM_REVISION.REVISION.FORM.FIELD.LABELS.COMPANY_NAME',
              )}
              name={COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME.TITLE}
              onChange={handleChange}
              storeOnChange={companyAccountItemRevisionCreateChangeYearPeriod}
              onBlur={handleBlur}
              value={
                values[COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME.TITLE]
              }
              error={isFieldError(
                COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME.TITLE,
              )}
              fullWidth
              errorText={getFieldError(
                COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME.TITLE,
              )}
            />
          </Grid>

          <Grid xs={12} item>
            <TextFieldElement
              label={text(
                'COMPANY_ACCOUNT_ITEM_REVISION.REVISION.FORM.FIELD.LABELS.COMPANY_INFO',
              )}
              name={COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME.DESCRIPTION}
              onChange={handleChange}
              onBlur={handleBlur}
              value={
                values[
                  COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME.DESCRIPTION
                ]
              }
              error={isFieldError(
                COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME.DESCRIPTION,
              )}
              fullWidth
              errorText={getFieldError(
                COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME.DESCRIPTION,
              )}
              multiline
              minRows={4}
              maxRows={20}
            />
          </Grid>

          <Grid item xs={12}>
            <FileUploadFieldContainer
              onFileAdd={(value) => {
                setFileList(value.map((i) => i.id));
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Grid container>
              <Grid xs={4}>
                <Button fullWidth type="sumbit" disabled={isSubmitDisabled()}>
                  {text(
                    'COMPANY_ACCOUNT_ITEM_REVISION.REVISION.FORM.BUTTON.TITLE',
                  )}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
