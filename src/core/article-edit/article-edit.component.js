import { ArticleEditFormComponent } from './frames/article-edit-form.component';

import { Formik } from 'formik';
import { text } from '../../lib/common/text';
import Divider from '@mui/material/Divider';
import { Grid } from '@material-ui/core';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

export function EditArticleComponent(props) {
  const {
    updateIsPending,
    updateIsSuccess,
    updateIsError,
    updateErrorMessage,
    deleteIsPending,
    deleteIsSuccess,
    deleteIsError,
    deleteErrorMessage,
    loadDataPending,
    loadDataSuccess,

    initialValues,
    validation,
    onSubmit,
  } = props;

  return (
    <Paper>
      <Box>
        <Box>
          <Typography variant="heading" gutterBottom component="div">
            {text('ARTICLE.EDIT.TITLE')}
          </Typography>
        </Box>
        <Divider sx={{ mt: 5 }} />
        <Grid>
          {loadDataPending ? null : (
            <Formik
              initialValues={initialValues}
              validate={validation}
              onSubmit={onSubmit}
              enableReinitialize={true}
            >
              {(formProps) => {
                return (
                  <form onSubmit={formProps.handleSubmit}>
                    <ArticleEditFormComponent {...props} {...formProps} />
                  </form>
                );
              }}
            </Formik>
          )}
          {updateIsError && (
            <Box sx={{ pt: 4 }}>
              <Alert severity="error">
                {text(`ERROR.${updateErrorMessage}`)}
              </Alert>
            </Box>
          )}
          {deleteIsError && (
            <Box sx={{ pt: 4 }}>
              <Alert severity="error">
                {text(`ERROR.${deleteErrorMessage}`)}
              </Alert>
            </Box>
          )}
          {updateIsSuccess && (
            <Box sx={{ pt: 4 }}>
              <Alert severity="success">
                {text('ARTICLE.EDIT.FORM.SUCCESS')}
              </Alert>
            </Box>
          )}
          {(updateIsPending || loadDataPending || deleteIsPending) && (
            <Box sx={{ pt: 4, width: '100%' }}>
              <LinearProgress />
            </Box>
          )}
        </Grid>
      </Box>
    </Paper>
  );
}
