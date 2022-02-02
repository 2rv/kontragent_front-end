import { FieldArray, Formik } from 'formik';
import { Fragment } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';
import { text } from '../../lib/common/text';

import { CompanyAccountItemRevisionKontragentCreateFormComponent } from './frame/company-account-item-revision-kontragent-create-form.component';
import { CompanyAccountItemRevisionKontragentCreatePriceComponent } from './frame/company-account-item-revision-kontragent-create-price.component';
import { CompanyAccountItemRevisionKontragentCreatePeriodListComponent } from '../company-account-item-revision-kontragent-create-period-list/company-account-item-revision-kontragent-create-period-list.component';
import { COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME } from './company-account-item-revision-kontragent-create.constant';
import { CompanyAccountItemRevisionKontragentCreateKontragentListContainer } from '../company-account-item-revision-kontragent-create-kontragent-list/company-account-item-revision-kontragent-create-kontragent-list.container';
import { getCompanyAccountItemRevisionKontragentPrice } from './company-account-item-revision-kontragent-create.convert';

export function CompanyAccountItemRevisionKontragentCreateComponent(props) {
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
    initialKontragent,
  } = props;

  return (
    <Formik
      initialValues={initialValue}
      validate={validation}
      onSubmit={onSubmitForm}
    >
      {(formik) => {
        const KONTRAGENTS =
          formik.values[
            COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME
              .KONTRAGENTS
          ];

        const TOTAL_PRICE =
          getCompanyAccountItemRevisionKontragentPrice(KONTRAGENTS);
        return (
          <Grid
            spacing={6}
            container
            component="form"
            onSubmit={formik.handleSubmit}
          >
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

                  <FieldArray
                    name={
                      COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME.KONTRAGENTS
                    }
                  >
                    {({ remove, push }) => (
                      <Grid
                        item
                        container
                        direction="row"
                        justifyContent="flex-start"
                        spacing={4}
                        columns={{ xs: 1, md: 4 }}
                      >
                        {KONTRAGENTS.map((value, index) => (
                          <Fragment key={index}>
                            <Grid item xs={1} md={4}>
                              <CompanyAccountItemRevisionKontragentCreateKontragentListContainer
                                {...formik}
                                index={index}
                                value={value}
                              />
                            </Grid>

                            <Grid item xs={1} md={4}>
                              <CompanyAccountItemRevisionKontragentCreateFormComponent
                                {...formik}
                                index={index}
                                value={value}
                              />
                            </Grid>

                            <Grid item xs={1} md={4}>
                              <CompanyAccountItemRevisionKontragentCreatePeriodListComponent
                                {...formik}
                                index={index}
                                value={value}
                                initialYear={initialYear}
                              />
                            </Grid>

                            {KONTRAGENTS.length > 1 && (
                              <Grid item xs={1} md={2}>
                                <Button
                                  variant="red"
                                  fullWidth
                                  onClick={() => remove(index)}
                                  children={text(
                                    'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_COMPANY_ITEM.BUTTON',
                                  )}
                                />
                              </Grid>
                            )}

                            <Grid item xs={1} md={4}>
                              <Divider />
                            </Grid>
                          </Fragment>
                        ))}
                        <Grid item xs={1} md={2}>
                          <Button
                            fullWidth
                            variant="black"
                            onClick={() => push(initialKontragent)}
                            children={text(
                              'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_COMPANY_LIST.BUTTON',
                            )}
                          />
                        </Grid>
                      </Grid>
                    )}
                  </FieldArray>
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
                    <CompanyAccountItemRevisionKontragentCreatePriceComponent
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
