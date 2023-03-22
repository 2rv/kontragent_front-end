import { FieldArray, Formik } from 'formik';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import { text } from '../../lib/common/text';
import { SelectFieldComponent } from '../../lib/common/select-field/select-field.component';

import { COMPANY_TYPE_OPTIONS } from '../company-admin-import/company-admin-import.constant';
import { COMPANY_ADMIN_IMPORT_FORM_DATA_NAME as FIELD_NAME } from './company-admin-import-form.constant';
import { CompanyAdminImportFormItemComponent } from './frame/company-admin-import-form-item.component';
import { Fragment } from 'react';

export function CompanyAdminImportFormComponent(props) {
  const {
    isPending,
    isSuccess,
    isError,
    errorMessage,
    onSubmit,
    initialValues,
    initialCompany,
  } = props;

  return (
    <Grid
      container
      spacing={4}
      direction="row"
      alignItems="flex-start"
      justifyContent="flex-start"
    >
      <Grid item xs={6}>
        <Typography variant="title" children={text('Импорт компаний')} />
      </Grid>

      <Grid item xs={12}>
        <Divider />
      </Grid>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validateOnChange={false}
      >
        {(formik) => {
          return (
            <FieldArray name={FIELD_NAME.COMPANIES}>
              {({ remove, push }) => (
                <Grid
                  item
                  container
                  spacing={4}
                  direction="row"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <Grid item xs={6}>
                    <SelectFieldComponent
                      label="Тип импортируемой компании"
                      options={COMPANY_TYPE_OPTIONS}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name={FIELD_NAME.TYPE}
                      value={formik.values[FIELD_NAME.TYPE]}
                    />
                  </Grid>

                  <Grid item container spacing={4}>
                    {formik.values[FIELD_NAME.COMPANIES].map((value, index) => (
                      <Fragment key={index}>
                        <Grid item>
                          <CompanyAdminImportFormItemComponent
                            value={value}
                            index={index}
                            onRemove={remove}
                            handleChange={formik.handleChange}
                            handleBlur={formik.handleBlur}
                          />
                        </Grid>

                        <Grid item>
                          <Divider />
                        </Grid>
                      </Fragment>
                    ))}
                  </Grid>

                  <Grid item xs={6}>
                    <Button
                      fullWidth
                      onClick={() => {
                        push(initialCompany);
                      }}
                      children={text('Добавить компанию')}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Button
                      fullWidth
                      disabled={!formik.values[FIELD_NAME.COMPANIES]?.length}
                      color="success"
                      onClick={formik.handleSubmit}
                      children={text('Импортировать')}
                    />
                  </Grid>
                </Grid>
              )}
            </FieldArray>
          );
        }}
      </Formik>

      {isPending && (
        <Grid item xs={12}>
          <LinearProgress />
        </Grid>
      )}
      {isSuccess && (
        <Grid item xs={12}>
          <Alert severity="success" children={text('Успешно')} />
        </Grid>
      )}
      {isError && (
        <Grid item xs={12}>
          <Alert severity="error" children={text(errorMessage)} />
        </Grid>
      )}
    </Grid>
  );
}
