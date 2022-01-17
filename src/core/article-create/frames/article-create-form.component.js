import { Grid } from '@material-ui/core';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { ReactEditorBlock } from '../../../lib/common/editor';
import { TextFieldElement } from '../../../lib/element/text-field.element.js';

import { ARTICLE_FIELD_NAME } from '../article-create.type';

import { text } from '../../../lib/common/text';

export function ArticleCreateFormComponent(props) {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    setFieldValue,
    isValid,
  } = props;

  const isFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };
  const getFieldError = (name) => isFieldError(name) && errors[name];

  const setEditorData = (name) => (editorData) =>
    setFieldValue(name, editorData);

  const isSubmitDisabled = () => {
    return JSON.stringify(touched) === '{}' ? true : !isValid;
  };

  return (
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
              label={text('ARTICLE.CREATE.FORM.FIELD.LABELS.TITLE')}
              placeholder={text('ARTICLE.CREATE.FORM.FIELD.PLACEHOLDERS.TITLE')}
              name={ARTICLE_FIELD_NAME.TITLE}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[ARTICLE_FIELD_NAME.TITLE]}
              error={isFieldError(ARTICLE_FIELD_NAME.TITLE)}
              fullWidth
              errorText={getFieldError(ARTICLE_FIELD_NAME.TITLE)}
            />
          </Grid>
          <Grid xs={12} item>
            <TextFieldElement
              label={text('ARTICLE.CREATE.FORM.FIELD.LABELS.DESCRIPTION')}
              placeholder={text(
                'ARTICLE.CREATE.FORM.FIELD.PLACEHOLDERS.DESCRIPTION',
              )}
              name={ARTICLE_FIELD_NAME.DESCRIPTION}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[ARTICLE_FIELD_NAME.DESCRIPTION]}
              error={isFieldError(ARTICLE_FIELD_NAME.DESCRIPTION)}
              fullWidth
              errorText={getFieldError(ARTICLE_FIELD_NAME.DESCRIPTION)}
              multiline
              minRows={4}
              maxRows={20}
            />
          </Grid>
          <Grid xs={12} item>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="fieldLabel">
                  {text('ARTICLE.CREATE.FORM.FIELD.LABELS.BODY')}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ReactEditorBlock
                  error={isFieldError(ARTICLE_FIELD_NAME.ARTICLE)}
                  errorText={getFieldError(ARTICLE_FIELD_NAME.ARTICLE)}
                  handleChange={setEditorData(ARTICLE_FIELD_NAME.ARTICLE)}
                  data={values[ARTICLE_FIELD_NAME.ARTICLE]}
                  minHeight={100}
                  readOnly={false}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={6} item>
            <Button type="sumbit" fullWidth disabled={isSubmitDisabled()}>
              {text('ARTICLE.CREATE.FORM.BUTTON.TITLE')}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
