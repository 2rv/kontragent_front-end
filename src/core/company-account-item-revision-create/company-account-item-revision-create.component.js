import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { TextFieldElement } from '../../lib/element/text-field.element.js';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';

import { redirect } from '../../main/navigation/navigation.core';
import { COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME } from './company-account-item-revision-create.constant';

import { Formik } from 'formik';
import { FileUploadFieldContainer } from '../../lib/common/file-upload-field/file-upload-field.container.js';

export function CompanyAccountItemRevisionCreateComponent(props) {
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
    <Box>
      <Paper>
        <Box>
          <Box sx={{ pb: 4 }}>
            <Typography variant="title" gutterBottom component="div">
              Cоздание запроса на проверку
            </Typography>
            <Typography variant="subTitle" component="div">
              Создайте запрос на проверку контрагента вашей компании и получите
              детальный отчет
            </Typography>
          </Box>

          <Divider />

          <Formik
            initialValues={initialValue}
            validate={validation}
            onSubmit={onSubmitForm}
          >
            {(props) => (
              <Form
                {...props}
                isPending={isPending}
                isError={isError}
                isSuccess={isSuccess}
                errorMessage={errorMessage}
                pageLoading={pageLoading}
              />
            )}
          </Formik>

          {isError && (
            <Box sx={{ pt: 4 }}>
              <Alert severity="error">Ошибка: {errorMessage}</Alert>
            </Box>
          )}
          {isSuccess && (
            <Box sx={{ pt: 4 }}>
              <Alert severity="success">Запрос успешно отправлен</Alert>
            </Box>
          )}
          {isPending && (
            <Box sx={{ pt: 4, width: '100%' }}>
              <LinearProgress />
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  );
}

export const Form = (props) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
    isSubmitting,
    setFieldValue,
    pageLoading,
    isSuccess,
    isPending,
    isError,
    errorMessage,
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
              label="Название компании контрагента"
              name={COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME.TITLE}
              onChange={handleChange}
              onBlur={handleBlur}
              value={
                values[COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME.TITLE]
              }
              error={isFieldError(
                COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME.TITLE,
              )}
              fullWidth
              errorText={getFieldError(
                COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME.TITLE,
              )}
            />
          </Grid>

          <Grid xs={12} item>
            <TextFieldElement
              label="Описание запроса, информация, вопросы"
              name={COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME.DESCRIPTION}
              onChange={handleChange}
              onBlur={handleBlur}
              value={
                values[
                  COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME.DESCRIPTION
                ]
              }
              error={isFieldError(
                COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME.DESCRIPTION,
              )}
              fullWidth
              errorText={getFieldError(
                COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME.DESCRIPTION,
              )}
              multiline
              minRows={4}
              maxRows={20}
            />
          </Grid>

          <Grid item xs={12}>
            <FileUploadFieldContainer
              onFileAdd={(value) => {
                setFieldValue(
                  'fileIdList',
                  value.map((i) => i.id),
                );
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Grid container>
              <Grid xs={4}>
                <Button fullWidth type="sumbit" disabled={isSubmitDisabled()}>
                  Создать запрос
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
