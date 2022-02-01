import Box from '@mui/material/Box';
import { TextFieldElement } from '../../../lib/element/text-field.element.js';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { FileUploadFieldContainer } from '../../../lib/common/file-upload-field/file-upload-field.container.js';
import { NOTIFICATION_EMAIL_CREATE_DATA_NAME } from '../notification-admin-email-create.constant';
import { text } from '../../../lib/common/text';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export const NotificationAdminEmailCreateFormComponent = (props) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    values,
    isPending,
    pageLoading,
    errors,
    setFileList,
    touched,
    createEveryone,
  } = props;

  const isSubmitDisabled = () => {
    return isPending || pageLoading;
  };

  const isFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };
  const getFieldError = (name) => isFieldError(name) && errors[name];

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ py: 4 }}>
        <Grid sx={{ px: 0 }} columnSpacing={4}>
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
                label={text('NOTIFICATION_ADMIN_EMAIL_CREATE.EMAIL')}
                name={NOTIFICATION_EMAIL_CREATE_DATA_NAME.EMAIL}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[NOTIFICATION_EMAIL_CREATE_DATA_NAME.EMAIL]}
                error={isFieldError(NOTIFICATION_EMAIL_CREATE_DATA_NAME.EMAIL)}
                fullWidth
                errorText={getFieldError(
                  NOTIFICATION_EMAIL_CREATE_DATA_NAME.EMAIL,
                )}
              />
            </Grid>

            <Grid xs={12} item>
              <TextFieldElement
                label={text('NOTIFICATION_ADMIN_EMAIL_CREATE.MESSAGE')}
                name={NOTIFICATION_EMAIL_CREATE_DATA_NAME.MESSAGE}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[NOTIFICATION_EMAIL_CREATE_DATA_NAME.MESSAGE]}
                error={isFieldError(
                  NOTIFICATION_EMAIL_CREATE_DATA_NAME.MESSAGE,
                )}
                fullWidth
                errorText={getFieldError(
                  NOTIFICATION_EMAIL_CREATE_DATA_NAME.MESSAGE,
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

            <Grid item xs={6}>
              <Button fullWidth type="sumbit" disabled={isSubmitDisabled()}>
                {text('NOTIFICATION_ADMIN_EMAIL_CREATE.BUTTON')}
              </Button>
            </Grid>

            <Grid item xs={6}>
              <Button
                onClick={() => createEveryone(values)}
                fullWidth
                type="button"
                disabled={isSubmitDisabled()}
              >
                {text('NOTIFICATION_ADMIN_EMAIL_CREATE.EVERYONE')}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
