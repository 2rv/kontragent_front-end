import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
import { text } from '../../lib/common/text';
import { Formik } from 'formik';
import Grid from '@mui/material/Grid';
import { ArticleCommentSendFormComponent } from './frame/article-comment-send-form.component';

export function ArticleCommentSendComponent(props) {
  const {
    initialValue,
    pageLoading,
    isPending,
    validation,
    onSubmitForm,
    isError,
    isSuccess,
    errorMessage,
  } = props;

  return (
    <Grid sx={{ mx: 8 }} item>
      <Divider />

      <Formik
        initialValues={initialValue}
        validate={validation}
        onSubmit={onSubmitForm}
      >
        {(props) => (
          <ArticleCommentSendFormComponent
            {...props}
            isPending={isPending}
            isError={isError}
            isSuccess={isSuccess}
            errorMessage={errorMessage}
            pageLoading={pageLoading}
          />
        )}
      </Formik>
    </Grid>
  );
}
