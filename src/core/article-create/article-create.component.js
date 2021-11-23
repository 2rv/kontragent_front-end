import { ArticleCreateFormComponent } from './frames/article-create-form.component';

import { Formik } from 'formik';
import { text } from '../../lib/common/text';

import { Grid } from '@material-ui/core';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

export function CreateArticleComponent(props) {
  const {
    isPending,
    isSuccess,
    isError,
    errorMessage,

    initialValues,
    onSubmit,
    validation,
  } = props;

  return (
    <Paper>
      <Box>
        <Box>
          <Typography variant="heading" gutterBottom component="div">
            {text('ARTICLE.CREATE.TITLE')}
          </Typography>
        </Box>
        <Grid>
          <Formik
            initialValues={initialValues}
            validate={validation}
            onSubmit={onSubmit}
            enableReinitialize={true}
          >
            {(formProps) => {
              return (
                <form onSubmit={formProps.handleSubmit}>
                  <ArticleCreateFormComponent {...formProps} />
                </form>
              );
            }}
          </Formik>
          {isError && (
            <Box sx={{ pt: 4 }}>
              <Alert severity="error">{text(`ERROR.${errorMessage}`)}</Alert>
            </Box>
          )}
          {isSuccess && (
            <Box sx={{ pt: 4 }}>
              <Alert severity="success">
                {text('ARTICLE.CREATE.FORM.SUCCESS')}
              </Alert>
            </Box>
          )}
          {isPending && (
            <Box sx={{ pt: 4, width: '100%' }}>
              <LinearProgress />
            </Box>
          )}
        </Grid>
      </Box>
    </Paper>
  );
}
