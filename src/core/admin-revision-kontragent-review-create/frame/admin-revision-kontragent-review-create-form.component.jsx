import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { TextFieldElement } from '../../../lib/element/text-field.element';
import { FileUploadFieldContainer } from '../../../lib/common/file-upload-field/file-upload-field.container';
import { text } from '../../../lib/common/text';

import { ADMIN_REVISION_KONTRAGENT_ITEM_DATA_NAME as FIELD_NAME } from '../../admin-revision-kontragent-item/admin-revision-kontragent-item.constant';
import { SelectElement } from './select.element';

export const AdminRevisionKontragentReviewCreateFormComponent = (props) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    erorrs,
    touched,
    setFieldValue,
  } = props;

  return (
    <Grid
      component="form"
      onSubmit={handleSubmit}
      container
      direction="row"
      justifyContent="flex-start"
      spacing={2}
      columns={{ xs: 1, md: 4 }}
    >
      <Grid item xs={1}>
        <TextFieldElement
          label={text('ADMIN_REVISION_REVIEW.FORM.LABELS.REVIEW')}
          name={FIELD_NAME.REVIEW}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[FIELD_NAME.REVIEW]}
          fullWidth
          multiline
          minRows={4}
          maxRows={20}
        />
      </Grid>

      <Grid item xs={1}>
        <SelectElement
          label={text('ADMIN_REVISION_REVIEW.FORM.LABELS.STATUS')}
          name={FIELD_NAME.STATUS}
          value={values[FIELD_NAME.STATUS]}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Grid>

      <Grid item xs={1}>
        <TextFieldElement
          label={text('ADMIN_REVISION_REVIEW.FORM.LABELS.PRICE')}
          name={FIELD_NAME.PRICE}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[FIELD_NAME.PRICE]}
          fullWidth
          type="number"
        />
      </Grid>

      <Grid item xs={1}>
        <FileUploadFieldContainer
          onFileAdd={(value) => {
            setFieldValue(
              FIELD_NAME.FILES_REVIEW,
              value.map((i) => i.id),
            );
          }}
          onFileDelete={(value) => {
            setFieldValue(
              FIELD_NAME.FILES_REVIEW,
              value.map((i) => i.id),
            );
          }}
        />
      </Grid>

      <Grid item xs={1} md={2}>
        <Button
          fullWidth
          type="sumbit"
          children={text('ADMIN_REVISION_REVIEW.FORM.BUTTON.TITLE')}
        />
      </Grid>
    </Grid>
  );
};
