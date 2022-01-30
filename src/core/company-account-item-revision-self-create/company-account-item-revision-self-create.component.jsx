import { Formik } from 'formik';
import {
  Divider,
  Grid,
  Paper,
  Typography,
  Alert,
  LinearProgress,
} from '@mui/material';
import { text } from '../../lib/common/text';
import { CompanyAccountItemRevisionSelfCreateFormComponent } from './frame/company-account-item-revision-self-create-form.component';
import { CompanyAccountItemRevisionSelfCreatePriceComponent } from './frame/company-account-item-revision-self-create-price.component';
import { CompanyAccountItemRevisionSelfCreatePeriodListComponent } from '../company-account-item-revision-self-create-period-list/company-account-item-revision-self-create-period-list.component';

export function CompanyAccountItemRevisionSelfCreateComponent(props) {
  const {
    pageLoading,
    isPending,
    isSuccess,
    isError,
    errorMessage,
    initialValue,
    validation,
    onSubmitForm,
    initialYear,
  } = props;
  return (
    <Formik
      initialValues={initialValue}
      validate={validation}
      onSubmit={onSubmitForm}
    >
      {(formik) => {
        return (
          <Grid
            spacing={6}
            container
            component="form"
            onSubmit={formik.handleSubmit}
          >
            <Grid item>
              <Typography variant="heading" component="div">
                {text(
                  'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_COMPANY_LIST.TITLE1',
                )}
              </Typography>
            </Grid>

            <Grid item>
              <Paper>
                <Grid container spacing={4}>
                  <Grid item>
                    <Typography
                      variant="title"
                      component="div"
                      children={text(
                        'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_COMPANY_INFO.TITLE',
                      )}
                    />
                  </Grid>

                  <Grid item>
                    <Typography
                      variant="subTitle"
                      component="div"
                      children={text(
                        'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_COMPANY_INFO.SUBTITLE',
                      )}
                    />
                  </Grid>

                  <Grid item>
                    <Divider />
                  </Grid>

                  <Grid item>
                    <CompanyAccountItemRevisionSelfCreateFormComponent
                      {...formik}
                    />
                  </Grid>

                  <Grid item>
                    <Divider />
                  </Grid>

                  <Grid item>
                    <CompanyAccountItemRevisionSelfCreatePeriodListComponent
                      {...formik}
                      initialYear={initialYear}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item>
              <Paper>
                <Grid container spacing={4}>
                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      children={text(
                        'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISION_CREATE_COMPANY_PRICE.TITLE',
                      )}
                    />
                  </Grid>

                  <Grid item>
                    <Divider />
                  </Grid>

                  <Grid item>
                    <CompanyAccountItemRevisionSelfCreatePriceComponent
                      totalPrice={0}
                    />
                  </Grid>

                  {isError && (
                    <Grid item>
                      <Alert severity="error">
                        {text(`ERROR.${errorMessage}`)}
                      </Alert>
                    </Grid>
                  )}

                  {isSuccess && (
                    <Grid item>
                      <Alert severity="success">
                        {text(
                          'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISION_SENT_SUCCESSFULLY',
                        )}
                      </Alert>
                    </Grid>
                  )}

                  {isPending && (
                    <Grid item>
                      <LinearProgress />
                    </Grid>
                  )}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        );
      }}
    </Formik>
  );
}
