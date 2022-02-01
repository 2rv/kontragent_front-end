import Box from '@mui/material/Box';
import { TextFieldElement } from '../../../lib/element/text-field.element.js';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { ADMIN_REVISION_REVIEW_DATA_NAME } from '../admin-revision-kontragent-review-create.constant';
import { FileUploadFieldContainer } from '../../../lib/common/file-upload-field/file-upload-field.container.js';
import { text } from '../../../lib/common/text';

import { SelectElement } from './select.element.js';

export const AdminRevisionReviewFormComponent = (props) => {
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
      <Box sx={{ pt: 4 }}>
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
                label={text('ADMIN_REVISION_REVIEW.FORM.LABELS.REVIEW')}
                name={ADMIN_REVISION_REVIEW_DATA_NAME.REVIEW}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[ADMIN_REVISION_REVIEW_DATA_NAME.REVIEW]}
                fullWidth
                multiline
                minRows={4}
                maxRows={20}
              />
            </Grid>

            <Grid xs={12} lg={6} item>
              <SelectElement
                label={text('ADMIN_REVISION_REVIEW.FORM.LABELS.STATUS')}
                sx={{
                  height: '46px',
                }}
                name={ADMIN_REVISION_REVIEW_DATA_NAME.STATUS}
                value={values[ADMIN_REVISION_REVIEW_DATA_NAME.STATUS]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Grid>

            <Grid xs={12} lg={6} item>
              <TextFieldElement
                label={text('ADMIN_REVISION_REVIEW.FORM.LABELS.PRICE')}
                name={ADMIN_REVISION_REVIEW_DATA_NAME.PRICE}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[ADMIN_REVISION_REVIEW_DATA_NAME.PRICE]}
                fullWidth
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
                <Grid xs={12} lg={6}>
                  <Button fullWidth type="sumbit" disabled={isSubmitDisabled()}>
                    {text('ADMIN_REVISION_REVIEW.FORM.BUTTON.TITLE')}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
