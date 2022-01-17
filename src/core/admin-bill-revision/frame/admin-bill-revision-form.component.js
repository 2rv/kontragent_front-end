import Box from '@mui/material/Box';
import { TextFieldElement } from '../../../lib/element/text-field.element.js';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { ADMIN_BILL_REVISION_DATA_NAME } from '../admin-bill-revision.constant';
import { FileUploadFieldContainer } from '../../../lib/common/file-upload-field/file-upload-field.container.js';
import { text } from '../../../lib/common/text';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export const AdminBillRevisionFormComponent = (props) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    values,
    isPending,
    pageLoading,

    setFileList,
  } = props;

  const isSubmitDisabled = () => {
    return isPending || pageLoading;
  };

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
                {text('ADMIN_BILL_REVISION.DESCRIPTION')}
              </Typography>
              <TextFieldElement
                placeholder={text('ADMIN_BILL_REVISION.PLACEHOLDER')}
                name={ADMIN_BILL_REVISION_DATA_NAME.DESCRIPTION}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[ADMIN_BILL_REVISION_DATA_NAME.DESCRIPTION]}
                fullWidth
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
              <Divider sx={{ mt: -2 }} />
            </Grid>

            <Grid item xs={12}>
              <Button
                fullWidth
                variant="black"
                type="sumbit"
                disabled={isSubmitDisabled()}
                sx={{
                  "&:disabled": {
                    backgroundColor: 'rgba(0, 0, 0, 0.12)',
                  },
                }}
              >
                {text('ADMIN_BILL_REVISION.BUTTON.SAVE')}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
