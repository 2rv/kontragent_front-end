import Box from '@mui/material/Box';
import { TextFieldElement } from '../../../lib/element/text-field.element.js';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { FileUploadFieldContainer } from '../../../lib/common/file-upload-field/file-upload-field.container.js';
import { FEEDBACK_ACCOUNT_CREATE_DATA_NAME } from '../feedback-account-create.constant.js';
import { text } from '../../../lib/common/text';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export const FeedbackAccountCreateFormComponent = (props) => {
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
              <Typography variant="title" sx={{ pb: 4 }} component="div">
                {text('FEEDBACK_ACCOUNT_CREATE.TITLE_INPUT')}
              </Typography>
              <TextFieldElement
                placeholder={text('FEEDBACK_ACCOUNT_CREATE.PLACEHOLDER.TITLE')}
                name={FEEDBACK_ACCOUNT_CREATE_DATA_NAME.TITLE}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[FEEDBACK_ACCOUNT_CREATE_DATA_NAME.TITLE]}
                error={isFieldError(FEEDBACK_ACCOUNT_CREATE_DATA_NAME.TITLE)}
                fullWidth
                errorText={getFieldError(
                  FEEDBACK_ACCOUNT_CREATE_DATA_NAME.TITLE,
                )}
              />
            </Grid>

            <Grid xs={12} item>
              <Typography variant="title" sx={{ pb: 4 }} component="div">
                {text('FEEDBACK_ACCOUNT_CREATE.DESCRIPTION')}
              </Typography>
              <TextFieldElement
                placeholder={text(
                  'FEEDBACK_ACCOUNT_CREATE.PLACEHOLDER.DESCRIPTION',
                )}
                name={FEEDBACK_ACCOUNT_CREATE_DATA_NAME.DESCRIPTION}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[FEEDBACK_ACCOUNT_CREATE_DATA_NAME.DESCRIPTION]}
                error={isFieldError(
                  FEEDBACK_ACCOUNT_CREATE_DATA_NAME.DESCRIPTION,
                )}
                fullWidth
                errorText={getFieldError(
                  FEEDBACK_ACCOUNT_CREATE_DATA_NAME.DESCRIPTION,
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
                {text('FEEDBACK_ACCOUNT_CREATE.BUTTON')}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
