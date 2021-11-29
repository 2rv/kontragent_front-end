import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { TextFieldElement } from '../../element/text-field.element';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';

import { FileListElement } from '../../element/file-list.element';

export function FileUploadFieldComponent(props) {
  const {
    initialValue,
    pageLoading,
    isPending,
    validation,
    onSubmitForm,
    isError,
    isSuccess,
    errorMessage,
    data,
    handleDelete,
  } = props;
  return (
    <Box fullWidth sx={{ pb: 4, width: '100%' }}>
      <Typography variant="fieldLabel" gutterBottom component="div">
        Добавить файлы
      </Typography>

      {data.length > 0 && (
        <Box sx={{ my: 2 }}>
          <FileListElement handleDelete={handleDelete} list={data} />
        </Box>
      )}

      <Form
        {...props}
        isPending={isPending}
        isError={isError}
        isSuccess={isSuccess}
        errorMessage={errorMessage}
        pageLoading={pageLoading}
      />

      {isError && (
        <Box sx={{ pt: 2 }}>
          <Alert size="small" severity="error">
            Ошибка: {errorMessage}
          </Alert>
        </Box>
      )}
      {isPending && (
        <Box sx={{ pt: 2, width: '30%' }}>
          <LinearProgress />
        </Box>
      )}
    </Box>
  );
}

export const Form = (props) => {
  const { onFileAdd } = props;

  return (
    <Paper fullWidth variant="outlined" sx={{ mt: 5, px: 2 }}>
      <Grid
        spacing={3}
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        flexWrap="wrap"
      >
        <Button
          sx={{ width: '200px' }}
          variant="grey"
          color="black"
          component="label"
        >
          Загрузить
          <input onChange={onFileAdd} type="file" hidden />
        </Button>
      </Grid>
    </Paper>
  );
};
