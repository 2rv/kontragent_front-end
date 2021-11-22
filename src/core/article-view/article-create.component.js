import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid } from '@material-ui/core';
import { Formik } from 'formik';
// import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
// import { TitlePrimary } from '../../lib/element/title';
import { ARTICLE_FIELD_NAME } from './article-create.type';
import { FormComponent, DeleteProductComponent } from './frames';
// import { SelectImageBlock } from 'src/lib/common/block-select-image';
import { text } from '../../lib/common/text'

export function CreateArticleComponent(props) {
  const {
    pageLoading,
    isPending,
    isSuccess,
    isError,
    errorMessage,

    initialValues,
    onSubmit,
    validation,

    readOnly,
    edit,
    isUploadedSuccess,

    updateIsPending,
    updateIsError,
    updateIsSuccess,
    updateErrorMessage,
    deleteProduct,
    deleteIsPending,
    deleteIsError,
    deleteErrorMessage,
  } = props;

  const showeditor = edit ? (isUploadedSuccess ? true : false) : true;

  return (
    <Paper>
      <Box>
        <Box >
          <Typography variant="heading" gutterBottom component="div">
            {text('ARTICLE.LOGIN.TITLE')}
          </Typography>
        </Box>
        {/* {(pageLoading || isPending || updateIsPending) && <LoaderPrimary />} */}
        <Grid>
          {/* <TitlePrimary tid="ARTICLE_CREATE_FORM.CREATING_AN_ARTICLE" /> */}
          {showeditor && (
            <Formik
              initialValues={initialValues}
              // validate={validation}
              onSubmit={onSubmit}
              enableReinitialize={true}
            >
              {(formProps) => {
                return (
                  <form onSubmit={formProps.handleSubmit}>
                    <Grid>
                      {/* <SelectImageBlock
                    titleTid="PRODUCT_IMAGES.TITLE"
                    name={ARTICLE_FIELD_NAME.IMAGES}
                    {...formProps}
                  /> */}
                      <FormComponent
                        readOnly={readOnly}
                        edit={edit}
                        {...formProps}
                      />
                    </Grid>
                  </form>
                );
              }}
            </Formik>
          )}
          {/* {isSuccess && (
          <SuccessAlert tid="ARTICLE_CREATE_FORM.ARTICLE_SUCCESFULLY_CREATED" />
        )} */}
          {/* {isError && <ErrorAlert tid={errorMessage} />} */}
          {/* {updateIsSuccess && <SuccessAlert tid="Успешно обновлено" />} */}
          {/* {updateIsError && <ErrorAlert tid={updateErrorMessage} />} */}
          {/* <Divider /> */}
          {/* <DeleteProductComponent
          isEdit={isEdit}
          deleteProduct={deleteProduct}
          deleteIsPending={deleteIsPending}
          deleteIsError={deleteIsError}
          deleteErrorMessage={deleteErrorMessage}
        /> */}
        </Grid>
      </Box>
    </Paper>
  );
}
