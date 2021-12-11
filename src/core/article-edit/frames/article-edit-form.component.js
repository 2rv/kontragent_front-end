import { Grid } from '@material-ui/core';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { ReactEditorBlock } from '../../../lib/common/editor';
import { TextFieldElement } from '../../../lib/element/text-field.element.js';

import { EDIT_ARTICLE_FIELD_NAME } from '../article-edit.type';

import { text } from '../../../lib/common/text';

export function ArticleEditFormComponent(props) {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    setFieldValue,
    deleteProduct,
    isValid,
    loadDataPending,
    deleteIsSuccess,
    deleteIsPending,
    updateIsPending,
  } = props;

  const isSubmitDisabled = () => {
    return JSON.stringify(touched) === '{}' ? true : !isValid;
  };

  const isFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };
  const getFieldError = (name) => isFieldError(name) && errors[name];

  const setEditorData = (name) => (editorData) =>
    setFieldValue(name, editorData);

  return (
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
              label={text('ARTICLE.EDIT.FORM.FIELD.LABELS.TITLE')}
              name={EDIT_ARTICLE_FIELD_NAME.TITLE}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[EDIT_ARTICLE_FIELD_NAME.TITLE]}
              error={isFieldError(EDIT_ARTICLE_FIELD_NAME.TITLE)}
              fullWidth
              errorText={getFieldError(EDIT_ARTICLE_FIELD_NAME.TITLE)}
            />
          </Grid>
          <Grid xs={12} item>
            <TextFieldElement
              label={text('ARTICLE.EDIT.FORM.FIELD.LABELS.DESCRIPTION')}
              name={EDIT_ARTICLE_FIELD_NAME.DESCRIPTION}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[EDIT_ARTICLE_FIELD_NAME.DESCRIPTION]}
              error={isFieldError(EDIT_ARTICLE_FIELD_NAME.DESCRIPTION)}
              fullWidth
              errorText={getFieldError(EDIT_ARTICLE_FIELD_NAME.DESCRIPTION)}
              multiline
              minRows={4}
              maxRows={20}
            />
          </Grid>
          <Grid xs={12} item>
            <ReactEditorBlock
              error={isFieldError(EDIT_ARTICLE_FIELD_NAME.ARTICLE)}
              errorText={getFieldError(EDIT_ARTICLE_FIELD_NAME.ARTICLE)}
              handleChange={setEditorData(EDIT_ARTICLE_FIELD_NAME.ARTICLE)}
              data={values[EDIT_ARTICLE_FIELD_NAME.ARTICLE]}
              minHeight={100}
              readOnly={false}
            />
          </Grid>
          <Grid xs={12} item>
            <Grid sx={{ mb: 3 }} xs={6} item>
              <Button disabled={isSubmitDisabled()} type="sumbit" fullWidth>
                {text('ARTICLE.EDIT.FORM.BUTTON.EDIT')}
              </Button>
            </Grid>
            <Grid xs={6} item>
              <Button
                type="button"
                variant="red"
                onClick={deleteProduct}
                fullWidth
              >
                {text('ARTICLE.EDIT.FORM.BUTTON.DELETE')}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
