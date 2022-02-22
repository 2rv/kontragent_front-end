import { Formik } from 'formik';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';

import { text } from '../../lib/common/text';
import { SkeletonListComponent } from '../../lib/common/skeleton/skeleton-list.component';

import { CompanyAccountItemKontragentItemUpdateDataFormComponent } from './frame/company-account-item-kontragent-item-update-data-form.component';

export function CompanyAccountItemKontragentItemUpdateDataComponent(props) {
  const {
    pageLoading,

    isDependentPending,

    isPending,
    isSuccess,
    isError,
    errorMessage,

    initialValues,
    validate,
    onSubmit,
  } = props;

  return (
    <Grid container spacing={4}>
      <Grid item>
        <Typography
          variant="title"
          children={text('Дополнить информацию по контрагенту')}
        />
      </Grid>

      <Grid item>
        <Typography
          variant="subTitle"
          children={text(
            'Дополните информацию по контрагенту и получите бонус 5000 рублей на реферальный баланс',
          )}
        />
      </Grid>

      <Grid item>
        <Divider />
      </Grid>

      {isDependentPending ? (
        <Grid item>
          <SkeletonListComponent />
        </Grid>
      ) : (
        <Grid item>
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}
            enableReinitialize
          >
            {(formik) => (
              <CompanyAccountItemKontragentItemUpdateDataFormComponent
                {...formik}
                isPending={isPending}
                isError={isError}
                isSuccess={isSuccess}
                pageLoading={pageLoading}
              />
            )}
          </Formik>
        </Grid>
      )}

      {isError && (
        <Grid item>
          <Alert severity="error" children={text(`ERROR.${errorMessage}`)} />
        </Grid>
      )}

      {isSuccess && (
        <Grid item>
          <Alert severity="success" children={text('Успешно')} />
        </Grid>
      )}

      {isPending && (
        <Grid item>
          <LinearProgress />
        </Grid>
      )}
    </Grid>
  );
}
