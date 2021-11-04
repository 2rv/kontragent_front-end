import Box from '@mui/material/Box';
import { TextFieldElement } from '../../../lib/element/text-field.element.js';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {
  ADMIN_REVISION_REVIEW_DATA_NAME,
  REVISION_STATUS,
} from '../admin-revision-review.constant';
import { FileUploadFieldContainer } from '../../../lib/common/file-upload-field/file-upload-field.container.js';
import { text } from '../../../lib/common/text';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export const AdminRevisionReviewFormComponent = (props) => {
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
        <Grid columnSpacing={4} container>
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
                error={isFieldError(ADMIN_REVISION_REVIEW_DATA_NAME.REVIEW)}
                fullWidth
                errorText={getFieldError(
                  ADMIN_REVISION_REVIEW_DATA_NAME.REVIEW,
                )}
                multiline
                minRows={4}
                maxRows={20}
              />
            </Grid>

            <Grid xs={6} item>
              <InputLabel id="demo-simple-select-label">
                {text('ADMIN_REVISION_REVIEW.FORM.LABELS.STATUS')}
              </InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name={ADMIN_REVISION_REVIEW_DATA_NAME.STATUS}
                value={values[ADMIN_REVISION_REVIEW_DATA_NAME.STATUS]}
                label={text('ADMIN_REVISION_REVIEW.FORM.LABELS.STATUS')}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <MenuItem value={REVISION_STATUS.NEW}>
                  {text('COMMON.REVISION.STATUS_TYPE.NEW')}
                </MenuItem>
                <MenuItem value={REVISION_STATUS.PROGRESS}>
                  {text('COMMON.REVISION.STATUS_TYPE.PROGRESS')}
                </MenuItem>
                <MenuItem value={REVISION_STATUS.DONE}>
                  {text('COMMON.REVISION.STATUS_TYPE.DONE')}
                </MenuItem>
                <MenuItem value={REVISION_STATUS.PAY}>
                  {text('COMMON.REVISION.STATUS_TYPE.PAY')}
                </MenuItem>
                <MenuItem value={REVISION_STATUS.PAID}>
                  {text('COMMON.REVISION.STATUS_TYPE.PAID')}
                </MenuItem>
              </Select>
            </Grid>
            <Grid xs={6} item>
              <TextFieldElement
                label={text('ADMIN_REVISION_REVIEW.FORM.LABELS.PRICE')}
                name={ADMIN_REVISION_REVIEW_DATA_NAME.PRICE}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[ADMIN_REVISION_REVIEW_DATA_NAME.PRICE]}
                error={isFieldError(ADMIN_REVISION_REVIEW_DATA_NAME.PRICE)}
                fullWidth
                errorText={getFieldError(ADMIN_REVISION_REVIEW_DATA_NAME.PRICE)}
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
