import { Formik } from 'formik';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';
import LinearProgress from '@mui/material/LinearProgress';
import { text } from '../../lib/common/text';

import { CompanyAccountItemRevisionSelfCreateFormComponent } from './frame/company-account-item-revision-self-create-form.component';
import { CompanyAccountItemRevisionSelfCreatePriceComponent } from './frame/company-account-item-revision-self-create-price.component';
import { CompanyAccountItemRevisionSelfCreatePeriodListComponent } from '../company-account-item-revision-self-create-period-list/company-account-item-revision-self-create-period-list.component';
import { getCompanyAccountItemRevisionSelfPrice } from './company-account-item-revision-self-create.convert';
import { COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME as FIELD_NAME } from './company-account-item-revision-self-create.constant';

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
        const TOTAL_PRICE = getCompanyAccountItemRevisionSelfPrice(
          formik.values[FIELD_NAME.YEARS],
        );

        return (
          <Grid
            spacing={6}
            container
            component="form"
            onSubmit={formik.handleSubmit}
          >
            <Grid item>
              <Typography
                variant="heading"
                component="div"
                children={text(
                  'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_COMPANY_LIST.TITLE',
                )}
              />
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
                      totalPrice={TOTAL_PRICE}
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
