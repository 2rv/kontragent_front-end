import { Formik } from 'formik';
import Grid from '@mui/material/Grid';
import { ArticleCommentSendFormComponent } from './frame/article-comment-send-form.component';

export const ArticleCommentSendComponent = (props) => {
  const { initialValue, validation, onSubmitForm } = props;

  return (
    <Grid item>
      <Formik
        initialValues={initialValue}
        validate={validation}
        onSubmit={onSubmitForm}
      >
        {(props) => (
          <ArticleCommentSendFormComponent {...props} />
        )}
      </Formik>
    </Grid>
  );
};
